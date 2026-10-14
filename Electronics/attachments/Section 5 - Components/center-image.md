<%*
// 1. Fetch active editor and the exact line text
const editor = app.workspace.activeLeaf.view.editor;
const cursor = editor.getCursor();
const lineText = editor.getLine(cursor.line).trim();

// 2. Safely verify it's a standard markdown image link
if (lineText.startsWith('![](') && lineText.endsWith(')')) {
    // 3. Strip off "![](" from the front and ")" from the back to isolate the path
    const rawPath = lineText.substring(4, lineText.length - 1);
    
    // 4. Overwrite the line with a standard, renderable HTML block
    const wrappedContent = `<p align="center"><img src="${rawPath}" /></p>`;
    editor.setLine(cursor.line, wrappedContent);
    
    // 5. Force the cursor to snap cleanly to the absolute end of the closing </p> tag
    editor.setCursor({ line: cursor.line, ch: wrappedContent.length });
}
_%>
