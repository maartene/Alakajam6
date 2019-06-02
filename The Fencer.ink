# author: Maarten Engels

# global variables
VAR saw_foil = 0
VAR saw_clay = 0
VAR saw_other_foil = 0
VAR implicated = ""
VAR found_will = 0
VAR overheard_uncle_leo = 0

-> Prologue

=== Prologue ===

You come running towards the noise. When you arrive you immediately see the pool of blood. In the pool lies one of the fencers. It doesn't move.
The other fencer is sitting on a chair. She took of here helmet. You can see it's your friend Jessica. She's silent. She's staring at the body - of who you can only assume is her brother Daniel.

* [What happened?] "What happened?" you ask one of the audience members.
    "She-she stabbed him! And then there was blood everywhere. And then he fell down. She killed him!"

- Oh my! Now what? -> investigation

VAR prologue_investigation_time = 0
= investigation
~ prologue_investigation_time += 1
{ prologue_investigation_time >= 3: -> police_arrives }
* [Examine the body]
    The fencer's once white armour is now red from all the blood. Apart from the helmet which you see nearby, it is still in tact. "My god, Daniel" you think as you look at his face's pale skin and closed eyes. He looks calm and at peace, giving you some comfort during this tragedy. 
    * * [Investigate further]
        ~ saw_clay = 1
        You notice something soft where the foil punctured his armour. A small piece of clay.
    * * [Don't disturb the crime scene.]
        Best not to disturb the crime scene. That's a fellany!
    - - -> investigation
* [Examine the Foil]
    ~saw_foil = 1 
    This is no sports foil: the blade and tip are sharp. It has blood on it. There is no doubt that this is the murder weapon. -> investigation
* [Talk to the fencer (the one that is still breathing)]
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
ACT 1: Questioning # CLASS: chapter
You find yourself in a large next to the fencing room. There is coffee and tea, as well as something stronger for those who need it. A good time to ask around a bit. 
-> interview

= interview
Who do you want to talk to?
* [The judge]
    The <b>judge</b> is still in his formal dress. His right hand clutches a drink. 
    * * { saw_foil >  0} How come nobody noticed that this was not a sports foil?
        "The only ones close enough are the fencers, but their vision is impaired through their helmets. As judges we look more at the body and posture than the blades. For instance to determine right of way."
    * * { saw_foil == 0 } How can you kill somebody with a competitive fencing foil?
        "You can't. Not with all the armour we wear. That however, was not a standard foil."
    * * Did you find anything suspicious?
        "I did notice that the <b>other foil</b> had sharp edges and a shart tip as well. It was similar to the murder weapon, sans the blood of course."
        ~ saw_other_foil = 1
    - - The judge retires to his drink. It's obvious your converstation is over.
    -> interview
* An audience member
    You approach a <b>woman</b>, probably in her thirties. 
    * * What do you think happened?
        "I saw it clear as day. The woman fencer Jessica lunged forward and stabbed the other fencer right in the chest."
    * * Daniel and Jessica
        "I don't know them well, but I do know they were siblings. What a terrible act to murder your own brother! And in front of all those people!"
    - - The woman bids you a good day and returns to speaking with some of the other guests.
    -> interview
* [Another audience member]
    You approach a <b>young man</b>, probably in his twenties.
    * * Fencing 
        "Fencing is a great sport: it requires strength, finesse, intelligence and great reflexes."
    * * About him
        "I'm a fencer too you know. I was here to watch the match and study their movements. Daniel and Jessica are quite good, at the top of the amateur ranks. Would not have imagined seeing a more <i>historical</i> interpretation of fencing tonight..."
    - - You thank the young man and look around who can give you more information.
    -> interview
* [Jessica's aunt and uncle]
    You spot a couple in their 50s who you know are <b>Jessica and Daniels aunt and uncle</b>. No one is talking to them, probably because, what can you say to a person who just lost a nephew and saw their niece do it?
    * * [Offer condoleances for their loss]
        You offer your simpathies for their loss. "Thank you so much. And to you too. You knew Jessica well did you?"
        Indeed, you did, once...
    * * What happened?
        "I just don't understand it", your aunt stammers. Uncle Leo can only mutter "What a tragedy."
    * * [Uncle Leo and Aunt Jess]
        "We are related to Jessica and Daniel on their fathers side." uncle Leo explains. Aunt Jess adds: "Yes, their father, the good Earl was my brother."
    * * Daniel and Jessica
        "They always seemed to close and friendly. Yet, somehow we knew something was wrong..." 
    - - You hug your aunt and uncle and let them retire. 
        -> interview
* [A police officer]
    You approach the <b>police officer</b>. He looks very sincere. 
    * * How can anyone be so brazen to kill in plain sight?
        "You might think all killers are smart, cunning and planning. They are only like that in murder mysteries. In reality, most murders are not premeditated and most killers are not particularly smart. In reality, the obvious explanation is usually right."
        "Well, at least 8 out of 10.", the officer adds.
    * * Are you going to arrest Jessica?
        "Not up to me, talk to the Police Detective. He's in the room next door with the suspect."
        * * * [Go to other room]
            "I'm ordered to keep everyone here. You can't go there right now."
    - - You thank the good copper for his time and information. 
        -> interview
* [The butler]
    "Sir", the <b>butler</b> greets you. 
    * * Scotch, please!
        "Please help yourself to a beverage at the bar."
    * * What happened?
        "What always happens when there is money at stake! And in these circles, there is always money at stake I tell you."
    * * You did it!
    - - The butler just smiles, politely and incincere. Then walks away.
    -> interview
+ [End questioning]
    The police detective walks in and beacons the police officer to come with him to the other rooms. Perhaps now's a good time to have a look around?
    -> continue

= continue
* [Continue to next part]
    -> act2_have_a_look_around
* [No, I want to question some more]
    -> interview

=== act2_have_a_look_around
ACT 2: Snooping Around # CLASS: chapter
With the copper out of the way, it's a good time to have a look around. Who knows that you will find.
-> looking_around

= looking_around
{ overheard_uncle_leo > 0 && found_will > 0: -> finished_looking_around }
Where do you want to go?
* [Kitchen]
    The kitchen is empty.
    * * [Have a look around]
        You look around in the kitchen, but you find nothing of interest.
    * * [Leave it as is.]
    - - There is nothing more to find here.
    -> looking_around
* [Central hall]
    Most people you talked to previously are still here in the central hall.
    * * [Talk some more]
        -> act1_questioning.interview
    * * [Leave hall]
        -> looking_around
* [Office]
    You are in a <b>small office</b>. Nobody is here. There is a <b>big desk</b> in the middle
    * * [Open desk]
        ~ found_will = 1
        You look to make sure nobody can see you. Then you quickly open the desk drawer. You find an <b>open envelop</b> addressed to Jessica and Daniel.
        * * * [Read letter]
            You start reading the <b>letter</b>. The letter is a <b>will</b>! Aparently Jessica and Daniel's father was an Earl. The will describes the estate (including a one of a kind original <b>painting by Monet</b>), as well as the way the estate is to be devided and the conditions for their inheritence.
                "Wow," you think, "my ex was a Dutchess! Who would have known."
                You quickly put the will back in the envelop, close the drawer and quetly leave the room. 
            -> looking_around
    * * [Don't disturb]
        What if someone comes in? Better don't touch anything.
        -> looking_around
+ [Upstairs]
    You take the stairs to the second floor.
    -> looking_around_second_floor
+ [Stop looking around]
    -> finished_looking_around
    
= looking_around_second_floor
{ overheard_uncle_leo > 0 && found_will > 0: -> finished_looking_around }
You find yourself in the <b>second floor hallway</b>. 
* [Master bedroom]
    It's a typical <b>Master Bedroom</b> for the more affluent of types. The one thing that really stands out is a small <b>paiting</b> on the East wall. It's signed "Monet" or so it seems. Could it really be?
    "This is where the magic happens" you think to yourself.
    -> looking_around_second_floor
* [Guest room]
    ~ overheard_uncle_leo = 1
    When you try and enter the <b>guest room</b>, you stop before the door when you hear a voice inside. Instead of knocking, you decide to listen in on the conversation. 
        "Yes, it is going according to plan..."
        "No, no, everybody looks at the sister..."
        "We'll just stay here and wait for this to unfold..."
        "Talk to you later! Next time we speak it will be 'earl' to you. Bye bye!"
        The call ends. You hear footsteps coming to the door. You quickly move out of the way.
        From around the hall, you see your <b>uncle Leo</b> leave the guest room.
    -> looking_around_second_floor
+ [Downstairs]
    You take the stairs down to the first floor.
    -> looking_around
+ [Stop looking around]
    -> finished_looking_around


= finished_looking_around
{ overheard_uncle_leo > 0 && found_will > 0: You now have a pretty good idea what happened. It's time to reveal your findings! }
{ overheard_uncle_leo > 0 && found_will == 0: You have an idea what happened, but you are not completely sure. }
{ overheard_uncle_leo == 0 && found_will > 0: You have an idea what happened, but you are not completely sure. }
{ overheard_uncle_leo == 0 && found_will == 0: It might be wise to look for some more clues, but hey, it's up to you! }
* { overheard_uncle_leo == 0 || found_will == 0 } [Investigate further]
    -> looking_around
* [Continue to next part]
    -> act3_the_reveal

=== act3_the_reveal ===
ACT 3: The Reveal: # CLASS: chapter
When you arrive, you find all of the audience members, the judge and Jessica's aunt and uncle already there. Jessica is also present, but she sits between two police officers. No cuffs, but it's clear that they are keeping a very close eye on her.

"So, here's how this works", the police detective starts. "You say you know who did it? Well, we need to wait for the chief of police to arrive anyway, so we have some time. Convince me you know who did it, before the chief arrives." 

You begin: "Off course" -> your_moment

= your_moment
* [Discuss evidence]
    The key here is:
    * * { saw_other_foil > 0 } [The other foil]
        We all know the foil Jessica was handling is the murder weapon. However, what is most striking is, that the other foil also was tempered with. It too was sharp and prepared to look like an ordinary foil. So, although there was only one murder weapon, there were two possibly leathal weapons in play during the match.
        -> your_moment
    * * { saw_foil > 0 } [The murder weapon]
        The murder weapon was made to look like an ordinary foil as much as possible. 
        -> your_moment
    * * [The painting]
        If it wasn't for this paiting, it's unique and priceless nature, this murder would never have taken place. -> your_moment 
* { found_will > 0 } [Discuss motive]
    As always, this was about money. About an inheritence. Jessica's and Daniel's inheritence in particular. Daniel was first in line as the only remaining living male for two-thirds of the estate. Jessica was second in line for one-thirds of the estate. It's a sizeable estate, enough to go around, but there is only one Monet. It by itself is worth millions, not to mention it's a beatiful painting. Enough to want to have it all, enough motivation to kill for. -> your_moment
* {saw_clay > 0 } [Discuss how it was done]
    Swapping the blades seems easy. But how do you do it without anyone noticing? In this case, the culprit made sure to make the foil look as much as a regular foil as possible. Hence that it was tethered and also had a tip. The tip however was a little clay. It fell off on first contact with the victim. Still, from afar, it looked real enough. -> your_moment
+ Reveal who did it [] It was...
    * * [Jessica herself] "It WAS Jessica!"
        ~ implicated = "jessica"
        Jessica found out who she was and found out about the will. As a succesful business woman, she could not fathom her brother getting the larger part of the estate, not to mention the Monet. Without actually doing anything for it. 
        -> implicated_jessica
    * * { overheard_uncle_leo > 0 } [Uncle Leo] "Uncle Leo, off course"
        ~ implicated = "uncle_leo"
        Jessica did kill her brother. Or at least mortally wound him. However, it was not her machination to do so. For all she knew, they were having a regular fencing duel. It was her uncle Leo who swapped the foils!
        { found_will > 0: He knew that with Daniel dead, and Jessica in jail, he would be the only living relative of the Earl eligeable to inherit the estate. }
        { found_will == 0: I just need to find out why he did it! }
        { saw_other_foil > 0: Remember the other foil: it was sharp as well. To uncle Leo it didn't matter who won or lost, as long as one sibling slay the other. }
        For Jessica and Daniel, through there helmets it was impossible for them to see the foils were swapped.
        -> implicated_uncle_leo
    * * The butler [] "The buttler did it!"
        Ah... just kidding...
        (You see the buther sighing of releaf) -> your_moment


= implicated_uncle_leo
The police detecive stands up and starts a slow applause. 
Then sarcastically he beams "We already came to the same conclusion. { found_will == 0: And we actually know WHY he did it - a big inheritence. } But thank you for the entertainment. And keeping the uncle here, while we were securing the evidence. You have our sincerest gratitude. Here take this... "
<i>(received coupon: "Free entry to a Murder Mystery weekend")</i>
-> nearly_done

= implicated_jessica
The police detective stands up, as well as the police officers. They walk towards uncle Leo and arrest him.
"Thank you for your entertaining story. It was just long enough to keep the uncle here while we were securing evicende. Here, take this... "
<i>(received coupon: "25% off on a Murder Mystery weekend")</i>
-> nearly_done

= nearly_done
* [Continue to next part]
    -> epilogue

=== epilogue ===
EPILOGUE # CLASS: chapter
And after that, you bid your farewells to the group. After you exchange contact information with some of the participants: they might have use for { implicated == "uncle_leo": a private investigator } { implicated == "jessica": a cheap actor } at some other time. 

Nobody is more happy than Jessica though. Not only is she off the hook, but she finally found out the truth about her father. { implicated == "jessica": You relationship with her is thoroughly soured though. } { implicated == "uncle_leo": She kisses you on the cheek. "You kept believing in me..." Who knows you might have another chance with her after all. }

All in all, quite the evening. { implicated == "jessica": Although you do feel like you should have been able to implicate the right person if only you looked a little deeper. }

{ implicated == "uncle_leo": 
    You found the culprit. 
    - else: You implicated the wrong person! 
}
{ found_will > 0: 
    <> You found the motive. 
    - else: <> You did not find the motive. 
}
{ saw_clay > 0: 
    <> You knew how it was done. 
    - else: <> You don't know how it was done. 
}

Thanks for playing! # CLASS: end
* [Play again] # RESTART
-> END