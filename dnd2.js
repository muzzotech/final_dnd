//Dungeons and Dragons Character Generator
//by Nicola Scaramuzzo

//Dice Rolls
var statRoll = function() {
	var statRoll2 = (1 + Math.floor(6 * Math.random())) + (1 + Math.floor(6 * Math.random())) + (1 + Math.floor(6 * Math.random()));
	return statRoll2;
}

//Stat Ability modifiers based on what was rolled for each stat

function calcMod(s){
	return Math.floor(s / 2) - 5;
}

var level = parseInt(document.getElementById("level").value);
var proficiency;

//beast master

function beastMaster() {
	var beastMaster1 = prompt("Pick your beast(no larger than medium)");
	var level;
	switch(beastMaster1){
		case 'bat':
		var batHP = Math.floor(4 * Math.random());
		var bat = 12;
			if(batHP === 0){
				batHP = 1;
			}
			level = "<b>Beast Master: Bat<br><b>AC:</b>" + (bat + proficiency) + " <b>HP:</b>" + batHP + " <b>Speed</b> 5ft., fly 30ft.<br><b>STR</b> 2(-4) <b>DEX</b> 15(+2) <b>CON</b> 8(-1) <b>INT</b> 2(-4) <b>WIS</b> 12(+1) <b>CHA</b> 4(-3)<br><b>Senses</b> blindsight 60ft., passive Perception 11<br><b>Languages</b> --<br><b>Challenge</b> 0(10XP)<br><b>Echolocation:</b> While it can't hear, the bat has no blindsight.<br><b>Keen hearing:</b> The bat has advantage on Wisdom(Perception) checks that rely on hearing.<br><b>Bite</b> +0 to hit, reach 5', one creature, Hit: 1 piercing damage";
			break;
		case 'black bear':
			var blackBearHP = (6 + (1+ (Math.floor(8 * Math.random())))+ (1+ (Math.floor(8 * Math.random()))) + (1+(Math.floor(8 * Math.random()))));
			var blackBearAC = 11;
			level = "<b>Beast Master: Black Bear<br><b>AC:</b>" + (blackBearAC + proficiency) + " <b>HP:</b>" + blackBearHP + " <b>Speed</b> 40ft., climb 30ft.<br><b>STR</b> 15(+2) <b>DEX</b> 10(+0) <b>CON</b> 14(+2) <b>INT</b> 2(-4) <b>WIS</b> 12(+1) <b>CHA</b> 7(-2)<br><b>Skills</b> Perception +3<br><b>Senses</b> passive Perception 13<br><b>Languages</b> --<br><b>Challenge</b> 1/2(100XP)<br><b>Keen Smell:</b> The bear has advantage on Wisdom(Perception) checks that rely on smell.<br><b>Multiattack</b> The bear may attack twice, one with bite and one with claw.<br><b>Bite</b> +3 to hit, reach 5', one creature, Hit: 5(1d6+2) piercing damage<br><b>Claws</b> +3 to hit, reach 5', one creature, Hit: 7(2d+4) slashing damage";
		break;
		case 'boar':
			var boarHP = (2 + (1+ (Math.floor(8 * Math.random())))+ (1+ (Math.floor(8 * Math.random()))));
			var boarAC = 11;
			level = "<b>Beast Master: Black Bear<br><b>AC:</b>" + (boarAC + proficiency) + " <b>HP:</b>" + boarHP + " <b>Speed</b> 40ft.<br><b>STR</b> 13(+1) <b>DEX</b> 11(+0) <b>CON</b> 12(+1) <b>INT</b> 2(-4) <b>WIS</b> 9(-1) <b>CHA</b> 5(-3)<br><b>Senses</b> passive Perception 9<br><b>Languages</b> --<br><b>Challenge</b> 1/4(50XP)<br><b>Charge:</b>If the boar moves at least 20' toward a creature before hitting it with a tusk attack, the target takes an extra 3(1d6) slashing damage and must succeed on a DC11 Strength saving throw or be knocked prone.<br><b>Relentless: <h6>(Recharges after the Boar Finishes a Long or Short Rest)</h6></b> if the boar takes damage that reduces it to 0 hit points, unless the damage is 7 or more or from a citical hit, it drops to 1 hp instead.<br><b>Tusk</b> +3 to hit, reach 5', one creature, Hit: 4(1d6+1) slashing damage";
		break;
		case 'cat':
			var catHP = (1 + Math.floor(4 * Math.random()))
			var catAC = 12;
			level = "<b>Beast Master: Cat<br><b>AC:</b>" + (catAC + proficiency) + " <b>HP:</b>" + catHP + " <b>Speed</b> 40ft., climb 30ft.<br><b>STR</b> 3(-4) <b>DEX</b> 15(+2) <b>CON</b> 10(+0) <b>INT</b> 3(-4) <b>WIS</b> 12(+1) <b>CHA</b> 7(-2)<br><b>Skills</b> Perception +3, Stealth +4<br><b>Senses</b> passive Perception 13<br><b>Languages</b> --<br><b>Challenge</b> 1/4(10XP)<br><b>Keen Smell:</b> The cat has advantage on Wisdom(Perception) checks that rely on smell.<br><b>Claws</b> +0 to hit, reach 5', one creature, Hit: 1 slashing damage";
		break;
		case 'frog':
			var frogHP = Math.floor(4 * Math.random());
			var frogAC = 11;
			if(frogHP === 0){
				frogHP = 1;
			}
			level = "<b>Beast Master: Frog<br><b>AC:</b>" + (frogAC + proficiency) + " <b>HP:</b>" + frogHP + " <b>Speed</b> 20ft., swim 20ft.<br><b>STR</b> 1(-5) <b>DEX</b> 13(+1) <b>CON</b> 8(-1) <b>INT</b> 1(-5) <b>WIS</b> 8(-1) <b>CHA</b> 3(-4)<br><b>Skills</b> Perception +1, Stealth +3<br><b>Senses</b> darkvision 30', passive Perception 11 <br><b>Languages</b> --<br><b>Challenge</b> 0(0XP)<br><b>Amphibious:</b> The frog can breathe air and water.<br><b>Standing Leap:</b> As part of its movement and without a running jump, the frog can long jump up to 10' and high jump up to 5'.";
		break;
		case 'hawk':
			var hawkHP = Math.floor(4 * Math.random());
			var hawkAC = 13;
			if(hawkHP === 0){
				hawkHP = 1;
			}
			level = "<b>Beast Master: Hawk(Falcon)<br><b>AC:</b>" + (hawkAC + proficiency) + " <b>HP:</b>" + hawkHP + " <b>Speed</b> 10ft., fly 60ft.<br><b>STR</b> 5(-3) <b>DEX</b> 16(+3) <b>CON</b> 8(-1) <b>INT</b> 2(-4) <b>WIS</b> 14(+2) <b>CHA</b> 6(-2)<br><b>Skills</b> Perception +4<br><b>Senses</b> passive Perception 14<br><b>Languages</b> --<br><b>Challenge</b> 0(10XP)<br><b>Keen Sight:</b> The hawk has advantage on Wisdom(Perception) checks that rely on sight.<br><b>Talons</b> +5 to hit, reach 5', one creature, Hit: 1 slashing damage";
		break;
		case 'imp':
			var impHP = (3 + (1 + (Math.floor(4 * Math.random())))+ (1+ (Math.floor(4 * Math.random()))) + (1+ (Math.floor(4 * Math.random()))));
			var impAC = 13;
			level = "<b>Beast Master: Imp (devil,shapechanger), lawful evil<br><b>AC:</b>" + (impAC + proficiency) + " <b>HP:</b>" + impHP + " <b>Speed</b> 20ft., fly 40ft.(20' in rat form; 20', fly 60' in raven form; 20', climb 20' in spider form)<br><b>STR</b> 6(-2) <b>DEX</b> 17(+3) <b>CON</b> 13(+1) <b>INT</b> 11(+0) <b>WIS</b> 12(+1) <b>CHA</b> 14(+2)<br><b>Skills</b> Deception +4, Insight +3, Persuasion +4, Stealth +5<br><b>Damage Resistances</b> cold;bludgeoning, piercing, and slashing from nonmagical weapons that aren't silver<br><b>Damage Immunities</b> fire, poison<br><b>Condition immunities</b> poisoned<br><b>Senses</b> darkvision 120', passive Perception 11<br><b>Languages</b> Infernal, Common<br><b>Challenge</b> 1(200XP)<br><b>Shapechanger:</b> The imp can use its action to polymorph into the best form of a rat, a raven, or a spider, or into its devil form, although its attack is different in some of them. Any equipment it carries is not transformed. If slain, the imp reverts to its devil form.<br><b>Devil's Sight:</b> Magical darkness doesn't impede the imp's darkvision.<br><b>Magic Resistance:</b> The imp has advantage on saving throws against spells and other magical effects.<br><b>Sting(Bite in beast form)</b> +5 to hit, reach 5', one creature, Hit: 1d4+3 piercing damage, and the target must make a DC11 Constitution saving throw, taking 10(3d6) poison damage on a failed sace, or half as much damage on a successful one.<br><b>Invisibility</b> The imp turns invisible until it attacks or until concentration ends. Anything the invisible imp is carrying or wearing is invisible as long as it remains in contact with the imp.";
		break;
		case 'mastiff':
			var mastiffHP = (2 + (Math.floor(8 * Math.random())))
			var mastiffAC = 12;
			level = "<b>Beast Master: Mastiff<br><b>AC:</b>" + (mastiffAC + proficiency) + " <b>HP:</b>" + mastiffHP + " <b>Speed</b> 40ft.<br><b>STR</b> 13(+1) <b>DEX</b> 14(+2) <b>CON</b> 12(+1) <b>INT</b> 3(-4) <b>WIS</b> 12(+1) <b>CHA</b> 7(-2)<br><b>Skills</b> Perception +3<br><b>Senses</b> passive Perception 13<br><b>Languages</b> --<br><b>Challenge</b> 1/8(25XP)<br><b>Keen Hearing & Smell:</b> The bear has advantage on Wisdom(Perception) checks that rely on hearing or smell.<br><b>Bite</b> +3 to hit, reach 5', one creature, Hit: 4(1d6+1) piercing damage. If target is a creature, it must succeed on a DC11 Strength saving throw or be knocked prone.";
		break;
		case 'mule':
			var muleHP = (2+ (1+ (Math.floor(8 * Math.random()))) + (1+ (Math.floor(8 * Math.random()))));
			var muleAC = 10;
			level = "<b>Beast Master: Mule<br><b>AC:</b>" + (muleAC + proficiency) + " <b>HP:</b>" + muleHP + " <b>Speed</b> 40ft.<br><b>STR</b> 14(+2) <b>DEX</b> 10(+0) <b>CON</b> 13(+1) <b>INT</b> 2(-4) <b>WIS</b> 10(+0) <b>CHA</b> 5(-3)<br><b>Senses</b> passive Perception 10<br><b>Languages</b> --<br><b>Challenge</b> 1/8(25XP)<br><b>Beast of Burden:</b> The mule is considered to be a Large creature for the purpose of determining its carrying capacity.<br><b>Sure-Footed:</b>Whenever the mule is knocked prone, it stays on its feet if it succeeds a DC10 Dexterity saving throw.<br><b>Hooves</b> +2 to hit, reach 5', one creature, Hit: 4(1d4+2) bludgeoning damage.";
		break;
		case 'owl':
			var owlHP = Math.floor(4 * Math.random());
			var owlAC = 11;
			if(owlHP === 0){
				owlHP = 1;
			}
			level = "<b>Beast Master: Owl<br><b>AC:</b>" + (owlAC + proficiency) + " <b>HP:</b>" + owlHP + " <b>Speed</b> 5ft., fly 60ft.<br><b>STR</b> 3(-4) <b>DEX</b> 13(+1) <b>CON</b> 8(-1) <b>INT</b> 2(-4) <b>WIS</b> 12(+1) <b>CHA</b> 7(-2)<br><b>Skills</b> Perception +3, Stealth +3<br><b>Senses</b> darkvision 120ft., passive Perception 13<br><b>Languages</b> --<br><b>Challenge</b> 0(10XP)<br><b>Flyby:</b> The owl provokes no opportunity attacks when it flies out of an enemy's reach.<br><b>Keen Sight:</b> The owl has advantage on Wisdom(Perception) checks that rely on sight.<br><b>Talons</b> +3 to hit, reach 5', one creature, Hit: 1 slashing damage.";
		break;
		case 'panther':
			var pantherHP = ((1 + Math.floor(8 * Math.random())) + (1 + Math.floor(8 * Math.random())) + (1 + Math.floor(8 * Math.random())));
			var pantherAC = 12;
			level = "<b>Beast Master: Panther<br><b>AC:</b>" + (pantherAC + proficiency) + " <b>HP:</b>" + pantherHP + " <b>Speed</b> 50ft., climb 40ft.<br><b>STR</b> 14(+2) <b>DEX</b> 15(+2) <b>CON</b> 10(+0) <b>INT</b> 3(-4) <b>WIS</b> 14(+2) <b>CHA</b> 7(-2)<br><b>Skills</b> Perception +4, Stealth +6<br><b>Senses</b> passive Perception 14<br><b>Languages</b> -- <br> <b>Challenge</b> 1/4(50XP)<br><b>Keen Smell:</b> The owl has advantage on Wisdom(Perception) checks that rely on smell.<br><b>Pounce:</b> If the panther moves at least 20' straight toward creature right before hitting it with a claw attack, the target must succeed on a DC12 Strength saving throw or be knocked prone. If the target is prone, the panther can take a bonus action to make one bite against it.<br><b>Bite</b> +4 to hit, reach 5', one creature, Hit: 5(1d6 +2) piercing damage.<br><b>Claw</b> +4 to hit, reach 5', one creature, Hit: 4(1d4 +2) slashing damage.";
		break;
		case 'snake':
			var snakeHP = (1 + Math.floor(4 * Math.random()));
			var snakeAC = 13;
			level = "<b>Beast Master: Poisonous Snake<br><b>AC:</b>" + (snakeAC + proficiency) + " <b>HP:</b>" + snakeHP + " <b>Speed</b> 30ft., swim 30ft.<br><b>STR</b> 2(-4) <b>DEX</b> 16(+3) <b>CON</b> 11(+0) <b>INT</b> 1(-5) <b>WIS</b> 10(+0) <b>CHA</b> 3(-4)<br><b>Senses</b> blindsight 10ft.,passive Perception 10<br><b>Languages</b> -- <br> <b>Challenge</b> 1/8(25XP)<br><b>Bite</b> +5 to hit, reach 5', one creature, Hit: 1 piercing damage, and the target must make a DC10 Constitution saving throw, taking 5(2d4) poison damage on a failed save, or half as much on a successful one.";
		break;
		case 'pseudodragon':
			var dragonHP = (2 + (1 + Math.floor(4 * Math.random())) + (1 + Math.floor(4 * Math.random())));
			var dragonAC = 13;
			level = "<b>Beast Master: Pseudodragon (Neutral Good)<br><b>AC:</b>" + (dragonAC + proficiency) + " <b>HP:</b>" + dragonHP + " <b>Speed</b> 15ft., fly 60ft.<br><b>STR</b> 6(-2) <b>DEX</b> 15(+2) <b>CON</b> 13(+1) <b>INT</b> 10(+0) <b>WIS</b> 12(+1) <b>CHA</b> 10(+0)<br><b>Skills</b> Perception +3, Stealth +4<br><b>Senses</b> blindsight 10ft., darkvision 60 ft., passive Perception 13<br><b>Languages</b> understands Common and Draconic, but does not speak <br> <b>Challenge</b> 1/4(50XP)<br><b>Keen Senses: </b>The pseudodragon has advantage on Wisdom(Perception) checks that rely on sight, hearing, or smell.<br><b>Magic Resistance</b> The pseudodragon has advantage on saving throws against spells and other magical effects.<br><b>Limited telepathy:</b> The pseudodragon can communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language.<br><b>Bite</b> +4 to hit, reach 5', one creature, Hit: 4(1d4+2) piercing damage<br><b>Sting</b> +4 to hit, reach 5', one creature, Hit: 4(1d4+2) piercing damage, and the target must succeed on a DC11 Constitution saving throw or become poisoned for 1 hour. If its saving throw result id 6 or lower, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to wake it.";
		break;
		case 'quasit':
			var quasitHP = ((1 + Math.floor(4 * Math.random())) + (1 + Math.floor(4 * Math.random())) + (1 + Math.floor(4 * Math.random())));
			var quasitAC = 13;
			level = "<b>Beast Master: Quasit (demon,shapechanger), chaotic evil<br><b>AC:</b>" + (impAC + proficiency) + " <b>HP:</b>" + impHP + " <b>Speed</b> 40ft., (10', fly 40ft. in bat form; 40', climb 40' in centipede form; swim 40' in toad form)<br><b>STR</b> 5(-3) <b>DEX</b> 17(+3) <b>CON</b> 10(+0) <b>INT</b> 7(-2) <b>WIS</b> 10(+0) <b>CHA</b> 10(+0)<br><b>Skills</b> Stealth +5<br><b>Damage Resistances</b> cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons<br><b>Damage Immunities</b> poison<br><b>Condition immunities</b> poisoned<br><b>Senses</b> darkvision 120', passive Perception 10<br><b>Languages</b> Abyssal, Common<br><b>Challenge</b> 1(200XP)<br><b>Shapechanger:</b> The imp can use its action to polymorph into the best form of a bat, a centipede, or a toad, or into its demon form, although its attack is different in some of them. Any equipment it carries is not transformed. If slain, the imp reverts to its demon form.<br><b>Magic Resistance:</b> The quasit has advantage on saving throws against spells and other magical effects.<br><b>Claws(Bite in beast form)</b> +4 to hit, reach 5', one creature, Hit: 1d4+3 piercing damage, and the target must make a DC10 Constitution saving throw, taking 5(2d4) poison damage and become poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect early.<br><b>Scare(1/day)</b> One creature of the quasit's choice within 20' must succees on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect early on a success.<br><b>Invisibility</b> The quasit turns invisible until it attacks or until concentration ends. Anything the invisible quasit is carrying or wearing is invisible as long as it remains in contact with the quasit.";
		break;
		case 'rat':
			var ratHP = Math.floor(4 * Math.random());
			var ratAC = 10;
			if(ratHP === 0){
				ratHP = 1;
			}
			level = "<b>Beast Master: Rat<br><b>AC:</b>" + (ratAC + proficiency) + " <b>HP:</b>" + ratHP + " <b>Speed</b> 20ft.<br><b>STR</b> 2(-4) <b>DEX</b> 11(+0) <b>CON</b> 9(-1) <b>INT</b> 2(-4) <b>WIS</b> 10(+0) <b>CHA</b> 4(-3)<br><b>Senses</b> darkvision 30ft.,passive Perception 10<br><b>Languages</b> -- <br> <b>Challenge</b> 0(10XP)<br><b>Keen Smell:</b> The rat has advantage on Wisdom(Perception) checks that rely on smell.<br><b>Bite</b> +0 to hit, reach 5', one creature, Hit: 1 piercing damage";
		break;
		case 'raven':
			var ravenHP = Math.floor(4 * Math.random());
			var ravenAC = 12;
			if(ravenHP === 0){
				ravenHP = 1;
			}
			level = "<b>Beast Master: Raven<br><b>AC:</b>" + (ravenAC + proficiency) + " <b>HP:</b>" + ravenHP + " <b>Speed</b> 10ft., fly 50ft.<br><b>STR</b> 2(-4) <b>DEX</b> 14(+2) <b>CON</b> 8(-1) <b>INT</b> 2(-4) <b>WIS</b> 12(+1) <b>CHA</b> 6(-2)<br><b>Skills</b> Perception +3<br><b>Senses</b> passive Perception 13<br><b>Languages</b> -- <br> <b>Challenge</b> 0(10XP)<br><b>Mimickry:</b> The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.<br><b>Beak</b> +4 to hit, reach 5', one creature, Hit: 1 piercing damage";
		break;
		case 'shark':
			var sharkHP = (4 + (1 + Math.floor(8 * Math.random())) + (1 + Math.floor(8 * Math.random())) + (1 + Math.floor(8 * Math.random())) + (1 + Math.floor(8 * Math.random())));
			var sharkAC = 12;
			level = "<b>Beast Master: Reef Shark<br><b>AC:</b>" + (sharkAC + proficiency) + " <b>HP:</b>" + sharkHP + " <b>Speed</b> 0ft., swim 40ft.<br><b>STR</b> 14(+2) <b>DEX</b> 13(+1) <b>CON</b> 13(+1) <b>INT</b> 1(-5) <b>WIS</b> 10(+0) <b>CHA</b> 4(-3)<br><b>Skills</b> Perception +2<br><b>Senses</b> blindsight 30ft., passive Perception 12<br><b>Languages</b> -- <br> <b>Challenge</b> 1/2(100XP)<br><b>Pack Tactics:</b> The shark has advantage on attack rolls against a creature if at least one of the shark's allies is within 5 ft. of the creature and isn't incapacitated.<br><b>Water breathing:</b> The shark can breathe only while underwater.<br><b>Bite</b> +4 to hit, reach 5', one creature, Hit: 6(1d8 + 2) piercing damage";
		break;
		case 'skeleton':
			var skelHP = (4 + (1+ Math.floor(8 * Mat.random())) + (1+ Math.floor(8 * Mat.random())));
			var skelAC = 13;
			level = "<b>Beast Master: Skeleton (lawful evil)<br><b>AC:</b>" + (skelAC + proficiency) + " <b>HP:</b>" + skelHP + " <b>Speed</b> 30ft.<br><b>STR</b> 10(+0) <b>DEX</b> 14(+2) <b>CON</b> 15(+2) <b>INT</b> 6(-2) <b>WIS</b> 8(-1) <b>CHA</b> 5(-3)<br><b>Damage Vulnerabilities</b> bludgeoning<br><b>Damage Immunities</b> poison<br><b>Condition Immunities</b> poisoned<br><b>Senses</b> darkvision 60ft., passive Perception 9<br><b>Languages</b> Understands languages it knew in life but can't speak<br> <b>Challenge</b> 1/4(50XP)<br><b>Shortsword</b> +4 to hit, reach 5', one target, Hit: 5 (1d6+2) piercing damage<br><b>Shortbow</b> +4 to hit, range 80'/320', one creature, Hit: 5(1d6+2) piercing damage";
		break;
		case 'sprite':
			var spriteHP = (1 + Math.floor(4* Math.random()));
			var spriteAC = 15;
			level = "<b>Beast Master: Sprite (neutral good)<br><b>AC:</b>" + (spriteAC + proficiency) + " <b>HP:</b>" + spriteHP + " <b>Speed</b> 10ft., fly 40 ft.<br><b>STR</b> 3(-4) <b>DEX</b> 18(+4) <b>CON</b> 10(+0) <b>INT</b> 14(+2) <b>WIS</b> 13(+1) <b>CHA</b> 11(+0)<br><b>Skills</b> Perception +3, Stealth +8 (the check is made with disadvantage if sprite is flying)<br><b>Senses</b>  passive Perception 13<br><b>Languages</b> Common, Elvish, Sylvan<br> <b>Challenge</b> 1/4(50XP)<br><b>Longsword</b> +2 to hit, reach 5', one target, Hit: 1 slashing damage<br><b>Shortbow</b> +6 to hit, range 40'/160', one creature, Hit: 1 piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or beco me poisoned for 1 minute. Ifits saving lhrow result is 5 ar lower, the target falls unconscious for the same duration, or until it takes damage ar another creature uses an action to wake it.<br><b>Heart Sight</b> The sprite louches a crealure and knows lhe creature's current emotional state. If the target fails a DC 10 Charisma saving lhrow, the sprite also knows the creature's alignment. Celestiais, fiends, and undead automatically fail the saving throw.<br><b>Invisibility</b> The sprite turns invisible until it attacks or casts a spell, ar until its concentration ends. Anything the invisible sprite is carrying ar wearing is invisible as long as it remains in contact with the sprite.";
		break;
		case 'wolf':
			var wolfHP = (2 + (1+ Math.floor(8* Math.random())) + (1+ Math.floor(8* Math.random())));
			var wolfAC = 13;
			level = "<b>Beast Master: Wolf<br><b>AC:</b>" + (wolfAC + proficiency) + " <b>HP:</b>" + wolfHP + " <b>Speed</b> 40ft.<br><b>STR</b> 12(+1) <b>DEX</b> 15(+2) <b>CON</b> 12(+1) <b>INT</b> 3(-4) <b>WIS</b> 12(+1) <b>CHA</b> 6(-2)<br><b>Skills</b> Perception +3, Sleallh +4<br><b>Senses</b> passive Perception 13<br><b>Languages</b> -- <br> <b>Challenge</b> 1/4(50XP)<br><b>Pack Tactics:</b> The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of lhe creature and isn't incapacitated.<br><b>Keen Hearing and Smell. :</b> The wolf has advantage on Wisdom(Perception) checks that rely on hearing or smell.<br><b>Bite</b> +4 to hit, reach 5', one creature, Hit: 7(2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.";
		break;
		case 'zombie':
			var zombieHP = (9 + (1 + Math.floor(8* Math.random())) + (1 + Math.floor(8* Math.random())) + (1 + Math.floor(8* Math.random())));
			var zombieAC= 8;
			level = "<b>Beast Master: Zombie (neutral evil)<br><b>AC:</b>" + (zombieAC + proficiency) + " <b>HP:</b>" + zombieHP + " <b>Speed</b> 20ft.<br><b>STR</b> 13(+1) <b>DEX</b> 6(-2) <b>CON</b> 16(+3) <b>INT</b> 3(-4) <b>WIS</b> 6(-2) <b>CHA</b> 5(-3)<br><b>Skills</b> Perception +3, Stealth +8 (the check is made with disadvantage if sprite is flying)<br><b>Saving Throws</b> Wis +0<br><b>Damage Immunities</b> poison<br>Condition Immunities</b> poisoned<br><b>Senses</b>  darkvision 60 ft., passive Perception 8<br><b>Languages</b> understands the languages it knew in life but can't speak<br> <b>Challenge</b> 1/4(50XP)<br><b>Undead Fortitude:</b> If damage reduces the zombie to O hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.<br><b>Slam</b> +3 to hit, reach 5', one target, Hit: 4 (1d6 +1) bludgeoning damage";
		break;
		default:
			level = " ";
			break;
		}
		return level;
	}

