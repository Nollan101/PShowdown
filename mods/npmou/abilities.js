exports.BattleAbilities = {  
  	"persistent": {
  	      	 desc: "Increases the duration of many field effects by two turns when used by this Pokémon.",
		 shortDesc: "The duration of certain field effects is increased by 2 turns if used by this Pokemon.",
		 id: "persistent",
		 isNonstandard: false,
		 name: "Persistent",
		 // implemented in the corresponding move
		 rating: 3,
		 num: -4
	},
  	"gravitation": {
  		desc: "Summons a 5-turn Gravity upon switch in.",
  		shortDesc: "Summons 5 turn Auto-Gravity.",
  		id: "gravitation",
  		name: "Gravitation",
		onStart: function(source) {
        		this.debug("Starting Gravity");
        		this.addPseudoWeather('gravity');
        		this.pseudoWeather['gravity'].duration = 5;
           	},
		rating: 4,
		num: 1000
  	},
  	"trickster": {
  		desc: "Summons a 5-turn Trick Room upon switch in.",
  		shortDesc: "Summons 5 turn Auto-Trick Room.",
  		id: "trickster",
  		name: "Trickster",
		onStart: function(source) {
        		this.debug("Starting Trick Room");
        		if (this.pseudoWeather['trickroom']) {
            			this.removePseudoWeather('trickroom');
        		}
        		this.addPseudoWeather('trickroom');
        		this.pseudoWeather['trickroom'].duration = 5;
           	},
		rating: 5,
		num: 1001
  	},
  	"chlorophyll": {
		desc: "If this Pokemon is active while Sunny Day is in effect, its speed is temporarily doubled.",
		shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		onModifySpe: function(spe) {
			if (this.isWeather('sunnyday')) {
				return spe * 1.5;
			}
		},
		id: "chlorophyll",
		name: "Chlorophyll",
		rating: 4,
		num: 34
 	},
 	"arcticrush": {
		desc: "If this Pokemon is active while Hail is in effect, its speed is temporarily increased and this Pokemon is not hurt by hail",
		shortDesc: "If Hail is active, this Pokemon's Speed is increased and hail does not damage this Pokemon",
		onModifySpe: function(spe) {
			if (this.isWeather('hail')) {
				return spe * 1.5;
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "arcticrush",
		name: "Arctic Rush",
		rating: 4,
		num: 1002
	},
	"sandrush": {
		desc: "Increases Speed in a Sandstorm, and makes the Pokemon immune to Sandstorm damage.",
		shortDesc: "If Sandstorm is active, this Pokemon's Speed is increased; immunity to Sandstorm.",
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather('sandstorm')) {
				return spe * 1.5;
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandrush",
		name: "Sand Rush",
		rating: 4,
		num: 146
	},
	"swiftswim": {
		desc: "If this Pokemon is active while Rain Dance is in effect, its speed is temporarily increased.",
		shortDesc: "If Rain Dance is active, this Pokemon's Speed is increased.",
		onModifySpe: function(spe, pokemon) {
			if (this.isWeather('raindance')) {
				return spe * 1.5;
			}
		},
		id: "swiftswim",
		name: "Swift Swim",
		rating: 4,
		num: 33
	},
	"solarpower": {
		desc: "If this Pokemon is active while Sunny Day is in effect, its Special Attack temporarily receives a 30% boost.",
		shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is x1.3.",
		onModifySpA: function(spa, pokemon) {
			if (this.isWeather('sunnyday')) {
				return spa * 1.3;
			}
		},
		id: "solarpower",
		name: "Solar Power",
		rating: 3,
		num: 94
	},
	"waterveil": {
		desc: "If this Pokemon is active while Rain Dance is in effect, its Special Attack temporarily receives a 30% boost.",
		shortDesc: "If Rain Dance is active, this Pokemon's Sp. Atk is x1.3.",
		onModifySpA: function(spa, pokemon) {
			if (this.isWeather('raindance')) {
				return spa * 1.3;
			}
		},
		id: "waterveil",
		name: "Water Veil",
		rating: 3,
		num: 41
	},
	"sandforce": {
		desc: "If this Pokemon is active while Sandstorm is in effect, its Attack temporarily receives a 30% boost.",
		shortDesc: "If Sandstorm is active, this Pokemon's Atk is x1.3.",
		onModifyAtk: function(atk, pokemon) {
			if (this.isWeather('sandstorm')) {
				return atk * 1.3;
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandforce",
		name: "Sand Force",
		rating: 3,
		num: 159
	},
	"snowcloak": {
		desc: "If this Pokemon is active while Hail is in effect, its Special Attack temporarily receives a 30% boost.",
		shortDesc: "If Hail is active, this Pokemon's Sp. Atk is x1.3.",
		onModifySpA: function(spa, pokemon) {
			if (this.isWeather('hail')) {
				return spa * 1.3;
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "snowcloak",
		name: "Snow Cloak",
		rating: 3,
		num: 81
	},
	"icebody": {
		desc: "If active while Hail is in effect, this Pokemon recovers one-twelfth of its max HP after each turn. If a non-Ice-type Pokemon receives this ability through Skill Swap, Role Play or the Trace ability, it will not take damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon heals 1/12 of its max HP each turn; immunity to Hail.",
		onWeather: function(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.maxhp/12);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "icebody",
		name: "Ice Body",
		rating: 3,
		num: 115
	},
	"sandveil": {
		desc: "If active while Sandstorm is in effect, this Pokemon recovers one-twelfth of its max HP after each turn. If a non-Ice-type Pokemon receives this ability through Skill Swap, Role Play or the Trace ability, it will not take damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon heals 1/12 of its max HP each turn; immunity to Sandstorm.",
		onWeather: function(target, source, effect) {
			if (effect.id === 'sandstorm') {
				this.heal(target.maxhp/12);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandveil",
		name: "Sand Veil",
		rating: 3,
		num: 8
	},
	"raindish": {
		desc: "If active while Hail is in effect, this Pokemon recovers one-twelfth of its max HP after each turn.",
		shortDesc: "If Hail is active, this Pokemon heals 1/12 of its max HP each turn.",
		onWeather: function(target, source, effect) {
			if (effect.id === 'raindance') {
				this.heal(target.maxhp/12);
			}
		},
		id: "raindish",
		name: "Rain Dish",
		rating: 3,
		num: 44
	},
	"filter": {
		desc: "This Pokemon receives one-half reduced damage from Super Effective attacks.",
		shortDesc: "This Pokemon receives 1/2 damage from super effective attacks.",
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) > 0) {
				this.debug('Filter neutralize');
				return basePower * 1/2;
			}
		},
		id: "filter",
		name: "Filter",
		rating: 3,
		num: 111
	},
	"solidrock": {
		desc: "This Pokemon receives one-half reduced damage from Super Effective attacks.",
		shortDesc: "This Pokemon receives 1/2 damage from super effective attacks.",
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) > 0) {
				this.debug('Solid Rock neutralize');
				return basePower * 1/2;
			}
		},
		id: "solidrock",
		name: "Solid Rock",
		rating: 3,
		num: 116
	},
	"lightmetal": {
		inherit: true,
		desc: "The user's speed is increased by 20%, and the user's weight is halved. The weight loss decreases the damage taken from Low Kick and Grass Knot, and also lowers user's base power of Heavy Slam and Heat Crash, due these moves being calculated by the target and user's weight.",
		shortDesc: "This Pokemon's speed is increased by 20%, and weight is halved.",
		onModifySpe: function(spe) {
			return spe * 1.2;
		}
	},
	"heavymetal": {
		inherit: true,
		desc: "The user's defense is increased by 20%, and the user's weight is doubled. The weight gain increases the damage taken from Low Kick and Grass Knot, and increases user's base power of Heavy Slam and Heat Crash, due these moves being calculated by the target and user's weight.",
		shortDesc: "This Pokemon's defense is increased by 20%, and weight is doubled.",
		onModifyDef: function(def) {
			return def * 1.2;
		}
	},
	"purepower": {
		desc: "This Pokemon's Special Attack stat is doubled. Therefore, if this Pokemon's Special Attack stat on the status screen is 200, it effectively has an Special Attack stat of 400; which is then subject to the full range of stat boosts and reductions.",
		shortDesc: "This Pokemon's Special Attack is doubled.",
		onModifySpA: function(spa) {
			return spa * 2;
		},
		id: "purepower",
		name: "Pure Power",
		rating: 5,
		num: 74
	},
	"angerpoint": {
		desc: "When its health reaches one-third or less of its max HP, this pokemon's Physical attacks gain a 50% boost to power.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Physical attacks do 1.5x damage.",
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.category === 'Physical' && attacker.hp <= attacker.maxhp/3) {
				this.debug('Anger Point boost');
				return basePower * 1.5;
			}
		},
		id: "angerpoint",
		name: "Anger Point",
		rating: 2,
		num: 83
	},
	"battlearmor": {
		desc: "Not very effective hits do two thirds damage to this pokemon.",
		shortDesc: "Resisted hits do 2/3 damage to this pokemon.",
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) < 0) {
				this.debug('Battle Armor Weaken');
				return basePower * 2/3;
			}
		},		
		id: "battlearmor",
		name: "Battle Armor",
		rating: 3,
		num: 4
	},
	"shellarmor": {
		desc: "Not very effective hits do two thirds damage to this pokemon.",
		shortDesc: "Resisted hits do 2/3 damage to this pokemon.",
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) < 0) {
				this.debug('Shell Armor Weaken');
				return basePower * 2/3;
			}
		},
		id: "shellarmor",
		name: "Shell Armor",
		rating: 3,
		num: 75
	},
	"whitesmoke": {
		desc: "This pokemon's stats cannot be lowered.",
		shortDesc: "This pokemon's stats cannot be lowered.",
		onBoost: function(boost) {
			for (var i in boost) {
				if (boost[i] < 0 {
					this.add("-message", target.name+"'s stats were not lowered!");
					boost[i] = 0;
				}
			}
		},
		id: "whitesmoke",
		name: "White Smoke",
		rating: 3,
		num: 73
	},
	"clearbody": {
		desc: "This pokemon's stats cannot be lowered.",
		shortDesc: "This pokemon's stats cannot be lowered.",
		onBoost: function(boost) {
			for (var i in boost) {
				if (boost[i] < 0 {
					this.add("-message", target.name+"'s stats were not lowered!");
					boost[i] = 0;
				}
			}
		},
		id: "clearbody",
		name: "Clear Body",
		rating: 3,
		num: 29
	},
	"defeatist": {
		desc: "This pokemon loses 1/4 of its HP every time it KOs an opponent.",
		shortDesc: "This Pokemon loses 1/4 HP upon a KO.",
		onSourceFaint: function(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.directDamage(source.maxhp/4);
			}
		},
		id: "defeatist",
		name: "Defeatist",
		rating: -1,
		num: 129
	},
	"healer": {
		desc: "Recovers 1/25 HP at the end of each turn.",
		shortDesc: "Heals 1/25 HP each turn.",
		id: "healer",
		name: "Healer",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			this.heal(pokemon.maxhp/25);
		},
		rating: 3,
		num: 131
	},
	"hypercutter": {
		desc: "This pokemon's cutting, clawing, and slashing attacks gain a 20% boost.",
		shortDesc: "Cutting attacks are boosted by 20%.",
		//yes, I know I could just do a slash attack thing like they do for Iron Fist, but I prefered keeping all of this ability's data in one place
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.id === "xscissor" || move.id === "slash" || move.id === "nightslash" || move.id === "psychocut" || move.id === "aerialace" || move.id === "aircutter" || move.id === "crosschop" || move.id === "crosspoison" || move.id === "crushclaw" || move.id === "dragonclaw" || move.id === "drillpeck" || move.id === "drillrun" || move.id === "falseswipe" || move.id === "cut" || move.id === "furycutter" || move.id === "furyswipes" || move.id === "leafblade" || move.id === "metalclaw" || move.id === "powergem" || move.id === "razorleaf" || move.id === "razorshell" || move.id === "razorwind" || move.id === "sacredsword" || move.id === "secretsword" || move.id === "shadowclaw") {
				this.debug('Hyper Cutter boost');
				return basePower * 12/10;
			}
		},
		id: "hypercutter",
		name: "Hyper Cutter",
		rating: 3,
		num: 52
	},
	"illuminate": {
		desc: "Boosts the accuracy of this pokemon by x1.2.",
		shortDesc: "Provides 20% boost to accuracy.",
		onModifyMove: function(move) {
			if (typeof move.accuracy !== 'number') return;
			this.debug('illuminate - accuracy boost');
			move.accuracy *= 1.2;
		},
		id: "illuminate",
		name: "Illuminate",
		rating: 3,
		num: 35
	}
};
