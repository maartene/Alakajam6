var storyContent = ﻿{"inkVersion":18,"root":[[{"#":"author: Maarten Engels"},{"#":"global variables"},{"->":"Prologue"},["done",{"#f":7,"#n":"g-0"}],null],"done",{"Prologue":[["^You come running towards the noise. When you arrive you immediately see the pool of blood. In the pool lies one of the fencers. It doesn't move.","\n","^The other fencer is sitting on a chair. She took of here helmet. You can see it's your friend Jessica. She's silent. She's staring at the body - of who you can only assume is her friend Daniel.","\n",["ev",{"^->":"Prologue.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^What happened? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Prologue.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^ You ask one of the audience members.","\n","^\"She-she stabbed him! And then there was blood everywhere. And then he fell down. She killed him!\"","\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":["^Oh my! Now what? ",{"->":".^.^.^.investigation"},"\n",{"#f":7}]}],{"investigation":[["ev",{"VAR?":"prologue_investigation_time"},1,"+",{"temp=":"prologue_investigation_time","re":true},"/ev","ev",{"VAR?":"prologue_investigation_time"},3,">=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Prologue.police_arrives"},{"->":".^.^.^.12"},null]}],"nop","\n",["ev",{"^->":"Prologue.investigation.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Examine the body",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Examine the Foil",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Talk to the fencer (the one that is still breathing)",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Prologue.investigation.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n","^The fencer's once white armour is now red from all the blood. Apart from the helmet which you see nearby, it is still in tact. \"My god, Daniel\" you think as you look at his face's pale skin and closed eyes. He looks calm and at peace, giving you some comfort during this tragedy. ",{"->":".^.^.^"},"\n",{"#f":7}],"c-1":["ev",{"^->":"Prologue.investigation.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"temp=":"saw_foil","re":true},"^This is no sports foil: it's untethered, and the blade and tip are sharp. It has blood on it. There is no doubt that this is the murder weapon. ",{"->":".^.^.^"},"\n",{"#f":7}],"c-2":["ev",{"^->":"Prologue.investigation.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"Prologue.investigation.0.c-2.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^What happened?",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.c-2.7.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Why, Jessica, why?",{"->":"$r","var":true},null]}],["ev",{"^->":"Prologue.investigation.0.c-2.7.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"saw_foil"},0,">","/ev",{"*":".^.^.c-2","flg":19},{"s":["^How did you get your hands on that foil?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Prologue.investigation.0.c-2.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"c-1":["ev",{"^->":"Prologue.investigation.0.c-2.7.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"c-2":["ev",{"^->":"Prologue.investigation.0.c-2.7.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":["^\"I, I killed him!\" is all Jessica can say. She keeps repeating it over and over again. Then she stops and remains silent. She's clearly in shock. ",{"->":".^.^.^.^.^"},"\n",{"#f":7}]}],{"#f":7}]}],{"#f":3}],"police_arrives":[["^In the distance, you can hear sirens approaching. It's not long before the police arrives. They all move you out of the room, so they can start their investigation. You friend Jessica is ordered to stay put. Her scared eyes meet you one last time before you step into the wide hall next door.","\n","ev","str","^Continue to next part","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"act1_investigation"},{"#f":7}]}],{"#f":3}],"#f":3}],"act1_investigation":[["^ACT 1: Investigation ",{"#":"CLASS: chapter"},"\n",["ev",{"^->":"act1_investigation.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^How can anyone be so brazen to kill in plain sight?",{"->":"$r","var":true},null]}],["ev",{"^->":"act1_investigation.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^How come nobody noticed that this was not a sports foil?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"act1_investigation.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"c-1":["ev",{"^->":"act1_investigation.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":["end",{"#f":7}]}],{"#f":3}],"global decl":["ev",0,{"VAR=":"saw_foil"},0,{"VAR=":"prologue_investigation_time"},"/ev","end",null],"#f":3}],"listDefs":{}};