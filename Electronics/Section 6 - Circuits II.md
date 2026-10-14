


# The Voltage Divider
You'll crack any DC schematic with the pros; slice voltages by ratio, balance every junction and loop, and collapse any resistor maze down to one.

A sensor wants 4.5 $\text{V}$ and the only supply on the bench is a 9 $\text{V}$ pack. No special part needed. Stack two resistors, tap a wire between them, and that wire sits at whatever fraction of the push you pick. 9 $\text{V}$ in, R1 = R2 = 1 $\text{k}\ohm$ . The tap between them reads 4.5 $\text{V}$ . One current runs through both resistors, so equal resistances take equal drops: each uses up the same share of the 9 $\text{V}$ . The tap, the wire between the two, sits at half. The bench meter reads a hundredth of a volt and will check it.

Two 1 $\text{k}\ohm$ resistors put the tap at 4.5 $\text{V}$ , with 4.5 $\text{mA}$ through both. One current runs the whole stack, so each resistor’s share of the ohms is its share of the volts. Nothing in the drawer hits 3 $\text{V}$ exactly, the 470 $\ohm$ in the lower slot came closest, 2.88 $\text{V}$ , inside the amber target band. That works because then it is close to 1/3 of the total resistance then of 1.5 $\text{k}\ohm$ , so it will get close to 1/3 of the voltage.

Note that the symbol for ground is this series of 3 decreasing lines. In diagram schematics it may not always be shown as connecting back to the voltage source. The wire line at the top is part of the circuit that feeds in.
<p align="center"><img src="attachments/Section%206%20-%20Circuits%20II/img-20261011181200795.png" /></p>

Take this example circuit below. Across the top runs the 9 $\text{V}$ rail, a wire that sits at the full 9 $\text{V}$ . At the bottom is ground, the 0 $\text{V}$ point every reading is measured from. Between them, two 1 $\text{k}\ohm$ resistors. R1 hangs from the rail at 1 $\text{k}\ohm$ . If it were on its own it is a dead end: no path to ground, so no current flows. With no current R1 drops nothing, it uses up none of the 9 $\text{V}$ , so a meter on its lower end reads the full 9 $\text{V}$ . Stack R2 below it, down to ground: another 1 $\text{k}\ohm$ . Now it is a series chain, end to end on one series path, and a single current runs from 9 $\text{V}$ through both resistors to ground. The two add up to 2 $\text{k}\ohm$ , so 9 $\text{V}$ / 2 $\text{k}\ohm$ = 4.5 $\text{mA}$ .
<p align="center"><img src="attachments/Section%206%20-%20Circuits%20II/img-20261011181456291.png" /></p>

Tap a wire onto the midpoint as seen and it is a voltage divider. The same current pushes through both resistors since it's series, so each one’s drop is proportional to its resistance: twice the ohms, twice the volts. Equal $\ohm$ , equal drops: 4.5 $\text{V}$ across each, and the tap reads 4.5 $\text{V}$ to ground.

Call the supply $V_{in}$ and the tap $V_{out}$ . So $V_{out} = V_{in} * R2 / (R1 + R2)$ . R2’s share of the total resistance is the tap’s share of the input voltage. On the bench: $9 * 1000 / 2000 = 4.5 \text{V}$ and $9 * 470 / 1470 = 2.88 \text{V}$ . You use R2 because that is what remains after the drop of R1. You can also read the equation as $V_{out} = IR$ , where $I = V_{in} / (R1 + R2)$ , and R is R2 the remaining resistance.

Swap both 1 $\text{k}\ohm$ resistors for 10 $\text{k}\ohm$ resistors and the $V_{out}$ is still 4.5 $\text{V}$ ! This is because yes the current drops to .45 $\text{mA}$ but $V_{out}$ is still $V_{in} * R2 / (R1 + R2)$ . And while the $I$ portion which is $V_{in} / (R1 + R2)$ has dropped to .45 $\text{mA}$ , you are now multiplying by R2 being 10 $\text{k}\ohm$, so the decimal place comes back and you get 4.5 $\text{V}$ still. The ratio did not move, so the split did not either. What changed is the waste: the current through the stack only warms the resistors and drains the pack, and ten times the ohms means one tenth of it, so .45 $\text{mA}$ instead of 4.5 $\text{mA}$. Ratio sets the split, size sets the waste.

So a voltage divider uses two resistors to output a fraction of the input voltage. A fraction, never more than the input. With two resistors the tap can only sit between 9 $\text{V}$ and 0 $\text{V}$, and the ratio picks where. A volume knob as we saw in Sec 5 is a pot that works as divider, with tap that slides along one resistor: at full it passes the music as it came in, every other setting less.

# Kirchoff's Current Law
The meter says 5 $\text{A}$ leaves the voltage source ie. battery. The branches you can read carry 4. Where’s the last amp? A junction cannot swallow one, what flows in flows out, the way the two forks of a river together carry the whole river. A junction, or node, is any point where wires meet.

Kirchhoff’s Current Law is the junction rule: current flowing into any junction equals current flowing out. Charge can’t pile up at a point, and it can’t vanish, so the branches leaving share the amps between them, 5 $\text{A}$ in means 5 $\text{A}$ out. Voltage is distributed across all the branches 