//function for feats

function feats(){
	var ft = prompt("Write your feat here.");
	var feat;
	switch (ft) {
		case 'alert':
			feat = "<b>Alert:</b> +5 initative. You cannot be surprised while you are conscious. Other creatures don't gain advantage on attack rolls against you as a result of being hidden from you.";
			initiative = initiative + 5;
			break;
		case 'athlete':
			feat = "<b>Athlete:</b> Increase Strenght or Dexterity by 1 to a max of 20. (Hit keep my stats afterwards.) When prone, standing uses only 5' of movement. Climbing doesn't halve your speed. You can make a running long jump or a running high jump after only moving 5' rather than 10'.";
			break;
		case 'actor':
			feat = "<b>Actor:</b> +1 Charisma. Advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person. You can mimic speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make a sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows the listener to determine that the effect is faked.";
			charisma = charisma + 1;
			break;
		case 'charger':
			feat = "<b>Charger:</b> When you use your action to Deash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10' in a straight line immediately before taking this bonus action, you either gain a +5 bonus to attack's damage roll ( if you chose to make a melee attack) or push the target up to 10' away from you (if you choose to shove and succeed.";
			break;
		case 'crossbow expert':
			feat = "<b>Crossbow Expert:</b> Ignore loading quality of crossbows with which you are proficient. Being within 5' of a hostile target doesn't impose disadvantage on your ranged attack rolls. When you use the attack action and attack with a one-handed weapon, you can use a bonus action to attack with a loaded hand crossbow you are holding.";
			break;
		case 'defensive duelist':
			if (dex >=13) {
				feat = "<b>Defensive Duelist:</b> When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
			} else {
				alert("You do not have sufficient dexterity for this feat. Try another one.");
				return feats();
			}
			break;
		case 'dual wielder':
			feat = "<b>Dual Wielder:</b> +1 to AC while holding separate melee weapons in each hand. You can use two-weapon fighting even when one-handed melee weapons you are wielding aren't light. You can draw or stow tow one-handed weapons when you would normally be able to draw or stow only one.";
			break;
		case 'dungeon delver':
			feat = "<b>Dungeon Delver:</b> Advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors. Advantage on saving throws made to avoid or resist traps. Resistance to the damage dealt by traps. You can search traps while traveling at a normal pace, instead of only at a slow pace.";
			break;
		case 'durable':
			feat = "<b>Durable:</b> +1 Constitution to a max of 20. When you roll a Hit Die to regain hit points, the minimum number of hit points from the roll equals twice your con mod (min. 2).";
			con = con + 1;
			break;
		case 'elemental adept':
			var dmgType = prompt("Choose one of the following damage types: acid, cold, fire, lightning, or thunder");
			feat = "<b>Elemental Adept:</b> Spells you cast ignore " + dmgType +" damage type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type.";
			break;
		case 'grappler':
			if (str >=13){
				feat = "<b>Grappler:</b> Adventage on attack rolls against a creature you are grappling. You can use your action to try to pin creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends. Creatures that are one size larger than you don't automatically succeed on checks to escape your grapple.";
			} else {
				alert("You do not have sufficient strength for this feat. Try another one.");
				return feats();
			}
			break;
		case 'great weapon master':
			feat = "<b>Great Weapon Master:</b> On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action. Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll, to add +10 to attack's damage.";
			break;
		case 'healer':
			feat = "<b>Healer:</b> When you use a healer's kit to stabilize a dying creature, that creature regains 1 HP. As an action, you can spend one use of your healer's kit to tend to a creature and restore 1d6+4 HP to it, plus additional hit points equal to the creature's max number of Hit Dice. The creature can't regain HP from this feat again until it finishes a short or long rest.";
			break;
		case 'heavily armored':
			feat = "<b>Heavily Armored:</b> +1 Strength, proficiency in heavy armor.";
			str = str +1;
			break;
		case 'heavy armor master':
			feat = "<b>Heavy Armor Master:</b> +1 Strength. While you are wearing heavy armor, bludgeoning, piercing and slashing damage that you take from non-magical weapons is reduced by 3.";
			str = str + 1;
			break;
		case 'inspiring leader':
			if (cha >= 13) {
				feat = "<b>Inspiring Leader:</b> You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, chose up to six friendly creatures(which can include yourself) within 30' of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it has finished a short or long rest."
			} else {
			alert("You do not have sufficient charisma for this feat. Try another one.");
			return feats();
			}
			break;
		case 'keen mind':
			feat = "<b>Keen Mind:</b> +1 intelligence. You always know which way is north. You always know how many hours left before sunrise or sunset. You can acturately recall anything you have seen or heard within the past month.";
			intel = intel + 1
			break;
		case 'lightly armored':
			feat = "<b>Lightly Armored:</b> +1 to Strength or Dexterity. Gain proficiency in light armor.";
			break;
		case 'linguist':
			feat = "<b>Linguist:</b> +1 intelligence. You can learn 3 languages of your choice. You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.";
			intel = intel + 1;
			break;
		case 'lucky':
			feat = "<b>Lucky:</b> You have 3 luck points. Whenever you make an attack, an ability check or a saving throw, you can spend one of your luck points to roll an additional d20. You can choose to spend a luck point after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker's roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled. You regain your expended luck points when you finsih a long rest.";
			break;
		case 'mage slayer':
			feat = "<b>Mage slayer:</b> When a creature within 5' of you casts a spell, you can use your reaction to make a melee weapon attack against the creature. When you damage a creature that is concentrating on a spell, that creature has a disadvantage on the saving throw it makes to maintain its concentration. You have advantage on saving throws against spells cast by creatures 5' of you.";
			break;
		case 'magic initiate':
			feat = "<b>Magic Inititate: </b> Choose a class: bard, cleric, druid, sorcerer, warlock or wizard. You learn two cantrips of your choice from that class's spell list. In addition choose one 1st-level spell from the same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again. Your spellcasting ability for these spells depends on the class you choose: Charisma for bard, sorcerer or warlock; Wisdom for cleric or druid; or Intelligence for wizard.";
			break;
		case 'martial adept':
			feat = "<b>Martial Adept:</b> You learn two maneuvers of your choice among those availabel to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strenght or Dexterity modifier (your choice). If you have superiority dice, you gain one more; otherwise, you have one superiority die, which is d6. This die is used to fuel maneuvers. A superiority die is expended when you sue it. You regain your expended superiority dice when you finish  a short or long rest.";
			break;
		case 'medium armor master':
			feat = "<b>Medium Armor Master:</b> Wearing medium armor doesn't impose disadventage on your Dexterity (Stealth) checks. When you wear medium armor, you can add 3, not 2, to your AC if you have a dexterity of 16 or higher.";
			if (dex >= 16){
				if (armor === 'Hide' || armor === 'Chain Shirt' || armor === 'Breastplate' || armor === 'Half Plate') {
					armorClass = armorClass + 1;
				}
			}
			break;
		case 'mobile':
			feat = "<b>Mobile:</b> Your speed increases by 10'. When you use the dash action, difficult terrain doesn't cost you extra movement on that turn. When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.";
			break;
		case 'moderately armored':
			feat = "<b>Moderately Armored:</b> +1 Strength or Dexterity. Proficient in medium armor and shields.";
			break;
		case 'mounted combat':
			feat = "<b>Mounted Combat:</b> You have an advantage on melee attack rolls against any unmounted creature that is smaller than your mount. You can force an attack targeted at your mount to target you instead. If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half-damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.";
			break;
		case 'observant':
			feat = "<b>Observant:</b> +1 Wisdom. If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips. +5 to Wisodm (Perception) and passice Intelligance (Investigation) scores.";
			wis = wis +1;
			perception = perception +5;
			investigation = investigation +5;
			break;
		case 'polearm master':
			feat = "<b>Polearm Master:</b> When you take the Attack action and attack with only a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the opposite end of the weapon. The weapon's damage die for this attack is a d4, and the attack deals bludgeoning damage. While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach.";
			break;
		case 'resilient':
			var abil = prompt("Choose an ability.");
			switch(abil){
				case 'strength':
					str = str +1;
					strength = strength +1;
				case 'dexterity':
					dex = dex +1;
					dexterity = dexterity +1;
				case 'constitution':
					con = con +1;
					constitution = constitution +1;
				case 'intelligence':
					 intel = intel + 1;
					 intelligence = intelligence +1;
				case 'wisdom':
					wis = wis +1;
					wisdom = wisdom + 1;
				case 'charisma':
					cha = cha +1;
					charisma = charisma +1;
			}
			feat = "<b>Resilient:</b> You gain proficiency in saving throws using ability."
			break;
		case 'ritual caster':
			if (intel >=13 || wis >= 13) {
				feat = "<b>Ritual Caster:</b> You receive a ritual book which contains two 1st-level spells of your choice. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock or wizard. You must choose your spells from the class's spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard. If you come across a spell in written form, such as a magical spell scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spelllist for the c1ass you chose, the spell's level ean be no higher than half your level (rounded up), and it must have the ritual tag. The proeess of copying the spell into your ritual book takes 2 hours per level of the spell, and eosts 50 gp per level. The cost represents material components you expend as you cxperiment with the spell to master it, as well as the fine inks you need to record it.";
			} else {
			alert("You do not have sufficient intelligence or wisdom for this feat. Try another one.");
			return feats();
			}
			break;
		case 'savage attacker':
			feat = "<b>Savage Attacker:</b> Once per turn when you roll damage for a melee weapon attaek, you ean reroll the weapon's damage diee and use either total.";
			break;
		case 'sentinel':
			feat = "<b>Sentinel:</b> Whcn you hit a creature with an opportunity attack, the creature's speed becomes O for the rest of the turn. Creatures wilhin 5 feet of you provoke opportunity atlacks from you even if they take the Disengage action before leaving your reach. When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.";
			break;
		case 'sharpshooter':
			feat = "<b>Sharpshooter:</b> Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls. Your ranged weapon attacks ignore 1/2 and 3/4 covers. Before you make an attack with a ranged weapon, can take a -5 penalty for +10 damage if it hits.";
			break;
		case 'shield master':
			feat = "<b>Shield Master:</b> If you take the Attack action on yout turn, you can use a bonus action to try to shove a creature within 5' of you and your shield. If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you. If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving thow, interposing your shield between yourslef and the source of the effect.";
			break;
		case 'skilled':
			var skill1 = skills();
			var skill2 = skills();
			var skill3 = skills();
			break;
		case 'skulker':
			if (dex >= 13){
				feat = "<b>Skulker:</b> You can try to hide when you are lightly obscured from the creature from which you are hiding. When you are hidden from a creature and miss it with a ranged weapon, making the attack doesn't reveal your position. Dim light doesn't impose disadvantage on your Wisdom (Perception) checks relying on sight.";
			} else { 
				alert("You do not have sufficient dexterity for this feat. Try another one.");
				return feats();
			}
			break;
		case 'spell sniper':
			feat = "<b>Spell Sniper:</b> When you cast a spell that requires you to make an attack roll, lhe spell's range is doubled. Your ranged spell attacks ignore half cover and three-quarters cover. You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or lntelligence for wizard.";
			break;
		case 'tavern brawler':
			feat = "<b>Tavern Brawler:</b> lncrease your Strength or Constitution score by 1, to a maximum of 20. (Hit 'keep the stats' once you are done.) You are proficient wilh improvised weapons and unarmed strikes. Your unarmed strike uses a d4 for damage. When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.";
			break;
		case 'tough':
			hitPoints = hitPoints + (2 * level);
			feat = "<b>Tough:</b> Whenever you gain a level here on after, your hit point maximum is increased by an additional 2 hit points. (Make the change and hit keep the stats.)";
			break;
		case 'war caster':
			feat = "<b>War Caster:</b> Vou have advantage on Conslilulion saving throws that you make to maintain your concentralton on a spell when you take damage. You can perform the somatic components of spells even when you have weapons or a shield in one or both hands. When a hostile creature's movement provokes an opportunity attack from you , you can use your reaction to cast a spell at the creature, rather than making an oppotunity attack. The spell must have casting time of 1 action and must target only that creature.";
			break;
		case 'weapon master':
			feat = "<b>Weapon Master:</b> lncrease your Strength or Dexterity score by 1, to a maximum of 20. (Hit Keep The Stats afterwards).You gain proficiency with four weapons of your choice.";
			break;
		default:
			feat = " ";
			break;

	} 
	return feat;
}

