
## Table of Contents
- [The Components](#the-components)
- [First Circuit](#first-circuit)
- [Opens, Shorts + Troubleshooting](#opens-shorts--troubleshooting)
- [Build the Flashlight](#build-the-flashlight)

# The Components
Now headed towards real working circuit. So will explore the 5 main parts, and the diagram schematic notation for each.

Voltage: The potential difference, the push. One long line for the + end one short for the - end.
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011151832603.png" /></p>

Switch: A break in circuit that is adjustable. Drawn as a lever caught mid-lift.
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011151853769.png" /></p>

Light source: Like lamp is encircled X. The LEDs or any diode’s is actually an arrow with a bar across nose, arrow pointing with current (ignore little arrows just current dir.)
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011151913510.png" /></p>
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011151929502.png" /></p>

Resistor: The brake, drawn as a zigzag. A fight you can see, charge bouncing side to side through the squeeze. Some parts of world use little rectangles in schematic.
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011152046206.png" /></p>

So then the schematic flow (w/ engineering/conventional current) for a simple circuit is as follows:

- Out of the voltage’s long + line
- Through the switch’s lever
- Through the resistor’s zigzag
- Through the LED’s arrow
- Home to the short - line

And note in general, a schematic shows electrical connections, not physical placement.

# First Circuit
Battery + Resistor + LED

Look around a dark room, many circuits have an LED. Whether standby dots, charger glows, or router blinks. Every one is an LED. They actually have a direction. Long leg is the Anode (towards $+$) and short leg is the Cathode (towards $-$). So it’s one way, when facing forward (direction of current) then current can pass, otherwise none. Lead length is the usual clue.

With no resistor on an Led circuit with 9 $\text{V}$, the current slams past Led’s 50 $\text{mA}$ safety ceiling far beyond what it needs. Add 330 $\ohm$ resistor and get a calm 3 $\text{mA}$, bright enough and built to last.

If you have a 2 $\text{V}$ LED ie. it opens up at that voltage, and a 3 $\text{V}$ battery, something has to soak up the difference and it must NOT be the Led as it will surpass safety rating, potentially burn out. So a resistor acts as brake, take the leftover potential difference and holds the current to a few gentle milliamps with steady glow. The complete loop with resistor guarding and LED facing forward, gets light. Push, brake, payoff.
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011152539884.png" /></p>

The schematic and breadboard are the same electrical story, the schematic just skips the geometry. Learn to hop between them and every circuit diagram on Earth becomes a build guide. Here we see a closed circuit loop on a 9 $\text{V}$ potential diff, with resistor and LED facing forward (anode on $+$ive side). Every standby dot around you is this exact circuit, and now it’s one you can build cold. Push, tame, glow, return.

- Voltage pushes the charge out
- Resistor tames the current flow
- LED turns motion of charge into light
- Loop carries all sea of charge home

# Opens, Shorts & Troubleshooting
Every dead gadget in history had one of two “deaths” , both fixable. Learn both and the three checks to tell apart, never stare blankly at a dark circuit again.

Take a healthy loop with voltage, charge motion and glowing Led. Now will dead it both ways.

Open: first one. A wire snaps, a joint cracks, a plug wiggles loose. The loop gains a gap, and everything stops. No flow anywhere. A break in the intended path, zero everywhere.

Short: second one. An unintended easy path appears, bare wires touching, and sea of charge flows down the shortcut, skipping the Led entirely.

The short is the nasty one, almost no resistance in that shortcut means a huge current flow. Wires heat, insulation melts. Shorts start fires. Real circuits carry fuses precisely for this. A short is an unintended low resistance path, load goes dark while current flow jumps. In the 3 $\text{V}$ battery with 330 $\ohm$ resistor and 2 $\text{V}$ rated Led, the current jumps from 3 to 9 $\text{mA}$ already just by shorting the Led. If the resistor’s brake were also stripped, jump becomes a dangerous flood.

Open is no flow, dark and quiet. Short is too much flow, dark lamp but hot wire. Same symptom, opposite diseases and now can tell them apart. Note in an open, zero current but voltage source still waits just not complete circuit. And in a short, flow takes easy route while current multiplies dangerously. Opens run cold, shorts run hot.

A dead circuit is a mystery with only three suspects. Electricity needs a push, a loop, and a sane path. One of them is missing, so check voltage source, whether loop is closed, and if path is through load not shorted.
- Check One: The push. Voltage, is the battery dead, empty or in backwards? No push no motion. This suspect alone solves half of all cases.
- Check Two: The loop. Walk the circle hunting for a gap. A snapped wire, a loose plug, a switch someone left open. Any break kills everything.
- Check Three: The path. Is the flow of current sneaking shortcut around something? Bare wires touching, a stray solder blob - a short steals the motion of sea, from the load.

Push, loop, path. Three checks in that order every time. Can troubleshoot rather than stare.

Take a real dark board.
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011152944562.png" /></p>

Led is dark and fuse filament is open. Disconnect source before touching board. Next with board de-energized, inspect where fused supply can reach return without a load. The solder blob joins the protected supply directly to return, bypassing both R1 and D1. That short explains the open fuse.

Excess solder is wicked away. Supply and return are separated again, now replace fuse that protected the board. With a fresh fuse installed after cause removed, reconnect the 9 $\text{V}$ clip for functional test. Protected current now follows intended path of fuse → resistor → Led loop. F1 stays intact, R1 limits current, D1 glows through intended closed loop. Note if Led/diodes anode and cathode are wrongly reversed, that will also cause zero current.

# Build the Flashlight
Push, flow, break, glow. One circuit to practice. Four ways to view.

Direct view. The object itself.

X-ray view. Two batteries, switch, resistor, LED, threaded together in a closed circuit by one copper wire. The spring at the bottom hits the batteries their metal conducts straight up to the metal at the top, which is connected to a resistor and next LED and then the copper wire leads back to the bottom connected to the spring.

Exploded view. Every part floated out along barrel. This is how engineers look at a device, not a mystery box, a loop wearing a case.

Schematic view. Battery -> resistor → LED → home. A real flashlight and this schematic drawing are the same sentence in two languages. Fancier flashlights add driver electronics - the loop is still their skeleton.

Then in real flashlight add batteries, there is resistor and LED and switch, then turn switch on. Contacts met so loop completed, field rose, sea drifted, meter climbed ,then Led fired.

Now, diagnose and repair a failed flashlight.
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011160930236.png" /></p>

Build the field indicator: choose a safe visible current resistor, orient D1, and install loose return jumper (down below). Return jumper installed between two lower pads, R1 at 560 $\ohm$ gives 12.5 $\text{mA}$ from 9 $\text{V}$. (The 100 $\ohm$ allows 70 $\text{mA}$ far above typical indicator Led limit, and 2.2 $\text{k}\ohm$ limits safely to 3.2 $\text{mA}$ but Led may be too dim to see). D1 polarity set to correct, long anode towards R1, short cathode towards return.

At this point, P1 reads 9 $\text{V}$ relative to ground clip, good so far. P2 also reads 9 $\text{V}$ relative. But P3 after J1, reads 0 $\text{V}$ relative. So disconnect power again, inspect J1. Full source lost across this dull connection J1 because goes from 9 $\text{V}$ P2 to 0 $\text{V}$ after in P3. After reflow of J1 and power on, it works again Led glows.
<p align="center"><img src="attachments/Section%204%20-%20Circuits%20I/img-20261011161039153.png" /></p>

Recap:

Mobile electrons the “sea of charge” move through metal wire when current flows. Voltage provides the potential difference the ready push, waiting at source. Current is the organized charge flow it drives, the motion of sea of charge, counted in amps at a point. Resistance limits that flow taming current to a threshold, brake that keeps every part alive and safe. The loop is the deal breaker, one complete conducting path, or none of the above. Push flow, brake, loop. If current decreasing all other things held even, voltage source may be fading. A switch works equally well anywhere in loop.