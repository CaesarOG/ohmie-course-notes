
## Table of Contents
- [Meet the Components](#meet-the-components)
- [Resistor Family](#resistor-family)
- [Reading Resistor Bands](#reading-resistor-bands)
- [Capacitors Store Charge](#capacitors-store-charge)
- [Diodes: One-way Streets](#diodes-one-way-streets)
- [Switches + Buttons](#switches-buttons)
- [The Twistable Resistor](#the-twistable-resistor)
- [The Components Gauntlet](#the-components-gauntlet)

# Meet the Components
Crack open any electronics device will see the same little parts doing all the work - resistors, capacitors, diodes, switches. Will explore all of them now, then can pick up any circuit board and recognize every part in it, and read any resistor’s stripes at a glance.

# Resistor Family
Seven resistors shown, two black chips no bigger than rice grains, four banded tubes, and a white cement block of 5 $\text{W}$ 10 $\ohm\text{J}$ . Each of them sets how much current gets through.

So a 5 $\text{V}$ with 3 $\text{k}\ohm$ only gives 1.67 $\text{mA}$ current and Led starves, at 300 $\ohm$ it climbs past 10 $\text{mA}$ to 16.7 and Led bright. The energy a resistor takes out of the loop turns into heat. A bigger resistance obviously lets less current through, converts more energy to heat.

# Reading Resistor Bands
There are four colored stripes, not one printed digit, read them in the right order and the part tells you its value. They are too tiny for printed numbers that might even fade/scratch, so they wear their value as colored stripes.

Hold the gold band to the right (which is $+/- 5\%$ tolerance) , then read left to right:

- First band is a digit
- Second band is a digit
- Third band multiplies

Each color is a digit, black 0, brown 1, red 2, orange 3, yellow 4. In fact the whole code up to 9 is BBROYGBVGW that is: black, brown, red, orange, yellow, green, blue, violet, grey, white.

- Black: 0
- Brown: 1
- Red: 2
- Orange: 3
- Yellow: 4
- Green: 5
- Blue: 6
- Violet: 7
- Grey: 8
- White: 9

Then the third band adds that many zeros, brown is $10\text{x}$, red $100\text{x}$, orange $1000\text{x}$. So red-red-brown is $22$ and $10\text{x}$ so 220 $\ohm$. Big values get shortened, 10,000 $\ohm$ is written as 10 $\text{k}\ohm$, the $\text{k}$ meaning a thousand.

Brown: $10\text{x}$

Red: $100\text{x}$

Orange: $1000\text{x}$

As you saw the red-red-brown for 220 $\ohm$ . This value is a common choice in series with an Led on 5 $\text{V}$ . The Led holds about 2 $\text{V}$ and other 3 $\text{V}$ across 220 $\ohm$ gives about 14 $\text{mA}$.

A brown-black-orange is 10 $\text{k}\ohm$ , this is what commonly needed as pull-up for microcontroller. Two others keep brown and black for first two bands, and move third band: brown gives 100 $\ohm$ , red gives 1 $\text{k}\ohm$ , there’s even yellow that gives 100 $\text{k}\ohm$ . A red-red-orange is 22 $\text{k}\ohm$ . A pull-up is a resistor holding an input pin at 5 $\text{V}$ until a button pulls it down to 0 $\text{V}$ , through 10 $\text{k}\ohm$ that pressed button passes 0.5 $\text{mA}$ .

Digit, digit, multiplier - on any four band resistor. And remember to hold gold to the right when reading else the numbers come backwards.

# Capacitors Store Charge
Feed this part charge down a wire and it swells with charge like a balloon. Give it a path out and everything it holds leaves in one blink. The capacitor is normally drawn as two equal sized plates and a gap.
<p align="center"><img src="attachments/Section%205%20-%20Components/img-20261011173541129.png" /></p>

The two metal plates face each other across a thin gap and never touch. The gap holds an insulator, called the dielectric: gap of air in diagram, a thin plastic or ceramic film in a real part. So on its own, no current can cross. Wire in a battery and it shoves charge around the loop, $+$ piles on the left plate, $-$ piles onto the right. Nothing jumps the gap, the charge just parks.

The parked $+$ charge pulls on the $-$ charge across the gap. That pull, stretched between the plates is called an electric field, amber arrows show it running from $+$ plate to the $-$ plate. That field is what capacitor stores: the energy sits in the gap, not in the metal.
<p align="center"><img src="attachments/Section%205%20-%20Components/img-20261011173734751.png" /></p>

Soon the plates hold all the charge the voltage source can force in: the voltage across them now matches the battery’s own for example, so they push back just as hard. The inflow stops, the capacitor or cap is full. That is a capacitor, charge parked on two plates and energy held in the field between them. Unplug the battery and charge stays parked until a lamp or wire joins the two plates and gives it a path.

A battery keeps its energy in a chemical reaction and releases it only as fast as the chemistry runs, a capacitor keeps it in a stretched field, with nothing to react and nothing to move, so it can hand it all back at once. A capacitor fills fast at first then a trickle fill decaying logarithmically. The fuller the plates, the harder they push back against the battery, so the current shrink as the meter climbs and a full cap takes none. That is why DC, a steady one way current, cannot get through a capacitor. Dump, and everything the plates held leaves in one blink. That is how a camera flash tube fires.

Bigger plates have room for more charge, and a thinner gap lets the $+$ and $-$ charges pull on each other harder, so both make a capacitor that stores more. A real part rolls or stacks its plates to pack a lot of area into a small body.

# Diodes: One-way Streets
Same Led, same battery, lit one way around, dark the other. One part on this board is choosing. The diagrams draw it as a road, traffic the triangle/arrow’s way gets through, traffic the other way stops at the bar.

One way, the arrows way, triangle to bar. Forward, the readout showed 4.3 $\text{V}$ of the battery’s 5 $\text{V}$ , this diode is made of silicon, which holds back about 0.7 $\text{V}$ while it conducts. Reversed 0 $\text{V}$ reached the lamp. The capacitor you flipped afterwards has a right way round too, backwards it swelled instead of blocking.

Silicon sets the number of 0.7 $\text{V}$ drop, a thousand times more current only nudges it from about 0.6 $\text{V}$ to about 1 $\text{V}$. Plan with 0.7 $\text{V}$, or a 5 $\text{V}$ battery through one diode hands the Led 4.3 $\text{V}$ .

When an electrolytic capacitor is backwards. Since they are by nature polarized, the $+$ end belongs on the battery’s $+$ side. But if the $-$ side ($-$ in a diagram, striped on the real can) faces the voltage $+$ , wired backwards it heats, bulges and can burst. Read the stripe before the power goes on.

Diodes let current flow in only one direction. Point the arrow the way current should go, on the part the stripe mars the bar end, the cathode end. It is printed there because which way round matters as much as the part number.

# Switches & Buttons
In [Circuits I](Section%204%20-%20Circuits%20I.md) an open was a fault. Now will think of loop with the same gap, but with a drawbridge across it. Bridge down, Led lights, bridge up it goes dark. A switch is a gap you can decide and control to have the circuit alive or not. The two pieces of metal inside a switch are its contacts. Pull them apart and the loop has a gap: current stops everywhere in it. Push them together, metal touches metal and current flows again. The symbol draws that gap open, with its lever, called the blade, ready to swing shut.
<p align="center"><img src="attachments/Section%205%20-%20Components/img-20261011175022814.png" /></p>

You can imagine different switches as well:

- Push-to-make: such as a pushable button with a spring, where you push-to-close the loop and when it is not pressed the circuit is not alive. Doorbell, keyboard key.
- Push-to-break: the opposite of above, take a light loop like a fridge, where the door pushes a switch that opens the loop, so opening the door releases to make the switch close the loop.

When you press a push-to-make (close) button with a spring that turns on ie. closes a switch, the spring opens the contacts when your finger lifts so the Led went out. The replay slowed a thousand times for that one press shows actually the contacts bounced, touching like 11 times in about 2 milliseconds, and the last touch held. A finger never notices, but a microcontroller reads 11 presses unless its code waits out that bounce.

A push-to-break like a fridge light circuit, the closing door pushes that lifts up the switch and light goes out. So pressing opens the loop via that push lifting the spring-switch like a lever. Remove the push and circuit closes and is alive.

Most buttons are push-to-make and close the loop when pressed, push-to-break is the rare one, the right part wherever a press should mean off. While we see in definition of push-to-make that spring back include doorbell and keyboard key, the regular toggle that stays put is also common including light switch and circuit breaker. A breaker in particular, the safety switch where power enters a building unit / house, is a toggle with one extra: a metal strip inside that heats and bends when too much current passes, that bend trips the blade open on its own. The fuse basically toggles it off.

Recap: remember the flashlight / Led circuit from [Circuits I](Section%204%20-%20Circuits%20I.md) . Voltage, resistor, switch, Led/lamp. Only the switch has a moving part, and whether any current passes through the other three depends on where its blade sits. When any switch open, voltage source still holds but nothing flows, when closed current runs the whole loop and all components have the flow.

# The Twistable Resistor
The potentiometer or pot, is a twistable resistor. Volume knobs, dimmer dials, joysticks: under most of them sits this same part. Pull the knob off its shaft and this is what is left, the potentiometer or pot. From the outside it is a sealed metal can with a slotted shaft on top and three legs underneath. Lift the can off. Inside is a dark horseshoe of carbon, the resistive track, with a small metal arm resting on it. The gap in the horseshoe faces the front, between the two outer legs.

The horseshoe track is one plain resistor. Its two ends run down to the two outer legs, and leg-to-leg the full resistance never changes. The arm is the wiper, it presses on the track and turns with the shaft. It is wired straight to the middle leg, so the middle leg connects to whichever point on the track the arm is touching. Twist the shaft and the wiper slides. The amber part of the track, from one end up to the wiper, is one slice of the full resistance, and the middle leg brings that slice out of the can.
<p align="center"><img src="attachments/Section%205%20-%20Components/img-20261011175400831.png" /></p>

Keep twisting left and the slice grows. Between the middle leg and either end leg you can set anything from almost zero $\ohm$ (all the way right) up to the full track (all the way left). Obviously all the way left with full resistance means current is lower (ie. think lowest volume) whereas all the way right zero $\ohm$ means max current is allowed (ie. think highest volume). Here in picture there is not much resistance left so near max allowed for current. So when you twist a pot’s shaft, the wiper moves inside, sliding along the horseshoe track to determine how much resistance. The track stays put, only the point where the wiper touches it moves. The resistance between the wiper and either end changes smoothly with the turn, so a pot has no steps or clicks.

Where does full volume live? At full current (zero $\ohm$) or the top of the sweep. At this full blast, the wiper is at the $+$ end. The whole 5 $\text{V}$ sits across the track, end to end, and only the part between the $-$ end and the wiper reaches the speaker, so the readout climbs from 0 $\text{V}$ at bottom to 5 $\text{V}$ at the top. A pot wired this way, all three legs in use, is a voltage divider.

Park the knob at mid-track and the wiper picks off roughly half the input voltage. Halfway along the track splits the resistance into equal halves, so the wiper sits at about half the input, 2.5 $\text{V}$ of the bench’s 5 $\text{V}$ . The schematic’s two 10 $\text{k}\ohm$ resistors do the same job with fixed parts. One catch, a real volume knob’s $\ohm$ are not spread evenly along the track, so mid-knob gives well under half, to match how the ear hears loudness.
<p align="center"><img src="attachments/Section%205%20-%20Components/img-20261011175437158.png" /></p>

Ignore one end leg and use just the wiper plus the other, then the pot becomes a plain variable resistor.

Take a B500 a pot with 500 $\ohm$ . Turn the knob up and the used resistor slice shrinks, because it runs from the wiper to the $+$ end, fewer $\ohm$ more current. The LED holds 2 $\text{V}$ , leaving 3 $\text{V}$ of the 5 $\text{V}$ across the slice, the full 500 $\ohm$ is 6 $\text{mA}$ , 120 to 200 $\ohm$ is the 15 to 25 $\text{mA}$ sweet spot, 50 $\ohm$ at the top is 60 $\text{mA}$ , enough to burn out a real Led.

Pots come in bodies to match the job: panel pots wear a shaft for human hands, trimmers hid a screwdriver dial for set-once tweaks, and slide pots trade the twist for a straight glide (think on a sound board). Inside every one, the same track and wiper. A stereo volume dial, a guitar amp control, and toy car speed dial are all front panel knob style. A factory calibration tweak, a sensor zero-point set at bench, and inside-the-case contrast adjust are all hidden trimmer style. Turned every day: a shaft and a knob on the front panel. Set once with a screwdriver and left alone: a trimmer, smaller and hidden inside the case away from curious fingers. The tall blue box with brass corner screw is multi-turn trimmer: many turns of the screw end to end, so a fine setting is easy to hit and hard to lose to a bump.

Recap: a potentiometer is a resistor with a sliding wiper that taps anywhere along its track. Wire all three legs and the pot divides a voltage, wire the wiper and one and and it is a variable resistor in the loop. And the symbol is a resistor symbol with an arrow down on it (for wiper).

# The Components Gauntlet
Now we take striped resistors with no printed value, a capacitor, a switch, a pot, and an Led. We look to build a night light that fades out when switched off, then name every symbol with no hints.
<p align="center"><img src="attachments/Section%205%20-%20Components/img-20261011175615463.png" /></p>

With yellow-violet-brown we have 470 $\ohm$ . The dome lit only with the long leg on the plus pad. And Led holds about 2 $\text{V}$ , not a plain diode’s 0.7 $\text{V}$ . That leaves 7 of the 9 $\text{V}$ across 470 $\ohm$ plus the pot’s slice: about 5 $\text{mA}$ comes through. Switch when reopened, the capacitor beside the Led keeps feeding it, the glow fades over two seconds.

For the symbols, the plates are the capacitor’s foils, the bar is the diode’s stripe end cathode, the gap is the switch’s contacts pulled apart, and the arrow is the pot’s wiper.

Resistors oppose, diodes direct and capacitors store charge. Switch open, the battery was out of the loop, yet meter took two seconds to reach zero. That current was charge the capacitor had parked while the Led was lit, flowing back out through it. Without the capacitor the dome would have gone dark at once.