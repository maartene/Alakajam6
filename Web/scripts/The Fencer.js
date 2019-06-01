var storyContent = ﻿{"inkVersion":18,"root":[[{"#":"author: Maarten Engels"},{"#":"global variables"},{"->":"Prologue"},["done",{"#f":7,"#n":"g-0"}],null],"done",{"Prologue":[["^You come running towards the noise. When you arrive you immediately see the pool of blood. In the pool lies one of the fencers. It doesn't move.","\n","^The other fencer is sitting on a chair. She took of here helmet. You can see it's your friend Jessica. She's silent. She's staring at the body - of who you can only assume is her brother Daniel.","\n",["ev",{"^->":"Prologue.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^What happened? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Prologue.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^ You ask one of the audience members.","\n","^\"She-she stabbed him! And then there was blood everywhere. And then he fell down. She killed him!\"","\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":["^Oh my! Now what? ",{"->":".^.^.^.investigation"},"\n",{"#f":7}]}],{"investigation":[["ev",{"VAR?":"prologue_investigation_time"},1,"+",{"temp=":"prologue_investigation_time","re":true},"/ev","ev",{"VAR?":"prologue_investigation_time"},3,">=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Prologue.police_arrives"},{"->":".^.^.^.12"},null]}],"nop","\n",["ev",{"^->":"Prologue.investigation.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Examine the body",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Examine the Foil",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Talk to the fencer (the one that is still breathing)",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Prologue.investigation.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n","^The fencer's once white armour is now red from all the blood. Apart from the helmet which you see nearby, it is still in tact. \"My god, Daniel\" you think as you look at his face's pale skin and closed eyes. He looks calm and at peace, giving you some comfort during this tragedy.","\n",[["ev",{"^->":"Prologue.investigation.0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Investigate further",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Don't disturb the crime scene. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Prologue.investigation.0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"temp=":"saw_clay","re":true},"^You notice something soft where the foil punctured his armour.","\n",{"->":".^.^.g-0"},{"#f":7}],"c-1":["ev",{"^->":"Prologue.investigation.0.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":[{"->":".^.^.^.^.^"},{"#f":7}]}],{"#f":7}],"c-1":["ev",{"^->":"Prologue.investigation.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"temp=":"saw_foil","re":true},"^This is no sports foil: it's untethered, and the blade and tip are sharp. It has blood on it. There is no doubt that this is the murder weapon. ",{"->":".^.^.^"},"\n",{"#f":7}],"c-2":["ev",{"^->":"Prologue.investigation.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"Prologue.investigation.0.c-2.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^What happened?",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.c-2.7.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Why, Jessica, why?",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.c-2.7.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"saw_foil"},0,">","/ev",{"*":".^.^.c-2","flg":19},{"s":["^How did you get your hands on that foil?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Prologue.investigation.0.c-2.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"c-1":["ev",{"^->":"Prologue.investigation.0.c-2.7.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"c-2":["ev",{"^->":"Prologue.investigation.0.c-2.7.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":["^\"I, I killed him!\" is all Jessica can say. She keeps repeating it over and over again. Then she stops and remains silent. She's clearly in shock.","\n",{"->":".^.^.^.^.^"},{"#f":7}]}],{"#f":7}]}],{"#f":3}],"police_arrives":[["^<br><br>In the distance, you can hear sirens approaching. It's not long before the police arrives. They all move you out of the room, so they can start their investigation. You friend Jessica is ordered to stay put. Her scared eyes meet you one last time before you step into the wide hall next door.","\n","ev","str","^Continue to next part","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"act1_questioning"},{"#f":7}]}],{"#f":3}],"#f":3}],"act1_questioning":[[{"#":"get to know everybody: umpire, uncle leo, father of Jessica, some random bystanders, talk to butler."},"^ACT 1: Investigation ",{"#":"CLASS: chapter"},"\n",["ev",{"^->":"act1_questioning.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^How can anyone be so brazen to kill in plain sight?",{"->":"$r","var":true},null]}],["ev",{"^->":"act1_questioning.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^How come nobody noticed that this was not a sports foil?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"act1_questioning.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"c-1":["ev",{"^->":"act1_questioning.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":["^It seems you have found out all you could for now. Perhaps now's a good time to have a look around?","\n","ev","str","^Continue to next part","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":"act3_the_reveal"},{"#":"act 2 - have a look around"},{"#":"make sure you have an opportunity to"},{"#":"find the other foil"},{"#":"find the will"},{"#f":7}],"#f":7}]}],{"#f":3}],"act3_the_reveal":["^ACT 3: The Reveal: ",{"#":"CLASS: chapter"},"\n","^When you arrive, you find all of the audience members, the umpire and Jessica's aunt and uncle already there. Jessica is also present, but she sits between two police officers. No cuffs, but it's clear that they are keeping a very close eye on her.","\n","^\"So, here's how this works\", the police detective starts. \"You say you know who did it? Well, we need to wait for the chief of police to arrive anyway, so we have some time. Convince me you know who did it, before the chief arrives.\"","\n","^You begin: \"Off course\" ",{"->":".^.your_moment"},"\n",{"your_moment":[[["ev",{"^->":"act3_the_reveal.your_moment.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Discuss evidence",{"->":"$r","var":true},null]}],["ev",{"^->":"act3_the_reveal.your_moment.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Discuss motive",{"->":"$r","var":true},null]}],["ev",{"^->":"act3_the_reveal.your_moment.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"saw_clay"},0,">","/ev",{"*":".^.^.c-2","flg":19},{"s":["^Discuss how it was done",{"->":"$r","var":true},null]}],["ev",{"^->":"act3_the_reveal.your_moment.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Reveal who did it ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"act3_the_reveal.your_moment.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^The key here is:","\n",[["ev",{"^->":"act3_the_reveal.your_moment.0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"saw_other_foil"},0,">","/ev",{"*":".^.^.c-0","flg":19},{"s":["^The other foil",{"->":"$r","var":true},null]}],["ev",{"^->":"act3_the_reveal.your_moment.0.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"saw_foil"},0,">","/ev",{"*":".^.^.c-1","flg":19},{"s":["^The murder weapon",{"->":"$r","var":true},null]}],["ev",{"^->":"act3_the_reveal.your_moment.0.c-0.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^The painting",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"act3_the_reveal.your_moment.0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^We all know the foil Jessica was handling is the murder weapon. However, what is most striking is, that the other foil also was tempered with. It too was sharp and prepared to look like an ordinary foil. So, although there was only one murder weapon, there were two possibly leathal weapons in play during the match.","\n",{"->":".^.^.^.^.^"},{"#f":7}],"c-1":["ev",{"^->":"act3_the_reveal.your_moment.0.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^The murder weapon was made to look like an ordinary foil as much as possible.","\n",{"->":".^.^.^.^.^"},{"#f":7}],"c-2":["ev",{"^->":"act3_the_reveal.your_moment.0.c-0.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^If it wasn't for this paiting, it's unique and priceless nature, this murder would never have taken place. ",{"->":".^.^.^.^.^"},"\n",{"#f":7}]}],{"#f":7}],"c-1":["ev",{"^->":"act3_the_reveal.your_moment.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^As always, this was about money. About an inheritence. Jessica's and Daniel's inheritence in particular. Daniel was first in line as the only remaining living male for two-thirds of the estate. Jessica was second in line for one-thirds of the estate. It's a sizeable estate, enough to go around, but there is only one Monett. It by itself is worth millions, not to mention it's a beatiful painting. Enough to want to have it all, enough motivation to kill for. ",{"->":".^.^.^"},"\n",{"#f":7}],"c-2":["ev",{"^->":"act3_the_reveal.your_moment.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Swapping the blades seems easy. But how do you do it without anyone noticing? In this case, the culprit made sure to make the foil look as much as a regular foil as possible. Hence that it was tethered and also had a tip. The tip however was a little clay. It fell off on first contact with the victim. Still, from afar, it looked real enough. ",{"->":".^.^.^"},"\n",{"#f":7}],"c-3":["ev",{"^->":"act3_the_reveal.your_moment.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^ It was...","\n",[["ev",{"^->":"act3_the_reveal.your_moment.0.c-3.8.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Jessica herself",{"->":"$r","var":true},null]}],["ev",{"^->":"act3_the_reveal.your_moment.0.c-3.8.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"saw_other_foil"},0,">","/ev",{"*":".^.^.c-1","flg":19},{"s":["^Uncle Leo off course",{"->":"$r","var":true},null]}],["ev",{"^->":"act3_the_reveal.your_moment.0.c-3.8.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^The butler",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"act3_the_reveal.your_moment.0.c-3.8.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev","str","^jessica","/str","/ev",{"temp=":"implicated","re":true},"^Jessica found out who she was and found out about the will. As a succesful business woman, she could not fathom her brother getting the larger part of the estate, not to mention the Monett. Without actually doing anything for it.","\n",{"->":".^.^.^.^.^.^.implicated_jessica"},{"#f":7}],"c-1":["ev",{"^->":"act3_the_reveal.your_moment.0.c-3.8.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev","str","^uncle_leo","/str","/ev",{"temp=":"implicated","re":true},"^Jessica did kill her brother. Or at least mortally wound him. However, it was not her machination to do so. For all she knew, they were having a regular fencing duel. It was her uncle Leo who swapped the foils!","\n","^He knew that with Daniel dead, and Jessica in jail, he would be the only living relative of the Earl eligeable to inherit the estate.","\n","^Remember the other foil: it was sharp as well. To uncle Leo it didn't matter who won or lost, as long as one sibling slay the other.","\n","^For Jessica and Daniel, through there helmets it was impossible for them to see the foils were swapped.","\n",{"->":".^.^.^.^.^.^.implicated_uncle_leo"},{"#f":7}],"c-2":["ev",{"^->":"act3_the_reveal.your_moment.0.c-3.8.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^The buttler did it.","\n","^Ah... just kidding...","\n","^(You see the buther sighing of releaf) ",{"->":".^.^.^.^.^"},"\n",{"#f":7}]}],{"#f":7}]}],{"#f":3}],"implicated_uncle_leo":["^The police detecive stands up and starts a slow applause.","\n","^Then sarcastically he beams \"We already came to the same conclusion. But thank you for the entertainment. And keeping the uncle here, while we were securing the evidence. You have our sincerest gratitude. Here take this... \"","\n","^(received coupon: \"Free entry to a Murder Mystery weekend\")","\n",{"->":".^.^.nearly_done"},{"#f":3}],"implicated_jessica":["^The police detective stands up, as well as the police officers. They walk towards uncle Leo and arrest him.","\n","^\"Thank you for your entertaining story. It was just long enough to keep the uncle here while we were securing evicende. Here, take this... \"","\n","^(received coupon: \"25% off on a Murder Mystery weekend\")","\n",{"->":".^.^.nearly_done"},{"#f":3}],"nearly_done":[["ev","str","^Continue to next part","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"epilogue"},{"#f":7}]}],{"#f":3}],"#f":3}],"epilogue":[["^EPILOGUE ",{"#":"CLASS: chapter"},"\n","^And after that, you bid your farewells to the group. After you exchange contact information with some of the participants: they might have use for ","ev",{"VAR?":"implicated"},"str","^leo","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ a private investigator ",{"->":".^.^.^.12"},null]}],"nop","^ ","ev",{"VAR?":"implicated"},"str","^jessica","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ a cheap actor ",{"->":".^.^.^.22"},null]}],"nop","^ at some other time.","\n","^Nobody is more happy than Jessica though. Not only is she off the hook, but she finally found out the truth about her father.","\n","^The End ",{"#":"CLASS: end"},"\n","^Thank you for playing.","\n","ev","str","^Restart game","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"#":"RESTART"},"end",{"#f":7}]}],{"#f":3}],"global decl":["ev",1,{"VAR=":"saw_foil"},1,{"VAR=":"saw_clay"},1,{"VAR=":"saw_other_foil"},"str","^","/str",{"VAR=":"implicated"},0,{"VAR=":"prologue_investigation_time"},"/ev","end",null],"#f":3}],"listDefs":{}};