function hunterBeast () {
		var lv = +prompt("Choose archetype: 1. Hunter 2. Beast Master");
			var lv_2;
			var lv_1;
			switch(lv) {
				case 1:
					lv_1 = +prompt("Choose a feature: 1. Colossus Slayer 2. Giant Killer 3. Horde Breaker");
					switch(lv_1) {
						case 1:
							lv_2 = "<b>Hunter: Colossus Slayer</b><br> When you hit a creature with a weapon attack, deal an extra 1d8 damage if it's below its maximum hit points. Only once per turn.";
							break;
						case 2:
							lv_2 = "<b>Hunter: Giant Killer</b><br> When a Large or larger creature within 5' of you hits or misses you with an attack, you can use your reaction to attack the creature immediately after its attack, provided you can see the creature.";
							break;
						case 3:
							lv_2 = "<b>Hunter: Horde Breaker</b><br> Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature within 5 feet of original target and within range of your weapon.";
							break;
					}
				break;
				case 2:
					lv_2 = beastMaster();
					break;
				}

		return lv_2;
}

function abilFeat() {
			var lv = +prompt("Decide if you would like to 1. Adjust Ability Score or 2. Choose a feat.")
			switch(lv) {
				case 1:
					alert("Add either 2 to an ability or 1 to 2 different abilities and then hit 'Keep These Stats'. Remember, no score should go above 20.");
					var featNum = " ";
					break;
				case 2:
					featNum = feats();
					break;
			}
		return featNum;
}

