# author: Maarten Engels

# global variables
VAR saw_foil = 0

-> Prologue

=== Prologue ===

You come running towards the noise. When you arrive you immediately see the pool of blood. In the pool lies one of the fencers. It doesn't move.
The other fencer is sitting on a chair. She took of here helmet. You can see it's your friend Jessica. She's silent. She's staring at the body - of who you can only assume is her friend Daniel.

* What happened? [] You ask one of the audience members.
    "She-she stabbed him! And then there was blood everywhere. And then he fell down. She killed him!"

- Oh my! Now what? -> investigation

VAR prologue_investigation_time = 0
= investigation
~ prologue_investigation_time += 1
{ prologue_investigation_time >= 3: -> police_arrives }
* Examine the body
    The fencer's once white armour is now red from all the blood. Apart from the helmet which you see nearby, it is still in tact. "My god, Daniel" you think as you look at his face's pale skin and closed eyes. He looks calm and at peace, giving you some comfort during this tragedy. -> investigation
* Examine the Foil
    ~saw_foil = 1 
    This is no sports foil: it's untethered, and the blade and tip are sharp. It has blood on it. There is no doubt that this is the murder weapon. -> investigation
* Talk to the fencer (the one that is still breathing)
    * * What happened?
    * * Why, Jessica, why?
    * * {saw_foil > 0} How did you get your hands on that foil?
    - - "I, I killed him!" is all Jessica can say. She keeps repeating it over and over again. Then she stops and remains silent. She's clearly in shock. -> investigation

= police_arrives
<br><br>In the distance, you can hear sirens approaching. It's not long before the police arrives. They all move you out of the room, so they can start their investigation. You friend Jessica is ordered to stay put. Her scared eyes meet you one last time before you step into the wide hall next door. 
* [Continue to next part]
    -> act1_investigation

=== act1_investigation ===
ACT 1: Investigation # CLASS: chapter 
* How can anyone be so brazen to kill in plain sight?
* How come nobody noticed that this was not a sports foil?

- -> END