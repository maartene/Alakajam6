# author: Maarten Engels

# global variables
VAR saw_foil = 1
VAR saw_clay = 1
VAR saw_other_foil = 1
VAR implicated = ""

-> Prologue

=== Prologue ===

You come running towards the noise. When you arrive you immediately see the pool of blood. In the pool lies one of the fencers. It doesn't move.
The other fencer is sitting on a chair. She took of here helmet. You can see it's your friend Jessica. She's silent. She's staring at the body - of who you can only assume is her brother Daniel.

* What happened? [] You ask one of the audience members.
    "She-she stabbed him! And then there was blood everywhere. And then he fell down. She killed him!"

- Oh my! Now what? -> investigation

VAR prologue_investigation_time = 0
= investigation
~ prologue_investigation_time += 1
{ prologue_investigation_time >= 3: -> police_arrives }
* Examine the body
    The fencer's once white armour is now red from all the blood. Apart from the helmet which you see nearby, it is still in tact. "My god, Daniel" you think as you look at his face's pale skin and closed eyes. He looks calm and at peace, giving you some comfort during this tragedy. 
    * * Investigate further
        ~ saw_clay = 1
        You notice something soft where the foil punctured his armour. 
    * * Don't disturb the crime scene. 
    - - -> investigation
* Examine the Foil
    ~saw_foil = 1 
    This is no sports foil: it's untethered, and the blade and tip are sharp. It has blood on it. There is no doubt that this is the murder weapon. -> investigation
* Talk to the fencer (the one that is still breathing)
    * * What happened?
    * * Why, Jessica, why?
    * * {saw_foil > 0} How did you get your hands on that foil?
    - - "I, I killed him!" is all Jessica can say. She keeps repeating it over and over again. Then she stops and remains silent. She's clearly in shock.
    -> investigation

= police_arrives
<br><br>In the distance, you can hear sirens approaching. It's not long before the police arrives. They all move you out of the room, so they can start their investigation. You friend Jessica is ordered to stay put. Her scared eyes meet you one last time before you step into the wide hall next door. 
* [Continue to next part]
    -> act1_questioning

=== act1_questioning ===
# get to know everybody: umpire, uncle leo, father of Jessica, some random bystanders, talk to butler. 
ACT 1: Investigation # CLASS: chapter 
* How can anyone be so brazen to kill in plain sight?
* How come nobody noticed that this was not a sports foil?
- It seems you have found out all you could for now. Perhaps now's a good time to have a look around?
* [Continue to next part]
    -> act3_the_reveal

# act 2 - have a look around
# make sure you have an opportunity to 
# find the other foil
# find the will

=== act3_the_reveal ===
ACT 3: The Reveal: # CLASS: chapter
When you arrive, you find all of the audience members, the umpire and Jessica's aunt and uncle already there. Jessica is also present, but she sits between two police officers. No cuffs, but it's clear that they are keeping a very close eye on her.

"So, here's how this works", the police detective starts. "You say you know who did it? Well, we need to wait for the chief of police to arrive anyway, so we have some time. Convince me you know who did it, before the chief arrives." 

You begin: "Off course" -> your_moment

= your_moment
* Discuss evidence
    The key here is:
    * * { saw_other_foil > 0 } The other foil
        We all know the foil Jessica was handling is the murder weapon. However, what is most striking is, that the other foil also was tempered with. It too was sharp and prepared to look like an ordinary foil. So, although there was only one murder weapon, there were two possibly leathal weapons in play during the match.
        -> your_moment
    * * { saw_foil > 0 } The murder weapon
        The murder weapon was made to look like an ordinary foil as much as possible. 
        -> your_moment
    * * The painting
        If it wasn't for this paiting, it's unique and priceless nature, this murder would never have taken place. -> your_moment 
* Discuss motive
    As always, this was about money. About an inheritence. Jessica's and Daniel's inheritence in particular. Daniel was first in line as the only remaining living male for two-thirds of the estate. Jessica was second in line for one-thirds of the estate. It's a sizeable estate, enough to go around, but there is only one Monett. It by itself is worth millions, not to mention it's a beatiful painting. Enough to want to have it all, enough motivation to kill for. -> your_moment
* {saw_clay > 0 } Discuss how it was done
    Swapping the blades seems easy. But how do you do it without anyone noticing? In this case, the culprit made sure to make the foil look as much as a regular foil as possible. Hence that it was tethered and also had a tip. The tip however was a little clay. It fell off on first contact with the victim. Still, from afar, it looked real enough. -> your_moment
+ Reveal who did it [] It was...
    * * Jessica herself
        ~ implicated = "jessica"
        Jessica found out who she was and found out about the will. As a succesful business woman, she could not fathom her brother getting the larger part of the estate, not to mention the Monett. Without actually doing anything for it. 
        -> implicated_jessica
    * * { saw_other_foil > 0 } Uncle Leo off course
        ~ implicated = "uncle_leo"
        Jessica did kill her brother. Or at least mortally wound him. However, it was not her machination to do so. For all she knew, they were having a regular fencing duel. It was her uncle Leo who swapped the foils!
        He knew that with Daniel dead, and Jessica in jail, he would be the only living relative of the Earl eligeable to inherit the estate.
        Remember the other foil: it was sharp as well. To uncle Leo it didn't matter who won or lost, as long as one sibling slay the other. 
        For Jessica and Daniel, through there helmets it was impossible for them to see the foils were swapped.
        -> implicated_uncle_leo
    * * The butler
        The buttler did it. 
        Ah... just kidding...
        (You see the buther sighing of releaf) -> your_moment


= implicated_uncle_leo
The police detecive stands up and starts a slow applause. 
Then sarcastically he beams "We already came to the same conclusion. But thank you for the entertainment. And keeping the uncle here, while we were securing the evidence. You have our sincerest gratitude. Here take this... "
(received coupon: "Free entry to a Murder Mystery weekend")
-> nearly_done

= implicated_jessica
The police detective stands up, as well as the police officers. They walk towards uncle Leo and arrest him.
"Thank you for your entertaining story. It was just long enough to keep the uncle here while we were securing evicende. Here, take this... "
(received coupon: "25% off on a Murder Mystery weekend")
-> nearly_done

= nearly_done
* [Continue to next part]
    -> epilogue

=== epilogue ===
EPILOGUE # CLASS: chapter
And after that, you bid your farewells to the group. After you exchange contact information with some of the participants: they might have use for { implicated == "leo": a private investigator } { implicated == "jessica": a cheap actor } at some other time. 

Nobody is more happy than Jessica though. Not only is she off the hook, but she finally found out the truth about her father. { implicated == "jessica": You relationship with her is thoroughly soured though. } { implicated == "uncle_leo": She kisses you on the cheek. "You kept believing in me..." Who knows you might have another chance with her after all. }

All in all, quite the evening. { implicated == "jessica": Although you do feel like you should have been able to implicate the right person if only you looked a little deeper. }

The End # CLASS: end

Thank you for playing. 
* [Restart game]
    # RESTART

-> END