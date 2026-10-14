module.exports = async (params) => {
    // 1. Get the correct plugin reference to switch the settings panel data
    const tocPlugin = app.plugins.plugins["obsidian-plugin-toc"];
    if (!tocPlugin) {
        new Notice("Table of Contents plugin not found!");
        return;
    }

    // 2. Cleanly read the text contents of the active note file
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) return;

    let fileContent = await app.vault.read(activeFile);
    
    // 3. Define the tracking regex for our heading block layout
    const existingTocRegex = /## Table of Contents\s*\n(?:^[ \t]*[-*+]\s+\[.*\]\(#.*\)\s*\n?)+\n*/m;
    const hasTOC = existingTocRegex.test(fileContent);

    let targetState;

    if (!hasTOC) {
        // SMART DEFAULT: No TOC found means it's a new file. Force Obsidian Mode (%20 Spaces)
        targetState = false; 
    } else {
        // STANDARD TOGGLE: A TOC exists. Flip the current backend compliance configuration properties
        const currentSetting = tocPlugin.settings.githubCompliance || tocPlugin.settings.githubCompliant || false;
        targetState = !currentSetting;
    }

    // 4. Save the target setting down to disk storage
    tocPlugin.settings.githubCompliance = targetState;
    tocPlugin.settings.githubCompliant = targetState;
    await tocPlugin.saveData(tocPlugin.settings);

    // 5. Force the graphical preference menus to instantly update their toggles
    if (app.setting && typeof app.setting.updateAllViews === "function") {
        app.setting.updateAllViews();
    }

    // 6. Generate the freshly typeset list of links based on your active note headers
    const cache = app.metadataCache.getFileCache(activeFile);
    if (!cache || !cache.headings) {
        new Notice("No headings found in this note to build a Table of Contents!");
        return;
    }

    let generatedTOC = "## Table of Contents\n";
    cache.headings.forEach(h => {
        if (h.heading.toLowerCase() === "table of contents") return;

        const indent = "    ".repeat(Math.max(0, h.level - 1));
        
        // 🚀 SMART LOGIC: Convert any literal '&' symbol to a plus sign '+' for the link text
        let displayHeading = h.heading.replace(/&/g, '+');
        let anchor = "";

        if (targetState) {
            // 🚀 GitHub Mode Anchor Layout
            anchor = displayHeading.toLowerCase().replace(/[^a-z0-9\s-_]/g, '').replace(/\s+/g, '-');
        } else {
            // 📱 Obsidian Mode Anchor Layout: Strips the plus sign so the link remains clickable
            let cleanHeading = displayHeading.replace(/\+/g, '');
            anchor = encodeURIComponent(cleanHeading);
        }
        generatedTOC += `${indent}- [${displayHeading}](#${anchor})\n`;
    });
    
    // SMART PAD: Appends a dedicated empty row at the bottom of the block
    generatedTOC += "\n";

    // 7. Inject or replace the block with absolute structural precision
    if (hasTOC) {
        fileContent = fileContent.replace(existingTocRegex, generatedTOC);
    } else {
        fileContent = generatedTOC + fileContent;
    }

    // 8. Commit the clean file changes to disk
    await app.vault.modify(activeFile, fileContent);
    
    // 9. Visual alert notice status update
    const currentMode = targetState ? "🚀 GitHub Mode (Hyphens)" : "📱 Obsidian Mode (%20 Spaces)";
    new Notice(`TOC Switched to: ${currentMode}`);
};