$("#RollTheDice").click(function(){

//Rolling the initial stats
var dex = statRoll();
var con = statRoll();
var str = statRoll();
var intel = statRoll();
var wis = statRoll();
var cha = statRoll();


//Choose a race and be able to modify stats. For example, if the user chooses "elf" then "dexterity" will be increased by 2 after the roll.
var race = document.getElementById("race").value;

switch (race) {
	case 'Elf' :
		dex = dex + 2;
		break;
	case 'Human' :
		str = str + 1;
		intel = intel + 1;
		break;
	case 'Dwarf' :
		con = con + 2;
		break;
	case 'Halfling' :
		dex = dex + 2;
		break;
	case 'Half-Orc' :
		str = str + 2;
		con = con + 1;
		break;
	case 'Tiefling' :
		intel = intel + 1;
		cha = cha + 2;
		break;
}

//Adding variables for statRoll modifiers

var dexmod = calcMod(dex);
var conmod = calcMod(con);
var strmod = calcMod(str);
var intelmod = calcMod(intel);
var wismod = calcMod(wis);
var chamod = calcMod(cha);

//Adding variables for Ability Modifiers that will come into play later in the script.

var dexability = dexmod + 1;
var conability = conmod + 1;
var strability = strmod + 1;
var intelability = intelmod + 1;
var wisability = wismod + 1;
var chaability = chamod + 1;
var initiative = dexmod;

//Skills which are based on the ability modifiers. For example, "Acrobatics" will have the ability modifier based on "dexterity"
var acrobatics = dexability;
var animalHandling = wisability;
var arcana = intelability;
var athletics = strability;
var deception = chaability;
var history = intelability;
var insight = wisability;
var intimidation = chaability;
var investigation = intelability;
var medicine = wisability;
var nature = intelability;
var perception = wisability;
var performance = chaability;
var persuasion = chaability;
var religion = intelability;
var sleightOfHand = dexability;
var stealth = dexability;
var survival = wisability;

//Saving Throws are based on the original modifier. For example, saving throws based on "strength" have a modifier that is based on "strength" directly.
var strength = strmod;
var dexterity = dexmod;
var constitution = conmod;
var intelligence = intelmod;
var wisdom = wismod;
var charisma = chamod;

//Hit Points
//var level = parseInt(document.getElementById("level").value);

var rogueDice = 8 + conmod;
for (var i = 2; i<=level; i++) {
	var rogueDie = (1 + Math.floor(8 * Math.random()));
	if ((rogueDie + conmod) < 1){
		rogueDice += 1
	} else {
		rogueDice += rogueDie + conmod;
	}
}

var wizardDice = 6 + conmod;
for (var i = 2; i<=level; i++) {
	var wizardDie = (1 + Math.floor(6 * Math.random()));
	if ((wizardDie + conmod) < 1) {
		wizardDice +=1
	} else {
		wizardDice += wizardDie + conmod;
	}
}

var fighterDice = 10 + conmod;
for (var i = 2; i<=level; i++) {
	var fighterDie = (1 + Math.floor(10 * Math.random()));
	if((fighterDie + conmod) < 1) {
		fighterDice +=1
	} else {
		fighterDice += fighterDie + conmod;	
	}
}

var XP = parseInt(document.getElementById("XP").value);

if(XP >= 0 && XP < 300) {
	level = 1;
} else if (XP >= 300 && XP <900) {
	level = 2;
	document.getElementById("level").value = 2;
} else if (XP >= 900 && XP <2700) {
	level = 3;
	document.getElementById("level").value = 3;
} else if (XP >= 2700 && XP < 6500) {
	level = 4;
	document.getElementById("level").value = 4;
} else if (XP >= 6500 & XP < 14000) {
	level = 5;
	document.getElementById("level").value = 5;
} else if (XP >= 14000 && XP < 23000) {
	level = 6;
	document.getElementById("level").value = 6;
} else if (XP >= 23000 && XP < 34000) {
	level = 7;
	document.getElementById("level").value = 7; 
} else if (XP >= 34000 && XP < 48000) {
	level = 8;
	document.getElementById("level").value = 8;
} else if (XP >= 48000 && XP < 64000) {
	level = 9;
	document.getElementById("level").value = 9;
} else if (XP >= 64000 && XP < 85000) {
	level = 10;
	document.getElementById("level").value = 10;
} else if (XP >= 85000 && XP < 100000) {
	level = 11;
	document.getElementById("level").value = 11;
} else if (XP >= 100000 && XP < 120000) {
	level = 12;
	document.getElementById("level").value = 12;
} else if (XP >= 120000 && XP < 140000) {
	level = 13;
	document.getElementById("level").value = 13;
} else if (XP >= 140000 && XP < 165000) {
	level = 14;
	document.getElementById("level").value = 14;
} else if (XP >= 165000 && XP < 195000) {
	level = 15;
	document.getElementById("level").value = 15;
} else if (XP >= 195000 && XP < 225000) {
	level = 16;
	document.getElementById("level").value = 16;
} else if (XP >= 225000 && XP < 265000) {
	level = 17;
	document.getElementById("level").value = 17;
} else if (XP >= 265000 && XP < 305000) {
	level = 18;
	document.getElementById("level").value = 18;
} else if (XP >= 305000 && XP < 355000) {
	level = 19;
	document.getElementById("level").value = 19;
} else {
	level = 20;
	document.getElementById("level").value = 20;
}

if (level >= 1 && level < 5) {
	proficiency = 2;
} else if (level >= 5 && level < 9) {
	proficiency = 3;
} else if (level >= 9 && level < 13){
	proficiency = 4;
} else if (level >= 13 && level < 17) {
	proficiency = 5;
} else if (level >= 17 && level <= 20) {
	proficiency = 6;
}

//armor class
var armor = document.getElementById("armor").value;
var armorClass;
switch (armor) {
	case 'Padded':
		armorClass = 11 + dexmod;
		break;
	case 'Leather':
		armorClass = 11 + dexmod;
		break;
	case 'Studded Leather':
		armorClass = 12 + dexmod;
		break;
	case 'Hide':
		if(dexmod <= 2) {
			armorClass = 12 + dexmod;
		} else {
			armorClass = 12 + 2;
		}
		break;
	case 'Chain Shirt':
		if(dexmod <= 2) {
			armorClass = 13 + dexmod;
		} else {
			armorClass = 13 + 2;
		}
		break;
	case 'Scale Mail':
		if(dexmod <= 2) {
			armorClass = 14 + dexmod;
		} else {
			armorClass = 14 + 2;
		}
		break;
	case 'Breastplate':
		if(dexmod <= 2) {
			armorClass = 14 + dexmod;
		} else {
			armorClass = 14 + 2;
		}
		break;
	case 'Half Plate':
		if(dexmod <= 2) {
			armorClass = 15 + dexmod;
		} else {
			armorClass = 15 + 2;
		}
		break;
	case 'Ring Mail':
		armorClass = 14;
		break;
	case 'Chain Mail':
		armorClass = 16;
		break;
	case 'Splint':
		armorClass = 17;
		break;
	case 'Plate':
		armorClass = 18;
		break;
}



//Choose a class and be able to figure out how many hit points a character has as well as see what adjustments are made to the ability scores. For example, if someone chooses the class "fighter", then they will have hit points based off the "fighterDice" the roll as well get a bonus of "+2" to any abilities that are strength-based and dexterity based.

var type = document.getElementById("type").value;

var hitPoints;
switch (type) {
	case 'Fighter' :
		hitPoints = fighterDice;
		strability = strability + 2;
		dexability = dexability + 2;
		break;
	case 'Ranger' :
		hitPoints = fighterDice;
		dexability = dexability + 2;
		wisability = wisability + 2;
		if (level >= 1){
			var favTerrain1 = prompt("Name your favorite terrain.");
			var favEnemy1 = prompt("Name your favorite enemy type or 2 humanoid races. (If you select the latter, please separate with a comma.)");
			document.getElementById("level1").innerHTML = "<h4><b> Favored Terrain: </b>" + favTerrain1 + "<br><b>Favored Enemy(Enemies): </b>" + favEnemy1 + "</h4>";
		}
		if (level >= 2) {
			var lv2 = +prompt("Choose fighting style: 1. Archery 2. Defense 3. Dueling 4. Two-Weapon Fighting");
			var level2;
			switch(lv2){
				case 1:
					level2 = "<b>Archery</b> You gain +2 bonus attack rolls you make with ranged weapons.";
					break;
				case 2:
					level2 = "<b>Defense</b> While you are wearing armor, you gain a +1 to armor class.";
					armorClass = armorClass + 1;
					break;
				case 3:
					level2 = "</b>Dueling</b> When you are wielding a melee weapon and no other weapons, you gain a +2 bonus to damage rolls with that weapon.";
					break;
				case 4:
					level2 = "<b>Two-Weapon Fighting</b> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.";
					break;
				}
			} else {
				level2= " ";
			}
		if (level >= 3) {
				var level3 = hunterBeast();
			} else {
				level3= " ";
			}
		if (level >= 4) {
			var feat1 = abilFeat();
		} else {
			feat1 = " ";
		}
		if (level >= 5) {
			document.getElementById("level5").innerHTML = "<h4>You gain an extra attack.</h4>";
		} else {
			document.getElementById("level5").innerHTML = " ";
		}
		if (level >= 6) {
			var favTerrain2 = prompt("Name another favorite terrain.");
			var favEnemy2 = prompt("Name your favorite enemy type or 1 humanoid race.");
			document.getElementById("level1").innerHTML = "<h4><b> Favored Terrain: </b>" + favTerrain1 + ", " + favTerrain2 + "<br><b>Favored Enemies: </b>" + favEnemy1 + ", " + favEnemy2 + "</h4>";
		}
		if (level >= 7){
			var level7 = hunterBeast();
		} else {
			level7= " ";
		}
			if (level >= 8) {
				var level8 = document.getElementById("level8").innerHTML = "<h4><b>Land Stride:</b> moving through nonmagical difficult terrain costs you no extra movement. Vou can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.</h4>"
				var feat2 = abilFeat();
		} else {
			feat2 = " ";
			level8 = " ";
			}
			if (level >= 10){
			var favTerrain3 = prompt("Name another favorite terrain.");
			document.getElementById("level1").innerHTML = "<h4><b> Favored Terrain: </b>" + favTerrain1 + ", " + favTerrain2 + ", " + favTerrain3 + "<br><b>Favored Enemies: </b>" + favEnemy1 + ", " + favEnemy2 + "</h4>";
			var level10 = document.getElementById("level10").innerHTML = "<h4><b>Hide In Plain Sight:</b> You can spend 1 minute creating camouflage for yourself. Vou must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage. Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. Vou gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.</h4>";
			} else {
				level10 = " ";
			}
			if (level >= 11) {
				var level11 = hunterBeast();
			} else {
					level11= " ";
				}
			if (level >= 12) {
				var feat3 = abilFeat();
			} else {
				feat3 = " ";
			}
			if(level >= 14) {
			var favEnemy3 = prompt("Name your favorite enemy type or 1 humanoid race.");
			document.getElementById("level1").innerHTML = "<h4><b> Favored Terrain: </b>" + favTerrain1 + ", " + favTerrain2 + ", " + favTerrain3 + "<br><b>Favored Enemies: </b>" + favEnemy1 + ", " + favEnemy2 + ", " + favEnemy3 + "</h4>";
			var level14 = document.getElementById("level14").innerHTML = "<h4><b>Vanish:</b> You can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.";
			} else {
				level14= " ";
			}
			if (level >= 15){
				var level15 = hunterBeast();
			} else {
					level15= " ";
				}
			if (level >= 16) {
				var feat4 = abilFeat();
			} else {
				feat4 = " ";
			}
			if (level >=18){
				var level18 = document.getElementById("level18").innerHTML= "<h4><b>Feral Senses:</b> You gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.";
			} else {
				level18 = " ";
			}
			if (level >= 19) {
				var feat5 = abilFeat();
			} else {
				feat5 = " ";
			}
		if(level === 20) {
			var level20 = document.getElementById("level20").innerHTML = "<b>Foe Slayer:</b> You become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.";
		} else {
			level20 = " ";
		}
		break;
	case 'Cleric' :
		hitPoints = rogueDice;
		wisability = wisability + 2;
		break;
	case 'Wizard' :
		hitPoints = wizardDice;
		intelability = intelability + 2;
		break;
	case 'Rogue' :
		hitPoints = rogueDice;
		dexability = dexability + 2;
		break;
}


var name = document.getElementById("name2").value;

//Write to page.

$("#name").html("<h4><b>" + name + "</b></h4>");
$("#main").html("<h4><b>Level " + level + " " + race + " " + type + "</b></h4>");
$("#skills").html("<h4><b>Skills</b></h4>");
document.getElementById("Strength").value =  str;
document.getElementById("Dex").value =  dex;
document.getElementById("Con").value =  con;
document.getElementById("Intel").value =  intel;
document.getElementById("Wis").value =  wis;
document.getElementById("Cha").value =  cha;
document.getElementById("HP").value =  hitPoints; 
$("#column2").html("<h4>Strength mod <b>" + strmod + "</b></h4><h4>Dexterity mod <b>" + dexmod +"</b></h4><h4>Constitution mod <b>" + conmod + "</b></h4><h4>Intelligence mod <b>" + intelmod + "</b></h4><h4>Wisdom mod <b>"+ wismod + "</b></h4><h4>Charisma mod <b>" + chamod + "</b></h4><br><h4>AC <b>" + armorClass + "</b></h4><br><h4>Intiative " + initiative +"</h4>");
$("#column3").html("<h4><b>Saving Throws</b></h4><h4><b>" + strength + "</b> Strength</h4><h4><b>"+ dexterity + "</b> Dexterity</h4><h4><b>" + constitution + "</b> Constitution</h4><h4><b>" + intelligence + "</b> Intelligence</h4><h4><b>" + wisdom + "</b> Wisdom</h4><h4><b>" + charisma + "</b> Charisma</h4><br><h4><b>" +proficiency + "</b> Proficiency</h4>");
$("#column4").html("<h4><b>" + acrobatics + "</b> Acrobratics </h4><h4><b>" + animalHandling + "</b> Animal Handling</h4><h4><b> " + arcana + "</b> Arcana</h4><h4><b>" + athletics + "</b> Athletics</h4><h4><b>" + deception + "</b> Deception</h4><h4><b>" + intelability + "</b> History</h4><h4><b>" + insight + "</b> Insight</h4><h4><b>" + intimidation + "</b> Intimidation</h4><h4><b>" + investigation + "</b> Investigation</h4>");
$("#column5").html("<h4><b>" + medicine + "</b> Medicine</h4><h4><b>" + nature + "</b> Nature</h4><h4><b>" + perception + "</b> Perception</h4><h4><b>" + performance + "</b> Performance</h4><h4><b>" + persuasion + "</b> Persuasion</h4><h4><b>" + religion + "</b> Religion</h4><h4><b>" + sleightOfHand + "</b> Sleight of Hand</h4><h4><b>" + stealth + "</b> Stealth</h4><h4><b>" + survival + "</b> Survival</h4>");
$("#level2").html("<h4>" + level2 + "</h4>");
$("#level3").html("<h4>" + level3 + "</h4>");
$("#level7").html("<h4>" + level7 + "</h4>");
$("#level11").html("<h4>" + level11 + "</h4>");
$("#level14").html("<h4>" + level14 + "</h4>");
$("#level15").html("<h4>" + level15 + "</h4>");
$("#feat1").html("<h4>" + feat1 + "</h4>");
$("#feat2").html("<h4>" + feat2 + "</h4>");
$("#feat3").html("<h4>"+ feat3 + "</h4>");
$("#feat4").html("<h4>"+ feat4 + "</h4>");
$("#feat5").html("<h4>"+ feat5 + "</h4>");
})

