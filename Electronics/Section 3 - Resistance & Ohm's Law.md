
## Table of Contents
- [Resistance](#resistance)
- [Ohm's Law](#ohms-law)

# Resistance
If you drink a milkshake (I drink your milkshake!) through a coffee stirrer vs. a fat smoothie straw, same drink same effort but wildly different flow. This analogy and logic holds for wires. With the same amperage, a longer and thinner wire has more resistance and it turns all the current into waste heat. Short and thick then the wire barely fights. Material also has internal resistance, copper fights far less than steel. Slice a wire open there’s no smooth highway inside, sea of charge squeezes past atoms bumping and jostling the whole way. That opposition is resistance, measured in Ohms $\ohm$ . More ohms, more fight, less current/flow for the same voltage pot. diff / push. Shape sets the fight, like straw analogy, long and thin resists/fights hard, short and fat barely does. That’s why jumper cables chunky.

Jostling hands energy to the atoms, the wire warms. Toasters, kettles, old light bulbs are resistance doing this on purpose. The brake isn’t a flaw, it’s a tool.

Resistor component usually a striped part, precise, made to order amount of resistance/fight. Every circuit you build uses them to set exactly how much current/flow it wants. Resistance is not a problem to get rid of, but instead it’s how you control a circuit. Toasters are resistance warming food, and can also see resistor be a protector to keep other components safe by controlling limiting current flow. The brake is a feature.

Now you know the push (voltage / potential difference), the flow (current) and the fight (resistance). Will now see how tied together in most useful law in electronics.

# Ohm's Law
The voltage, current and resistance are not separate facts. They’re one law wearing 3 hats. And it fits every simple resistor circuit ever built. Imagine one living loop, 9 $\text{V}$ pot diff, 4.5 $\ohm$ resistance and a 2 $\text{A}$ current. They’re locked together at those values.

With same voltage, if resistance changes or or current changes, other must inversely change. Then if you crank voltage to double 18 $\text{V}$ with resistance untouched, current doubles also to 4 $\text{A}$. So voltage doubles means current doubles. Now back to one cell 9 $\text{V}$, but double resistance to 9 $\ohm$, same voltage and current starves halves to 1 $\text{A}$. Double the fight, half the flow.

Engineering writes the whole law as $V=IR$ . Voltage equals current times resistance. Push equals flow times fight. That is Ohm’s Law for ideal resistor. Cover/fix the one you want and the triangle does the algebra. In the current example, $9 = 2 * 4.5$ . Nudge any one value and the others must answer. Some parts like LEDs bend this law, seen in next subsection.

> [!info] Ohm's Law Formula
> Voltage ($V$) is equal to Current ($I$) multiplied by Resistance ($R$).
> $$\text{V} = \text{A} \times \Omega$$

Example current limiting resistor. Battery of 9 $\text{V}$ and 2 $\text{V}$ Led and want 7 - 18 $\text{mA}$ current, so resistor must be at least 450 $\ohm$. Too low at 100 $\ohm$, and R1 overheating dissipating .49 $\text{mA}$ on a .25 $\text{W}$ rating, while LED sees 70 $\text{mA}$ . Need to increase both resistance and thermal margin. A little more at 200 $\ohm$ while R1 hits at its .25 $\text{W}$ rating, LED still is above limit since 35 $\text{mA}$ , exceeds the LED’s design current and could cause damage. At 350 $\ohm$ , R1 .14 $\text{W}$ and example LED is bright and at design limit 20 $\text{mA}$ , but forward voltage and supply variation could push over its 20 $\text{mA}$  design limit. Adding margin, 400 $\ohm$ now good engineering margin, R1 .12 $\text{W}$, current 17.5 $\text{mA}$ so LED visible without running near max current. Above 1 $\text{k}\ohm$, LED protected but low current at 6.7 $\text{mA}$ there may be hard to see, reduce resistance until at least 7 $\text{mA}$ . With the voltage fixed, resistance up means current down. Resistance like a brake/bodyguard holds LED’s current in its happy band.