//Keep the Dice Button

$("#KeepTheDice").click(function(){
//Keeping the stats
var dex = +document.getElementById("Dex").value;
var con = +document.getElementById("Con").value
var str = +document.getElementById("Strength").value;
var intel = +document.getElementById("Intel").value;
var wis = +document.getElementById("Wis").value;
var cha = +document.getElementById("Cha").value;
var hitPoints = +document.getElementById("HP").value;


//Choose a race.
var race = document.getElementById("race").value;

//Adding Modifiers

var dexmod = calcMod(dex);
var conmod = calcMod(con);
var strmod = calcMod(str);
var intelmod = calcMod(intel);
var wismod = calcMod(wis);
var chamod = calcMod(cha);

//Hit Points
var XP = parseInt(document.getElementById("XP").value);

if(XP >= 0 && XP < 300) {
	level = 1;
} else if (XP >= 300 && XP <900) {
	level = 2;
	document.getElementById("level").value = 2;
} else if (XP >= 900 && XP <2700) {
	level = 3;
	document.getElementById("level").value = 3;
} else if (XP >= 2700 && XP < 6500) {
	level = 4;
	document.getElementById("level").value = 4;
} else if (XP >= 6500 & XP < 14000) {
	level = 5;
	document.getElementById("level").value = 5;
} else if (XP >= 14000 && XP < 23000) {
	level = 6;
	document.getElementById("level").value = 6;
} else if (XP >= 23000 && XP < 34000) {
	level = 7;
	document.getElementById("level").value = 7; 
} else if (XP >= 34000 && XP < 48000) {
	level = 8;
	document.getElementById("level").value = 8;
} else if (XP >= 48000 && XP < 64000) {
	level = 9;
	document.getElementById("level").value = 9;
} else if (XP >= 64000 && XP < 85000) {
	level = 10;
	document.getElementById("level").value = 10;
} else if (XP >= 85000 && XP < 100000) {
	level = 11;
	document.getElementById("level").value = 11;
} else if (XP >= 100000 && XP < 120000) {
	level = 12;
	document.getElementById("level").value = 12;
} else if (XP >= 120000 && XP < 140000) {
	level = 13;
	document.getElementById("level").value = 13;
} else if (XP >= 140000 && XP < 165000) {
	level = 14;
	document.getElementById("level").value = 14;
} else if (XP >= 165000 && XP < 195000) {
	level = 15;
	document.getElementById("level").value = 15;
} else if (XP >= 195000 && XP < 225000) {
	level = 16;
	document.getElementById("level").value = 16;
} else if (XP >= 225000 && XP < 265000) {
	level = 17;
	document.getElementById("level").value = 17;
} else if (XP >= 265000 && XP < 305000) {
	level = 18;
	document.getElementById("level").value = 18;
} else if (XP >= 305000 && XP < 355000) {
	level = 19;
	document.getElementById("level").value = 19;
} else {
	level = 20;
	document.getElementById("level").value = 20;
}

var proficiency;

if (level >= 1 && level < 5) {
	proficiency = 2;
} else if (level >= 5 && level < 9) {
	proficiency = 3;
} else if (level >= 9 && level < 13){
	proficiency = 4;
} else if (level >= 13 && level < 17) {
	proficiency = 5;
} else {
	proficiency = 6;
}
//Adding variables for Ability Modifiers that will come into play later in the script.

var dexability = dexmod + 1;
var conability = conmod + 1;
var strability = strmod + 1;
var intelability = intelmod + 1;
var wisability = wismod + 1;
var chaability = chamod + 1;

//Choose a class and be able to figure out how many hit points a character has as well as see what adjustments are made to the ability scores. For example, if someone chooses the class "fighter",they will get a bonus of "+2" to any abilities that are strength-based and dexterity based.

var type = document.getElementById("type").value;

var hitPoints;
switch (type) {
	case 'Fighter' :
		strability = strability + 2;
		dexability = dexability + 2;
		break;
	case 'Ranger' :
		var ranger = new Object();
		dexability = dexability + 2;
		wisability = wisability + 2;
		if (level >= 1){
			if (!ranger.hasOwnProperty('favTerrain1')) {ranger.favTerrain1 = prompt("Name your favorite terrain.");}
			if(!ranger.hasOwnProperty ('favEnemy1')) {
				ranger.favEnemy1 = prompt("Name your favorite enemy type or 2 humanoid races. (If you select the latter, please separate with a comma.)");
			}
			document.getElementById("level1").innerHTML = "<h4><b> Favored Terrain: </b>" + ranger.favTerrain1 + "<br><b>Favored Enemy(Enemies): </b>" + ranger.favEnemy1 + "</h4>";
		}
		if (level >= 2) {
			var lv2 = +prompt("Choose fighting style: 1. Archery 2. Defense 3. Dueling 4. Two-Weapon Fighting");
			var level2;
			switch(lv2){
				case 1:
					level2 = "<b>Archery</b> You gain +2 bonus attack rolls you make with ranged weapons.";
					break;
				case 2:
					level2 = "<b>Defense</b> While you are wearing armor, you gain a +1 to armor class.";
					armorClass = armorClass + 1;
					break;
				case 3:
					level2 = "</b>Dueling</b> When you are wielding a melee weapon and no other weapons, you gain a +2 bonus to damage rolls with that weapon.";
					break;
				case 4:
					level2 = "<b>Two-Weapon Fighting</b> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.";
					break;
				}
			} else {
				level2= " ";
			}
		if (level >= 3) {
				var level3 = hunterBeast();
			} else {
				level3= " ";
			}
		if (level >= 4) {
			var feat1 = abilFeat();
		} else {
			feat1 = " ";
		}
		if (level >= 5) {
			document.getElementById("level5").innerHTML = "<h4>You gain an extra attack.</h4>";
		} else {
			document.getElementById("level5").innerHTML = " ";
		}
		if (level >= 6) {
			var favTerrain2 = prompt("Name another favorite terrain.");
			var favEnemy2 = prompt("Name your favorite enemy type or 1 humanoid race.");
			document.getElementById("level1").innerHTML = "<h4><b> Favored Terrain: </b>" + favTerrain1 + ", " + favTerrain2 + "<br><b>Favored Enemies: </b>" + favEnemy1 + ", " + favEnemy2 + "</h4>";
		}
		if (level >= 7){
			var level7 = hunterBeast();
		} else {
			level7= " ";
		}
			if (level >= 8) {
				var level8 = document.getElementById("level8").innerHTML = "<h4><b>Land Stride:</b> moving through nonmagical difficult terrain costs you no extra movement. Vou can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.</h4>"
				var feat2 = abilFeat();
		} else {
			feat2 = " ";
			level8 = " ";
			}
			if (level >= 10){
			var favTerrain3 = prompt("Name another favorite terrain.");
			document.getElementById("level1").innerHTML = "<h4><b> Favored Terrain: </b>" + favTerrain1 + ", " + favTerrain2 + ", " + favTerrain3 + "<br><b>Favored Enemies: </b>" + favEnemy1 + ", " + favEnemy2 + "</h4>";
			var level10 = document.getElementById("level10").innerHTML = "<h4><b>Hide In Plain Sight:</b> You can spend 1 minute creating camouflage for yourself. Vou must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage. Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. Vou gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.</h4>";
			} else {
				level10 = " ";
			}
			if (level >= 11) {
				var level11 = hunterBeast();
			} else {
					level11= " ";
				}
			if (level >= 12) {
				var feat3 = abilFeat();
			} else {
				feat3 = " ";
			}
			if(level >= 14) {
			var favEnemy3 = prompt("Name your favorite enemy type or 1 humanoid race.");
			document.getElementById("level1").innerHTML = "<h4><b> Favored Terrain: </b>" + favTerrain1 + ", " + favTerrain2 + ", " + favTerrain3 + "<br><b>Favored Enemies: </b>" + favEnemy1 + ", " + favEnemy2 + ", " + favEnemy3 + "</h4>";
			var level14 = document.getElementById("level14").innerHTML = "<h4><b>Vanish:</b> You can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.";
			} else {
				level14= " ";
			}
			if (level >= 15){
				var level15 = hunterBeast();
			} else {
					level15= " ";
				}
			if (level >= 16) {
				var feat4 = abilFeat();
			} else {
				feat4 = " ";
			}
			if (level >=18){
				var level18 = document.getElementById("level18").innerHTML= "<h4><b>Feral Senses:</b> You gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.";
			} else {
				level18 = " ";
			}
			if (level >= 19) {
				var feat5 = abilFeat();
			} else {
				feat5 = " ";
			}
		if(level === 20) {
			var level20 = document.getElementById("level20").innerHTML = "<b>Foe Slayer:</b> You become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.";
		} else {
			level20 = " ";
		}
		break;
	case 'Cleric' :
		wisability = wisability + 2;
		break;
	case 'Wizard' :
		intelability = intelability + 2;
		break;
	case 'Rogue' :
		dexability = dexability + 2;
		break;
}

//Skills which are based on the ability modifiers. For example, "Acrobatics" will have the ability modifier based on "dexterity"
var acrobatics = dexability;
var animalHandling = wisability;
var arcana = intelability;
var athletics = strability;
var deception = chaability;
var history = intelability;
var insight = wisability;
var intimidation = chaability;
var investigation = intelability;
var medicine = wisability;
var nature = intelability;
var perception = wisability;
var performance = chaability;
var persuasion = chaability;
var religion = intelability;
var sleightOfHand = dexability;
var stealth = dexability;
var survival = wisability;

//Saving Throws are based on the original modifier. For example, saving throws based on "strength" have a modifier that is based on "strength" directly.
var strength = strmod;
var dexterity = dexmod;
var constitution = conmod;
var intelligence = intelmod;
var wisdom = wismod;
var charisma = chamod;

//armor class
var armor = document.getElementById("armor").value;

switch (armor) {
	case 'Padded':
		armorClass = 11 + dexmod;
		break;
	case 'Leather':
		armorClass = 11 + dexmod;
		break;
	case 'Studded Leather':
		armorClass = 12 + dexmod;
		break;
	case 'Hide':
		if(dexmod <= 2) {
			armorClass = 12 + dexmod;
		} else {
			armorClass = 12 + 2;
		}
		break;
	case 'Chain Shirt':
		if(dexmod <= 2) {
			armorClass = 13 + dexmod;
		} else {
			armorClass = 13 + 2;
		}
		break;
	case 'Scale Mail':
		if(dexmod <= 2) {
			armorClass = 14 + dexmod;
		} else {
			armorClass = 14 + 2;
		}
		break;
	case 'Breastplate':
		if(dexmod <= 2) {
			armorClass = 14 + dexmod;
		} else {
			armorClass = 14 + 2;
		}
		break;
	case 'Half Plate':
		if(dexmod <= 2) {
			armorClass = 15 + dexmod;
		} else {
			armorClass = 15 + 2;
		}
		break;
	case 'Ring Mail':
		armorClass = 14;
		break;
	case 'Chain Mail':
		armorClass = 16;
		break;
	case 'Splint':
		armorClass = 17;
		break;
	case 'Plate':
		armorClass = 18;
		break;
}

var name = document.getElementById("name2").value;
//Write to page.

document.getElementById("name").innerHTML = "<h4><b>" + name + "</b></h4>"
document.getElementById("main").innerHTML= "<h4><b>Level " + level + " " + race + " " + type + "</b></h4>";
document.getElementById("skills").innerHTML = "<h4><b>Skills</b></h4>";
document.getElementById("column2").innerHTML="<h4>Strength mod <b>" + strmod + "</b></h4><h4>Dexterity mod <b>" + dexmod +"</b></h4><h4>Constitution mod <b>" + conmod + "</b></h4><h4>Intelligence mod <b>" + intelmod + "</b></h4><h4>Wisdom mod <b>"+ wismod + "</b></h4><h4>Charisma mod <b>" + chamod + "</b></h4><br><h4>AC <b>" + armorClass + "</b></h4><br><h4>Intiative " + dexmod +"</h4>";
document.getElementById("column3").innerHTML="<h4><b>Saving Throws</b></h4><h4><b>" + strength + "</b> Strength</h4><h4><b>"+ dexterity + "</b> Dexterity</h4><h4><b>" + constitution + "</b> Constitution</h4><h4><b>" + intelligence + "</b> Intelligence</h4><h4><b>" + wisdom + "</b> Wisdom</h4><h4><b>" + charisma + "</b> Charisma</h4><br><h4><b>" +proficiency + "</b> Proficiency</h4>";
document.getElementById("column4").innerHTML="<h4><b>" + acrobatics + "</b> Acrobratics </h4><h4><b>" + animalHandling + "</b> Animal Handling</h4><h4><b> " + arcana + "</b> Arcana</h4><h4><b>" + athletics + "</b> Athletics</h4><h4><b>" + deception + "</b> Deception</h4><h4><b>" + intelability + "</b> History</h4><h4><b>" + insight + "</b> Insight</h4><h4><b>" + intimidation + "</b> Intimidation</h4><h4><b>" + investigation + "</b> Investigation</h4>";
document.getElementById("column5").innerHTML="<h4><b>" + medicine + "</b> Medicine</h4><h4><b>" + nature + "</b> Nature</h4><h4><b>" + perception + "</b> Perception</h4><h4><b>" + performance + "</b> Performance</h4><h4><b>" + persuasion + "</b> Persuasion</h4><h4><b>" + religion + "</b> Religion</h4><h4><b>" + sleightOfHand + "</b> Sleight of Hand</h4><h4><b>" + stealth + "</b> Stealth</h4><h4><b>" + survival + "</b> Survival</h4>";
})