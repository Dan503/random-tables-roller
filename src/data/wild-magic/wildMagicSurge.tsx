interface SurgeProps {
	good: JSX.Element
	bad: JSX.Element
	neutral: JSX.Element
}

const Surge = ({ good, bad, neutral }: SurgeProps) => (
	<>
		<p>
			<strong>1-5 (Bad):</strong>
		</p>{' '}
		<p>{bad}</p>
		<p>
			<strong>6-15 (Neutral):</strong>
		</p>{' '}
		<p>{neutral}</p>
		<p>
			<strong>16-20 (Good):</strong>
		</p>{' '}
		<p>{good}</p>
	</>
)

export const wildMagicSurge = [
	<Surge
		good={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into an{' '}
				<a href="https://www.dndbeyond.com/monsters/adult-white-dragon">
					Adult White Dragon
				</a>
				. You don't return to your normal form until 24 hours have elapsed or
				your HP drops to 0.
			</>
		}
		neutral={
			<>
				You turn into an white dragonborn and can only speak draconic and barely
				understand common for 24 hours.
			</>
		}
		bad={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into a primal rage filled{' '}
				<a href="https://www.dndbeyond.com/monsters/adult-white-dragon">
					Adult White Dragon
				</a>
				. You attack the nearest creature to you (including allies) every turn
				for as long as you are berserk. Make a DC 18 WIS save at the start of
				each of your turns to gain control over yourself, losing berserk. You
				don't return to your normal form until 24 hours have elapsed or your HP
				drops to 0.
			</>
		}
	/>,
	<Surge
		good={
			<>
				A talking ethereal{' '}
				<a href="https://www.dndbeyond.com/monsters/dire-wolf">Dire Wolf</a>{' '}
				animal companion appears. You can summon, dismiss or command this
				creature using a bonus action. The creature disappears, never to return,
				when it reaches 0 HP.
			</>
		}
		neutral={
			<>
				A talking spectral{' '}
				<a href="https://www.dndbeyond.com/monsters/wolf">dog</a> that only you
				can see appears.
			</>
		}
		bad={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into a dog.
			</>
		}
	/>,
	<Surge
		good={
			<>
				Gain the druid{' '}
				<a href="https://www.dndbeyond.com/sources/phb/classes#WildShape">
					Wild Shape
				</a>{' '}
				feature for 24 hours.
			</>
		}
		neutral={
			<>
				You take on properties of an arctic creature (roll on the creature roll
				table) for 24 hours.
			</>
		}
		bad={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into a CR 0 creature (see Chawinga Charms "Charm of Animal Conjuring"
				roll table result).
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, gain resistance to cold damage. You also grow gills on the
				side of your neck allowing you to breath underwater.
			</>
		}
		neutral={
			<>
				For 24 hours, you turn into a
				<a href="https://www.dndbeyond.com/monsters/deep-scion">Deep Scion</a>{' '}
				with resistance to cold damage.
			</>
		}
		bad={
			<>
				For 24 hours, you turn into a{' '}
				<a href="https://www.dndbeyond.com/monsters/troglodyte">Troglodyte</a>.
				Your stench aura extends out to 20ft.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you gain +2 AC as large segments of your skin turns into a
				hardened metal. Your body weight doubles but this does not effect
				encumbrance.
			</>
		}
		neutral={<>For 24 hours, the appearance of your skin looks metallic.</>}
		bad={
			<>
				For 24 hours, you transform into a metal statue of yourself, during
				which time you are considered petrified.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you grow black raven wings out of your back and gain a fly
				speed of 40ft.
			</>
		}
		neutral={<>For 24 hours, you grow black feathers all over your body.</>}
		bad={
			<>
				You Polymorph into a{' '}
				<a href="https://www.dndbeyond.com/monsters/raven">Raven</a>
			</>
		}
	/>,
	<Surge
		good={
			<>
				3d6 x 100 silver pieces appear randomly around you over the next hour.
			</>
		}
		neutral={
			<>
				For 24 hours, every non living thing that you touch directly with your
				skin turns to gold. It turns back to normal when your ability expires.
			</>
		}
		bad={
			<>
				For 24 hours, everything you touch directly with your skin (including
				living creatures) turns to rusted copper. It turns back to normal when
				your ability expires. Living things that are transformed are considered
				petrified.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you grow gills on your neck allowing you to breath under
				water. You also gain resistance to cold damage.
			</>
		}
		neutral={
			<>
				For 24 hours, you grow gills on your neck allowing you to breath under
				water.
			</>
		}
		bad={
			<>
				For 24 hours, you grow gills on your neck allowing you to breath under
				water. However you are no longer able to breath air for as long as you
				have these gills. You have resistance to cold damage while underwater.
			</>
		}
	/>,
	<Surge
		good={
			<>
				You trigger the effects of the{' '}
				<a href="https://www.dndbeyond.com/spells/time-stop">Time Stop</a> Spell
			</>
		}
		neutral={
			<>
				For 24 hours, every so often you will freeze in place for a few seconds
				as if frozen in time... no mechanics to this, just RP.
			</>
		}
		bad={
			<>
				You are frozen in time (stunned), make a DC 18 WIS save every round
				until you succeed to unfreeze yourself.
			</>
		}
	/>,
	<Surge
		good={
			<>
				You grow thick calluses all over your body. For 24 hours, you have
				resistance to slashing and piercing damage.
			</>
		}
		neutral={
			<>
				For 24 hours, your skin thickens and you gain the “Unarmored Defense
				Feat”. If you already have this, then increase AC by +1.
			</>
		}
		bad={
			<>
				Your skin thins. For 24 hours, you are vulnerable to slashing and
				piercing damage.
			</>
		}
	/>,
	/* ---------------- *\
		Transmutation
	\* ----------------*/
	<Surge
		good={
			<>
				For 24 hours, You gain the ability to change the color of your skin,
				hair, and eyes at will.
			</>
		}
		neutral={<>For the next hour, you are the opposite gender.</>}
		bad={<>All of your hair falls out.</>}
	/>,
	<Surge
		good={
			<>
				For 24 hours, You gain the ability to speak with animals and cast the{' '}
				<a href="https://www.dndbeyond.com/spells/beast-bond">Beast Bond</a>{' '}
				spell for free.
			</>
		}
		neutral={
			<>
				You grow antlers, fur, horns, or some other beastly feature for 24
				hours.
			</>
		}
		bad={
			<>
				You <a href="https://www.dndbeyond.com/spells/polymorph">Polymorph</a>{' '}
				into the nearest creature or the last creature you have seen for 24
				hours.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you grow a prehensile monkey tail that can function like
				another hand. Once per turn, it can interact with any object as a free
				action. You can't use it to attack.
			</>
		}
		neutral={<>You grow a monkey tail that you can't control for 24 hours.</>}
		bad={
			<>
				You turn into a common{' '}
				<a href="https://www.dndbeyond.com/monsters/flying-monkey">monkey</a>{' '}
				for 24 hours.
			</>
		}
	/>,
	<Surge
		good={
			<>
				Swap 2 ability scores that would be the best possible meaningful stat
				swap for the target (Str and Con for V) for 24 hours. You can't swap
				stat scores that have the same modifier.
			</>
		}
		neutral={
			<>
				Swap 2 ability scores that would be the funniest possible stat swap for
				the target (Cha and Con for V) for 24 hours. You can't swap stat scores
				that have the same modifier.
			</>
		}
		bad={
			<>
				Swap 2 ability scores that would be the worst possible stat swap for the
				target (Wis and Int for V) for 24 hours. You can't swap stat scores that
				have the same modifier.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you gain the ability to cast any spell from any class as
				long as you have the spell slots for it.
			</>
		}
		neutral={
			<>For 24 hours, you gain access to a cantrip of the players choosing.</>
		}
		bad={
			<>
				For 24 hours, every time you attack with a weapon or cast a spell; take
				1d4 Force damage.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you are able to use the{' '}
				<a href="https://www.dndbeyond.com/sources/basic-rules/classes#BardicInspiration">
					Bardic Inspiration
				</a>{' '}
				class feature.
			</>
		}
		neutral={
			<>
				The next ally you speak to gains the{' '}
				<a href="https://www.dndbeyond.com/spells/bless">Bless</a> effect for 24
				hours.
			</>
		}
		bad={
			<>
				The next ally you speak to gains the{' '}
				<a href="https://www.dndbeyond.com/spells/bane">Bane</a> effect for 24
				hours.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you gain +10 Movement Speed and triple your jump distance.
			</>
		}
		neutral={
			<>
				For 24 hours, you weigh 1/10 of your normal weight and are constantly
				under the effect of the{' '}
				<a href="https://www.dndbeyond.com/spells/feather-fall">Feather Fall</a>{' '}
				spell.
			</>
		}
		bad={
			<>
				For 24 hours, you lose 10 Movement Speed and triple in weight density
				(cant jump or fly).
			</>
		}
	/>,
	<Surge
		good={
			<>
				You get a surge of Adrenaline, gain one use of the{' '}
				<a href="https://www.dndbeyond.com/sources/basic-rules/classes#ActionSurge">
					action surge
				</a>{' '}
				ability. This ability expires at the end of your next long rest.
			</>
		}
		neutral={
			<>
				For 24 hours, you understand how to use ALL weapons and have an urge to
				use a different one each time you fight.
			</>
		}
		bad={<>You gain 1 level of exhaustion.</>}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you gain the{' '}
				<a href="https://www.dndbeyond.com/sources/basic-rules/monsters#Truesight">
					True Sight
				</a>{' '}
				ability to a range of 60 feet.
			</>
		}
		neutral={
			<>
				For 24 hours, you gain the ability of echolocation (
				<a href="https://www.dndbeyond.com/sources/basic-rules/monsters#Blindsight">
					Blind Sight
				</a>
				).
			</>
		}
		bad={<>You go blind for 24 hours.</>}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you can now speak telepathically to anyone within 60ft in
				a language that you know.
			</>
		}
		neutral={
			<>For 24 hours, you must shout at your loudest volume when you speak.</>
		}
		bad={<>For 24 hours, you cannot speak, only bubbles come out.</>}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you gain a keen sense of smell. You gain{' '}
				<a href="https://www.dndbeyond.com/sources/basic-rules/monsters#Blindsight">
					Blind Sight
				</a>{' '}
				with a radius of 10 feet, have advantage on all sent based Perception
				checks and you gain the ability to track down familiar creatures and
				objects by following their scent.
			</>
		}
		neutral={<>For 24 hours, you lose the ability to smell / taste.</>}
		bad={
			<>
				For 24 hours, you are surrounded by a disgusting odor. You gain
				disadvantage on all Charisma checks, and scent based stealth checks.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you are constantly under the effects of the{' '}
				<a href="https://www.dndbeyond.com/spells/haste">Haste</a> spell.
			</>
		}
		neutral={
			<>
				<p>
					For 24 hours, randomly switch between normal, Slow, and Haste spell
					effects on your body. At the start of your turn in combat, roll 1d4 to
					determine the effect. When out of combat, roll 1d4 at the start of
					every hour instead.
				</p>

				<p>
					(1 = <a href="https://www.dndbeyond.com/spells/slow">Slow</a>; 2-3 =
					normal; 4 = <a href="https://www.dndbeyond.com/spells/haste">Haste</a>
					)
				</p>
			</>
		}
		bad={
			<>
				For 24 hours, you are constantly under the effects of the{' '}
				<a href="https://www.dndbeyond.com/spells/slow">Slow</a> spell.
			</>
		}
	/>,
	<Surge
		good={
			<>
				You feel a strong sense of confidence in your abilities. You permanently
				gain a proficiency level in the next non-expertise skill/tool check that
				you attempt to do.
			</>
		}
		neutral={
			<>
				For 24 hours, you gain a proficiency level in the next non-expertise
				skill/tool check that you attempt to do.
			</>
		}
		bad={
			<>
				For 24 hours, You LOSE proficiency in the next proficient skill check
				you make (not casting spells or making attacks).
			</>
		}
	/>,
	<Surge
		good={
			<>
				You give off an inspiring aura. For 24 hours, all allies within 20ft of
				you gain +2 to attack and damage rolls on any melee weapon / spell
				attack they make.
			</>
		}
		neutral={
			<>
				You give off a divine aura. For 24 hours, all allies within 20ft of you
				have the <a href="https://www.dndbeyond.com/spells/bless">Bless</a>{' '}
				effect applied to them.
			</>
		}
		bad={
			<>
				<p>
					You give off a dreadful aura. For 24 hours, all allies within 20ft of
					you make a Wisdom save at the start of their turn or gain the{' '}
					<a href="https://www.dndbeyond.com/spells/bane">Bane</a> effect for
					that round of combat.
				</p>
				<p>Wis save DC = spell casting DC or 10 if not a caster.</p>
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you gain the ability to see through walls and solid
				objects out to a range of 15 ft.
			</>
		}
		neutral={
			<>
				For 24 hours, your normal vision is replaced with heat vision. You have
				(
				<a href="https://www.dndbeyond.com/sources/basic-rules/monsters#Blindsight">
					Blind Sight
				</a>{' '}
				to 20ft but you are not able to see in colour, make out fine detail or
				read printed text.
			</>
		}
		bad={
			<>
				For 24 hours, you can only see non living things (all living things are
				invisible to you)
			</>
		}
	/>,
	<Surge
		good={
			<>
				You IMMEDIATELY gain the effects of a long rest and for 24 hours your
				next long and short rests require half the amount of time as normal to
				gain the full benefits.
			</>
		}
		neutral={
			<>
				You start to get extremely drowsy and have small narcoleptic flare ups.
				Basically you fall asleep randomly. (no mechanical punishments, just RP)
			</>
		}
		bad={
			<>
				<p>
					A 30-foot cube{' '}
					<a href="https://www.dndbeyond.com/spells/hypnotic-pattern">
						Hypnotic Pattern
					</a>{' '}
					appears with you at the center. All creatures within the pattern must
					succeed on a Wisdom saving throw or fall asleep for 1 minute or until
					they take damage.
				</p>
				<p>Wis save DC = spell casting DC or 10 if not a caster.</p>
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you get a +2 modifier in one of your highest ability
				scores (Player choice).
			</>
		}
		neutral={
			<>
				Gain a permanent +1 modifier to one ability score and a permanent -1
				modifier to another. Roll a d20 to determine what skills are affected.
			</>
		}
		bad={
			<>
				For 24 hours, you get a -2 modifier in one of your highest ability
				scores (DM choice).
			</>
		}
	/>,
	<Surge
		good={<>For 24 hours, you gain a fly speed of 30ft.</>}
		neutral={
			<>
				For 24 hours, you can levitate up to 10ft high, but no farther. You have
				a fly speed of 10ft when levitating.
			</>
		}
		bad={
			<>
				You gain a fly speed of 30ft, if you are ever higher than 30ft off the
				ground (eg. over a large fall) you immediately and permanently lose this
				ability.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you grow one size category larger (You are under the spell
				effect{' '}
				<a href="https://www.dndbeyond.com/spells/enlarge-reduce">Enlarge</a>).
			</>
		}
		neutral={
			<>You permanently grow 1ft taller or 1ft shorter (Player choice).</>
		}
		bad={
			<>
				For 24 hours, you shrink by one size category (You are under the spell
				effect{' '}
				<a href="https://www.dndbeyond.com/spells/enlarge-reduce">Reduce</a>).
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, you movement speed is doubled and you can dash as a Bonus
				Action.
			</>
		}
		neutral={
			<>
				For 24 hours, you must move at full speed any time you move anywhere
				(always sprinting)
			</>
		}
		bad={
			<>
				For 24 hours, your body becomes obese (gain over 100lbs) and your
				movement speed is halved.
			</>
		}
	/>,
	<Surge
		good={<>For 24 hours, add +2 Str Modifier.</>}
		neutral={
			<>
				For 24 hours, your muscles swell and grow looking FAR more defined. (No
				mechanical effects, just RP).
			</>
		}
		bad={<>For 24 hours, subtract -2 Str Modifier.</>}
	/>,
	<Surge
		good={<>For 24 hours, add +2 Dex Modifier.</>}
		neutral={
			<>
				For 24 hours, you are clumsy, constantly tripping / dropping things. (No
				mechanical effects, just RP).
			</>
		}
		bad={<>For 24 hours, subtract -2 Dex Modifier.</>}
	/>,
	<Surge
		good={<>For 24 hours, add +2 Con Modifier.</>}
		neutral={
			<>
				For 24 hours, everything hurts when it touches you. (No mechanical
				effects, just RP).
			</>
		}
		bad={<>For 24 hours, subtract -2 Con Modifier.</>}
	/>,
	<Surge
		good={<>For 24 hours, add +2 Int Modifier.</>}
		neutral={
			<>
				For 24 hours, you can no longer read / write / do math or even count.
				(No mechanical effects, just RP).
			</>
		}
		bad={<>For 24 hours, subtract -2 Int Modifier.</>}
	/>,
	<Surge
		good={<>For 24 hours, add +2 Wis Modifier.</>}
		neutral={
			<>
				For 24 hours, you 100% believe anything you are told. (No mechanical
				effects, just RP).
			</>
		}
		bad={<>For 24 hours, subtract -2 Wis Modifier.</>}
	/>,
	<Surge
		good={<>For 24 hours, add +2 Char Modifier.</>}
		neutral={
			<>
				For 24 hours, you become irresistibly attractive. (No mechanical
				effects, just RP).
			</>
		}
		bad={<>For 24 hours, subtract -2 Char Modifier.</>}
	/>,
	/* ---------------- *\
		Evocation
	\* ----------------*/
	<Surge
		good={
			<>
				<p>
					A small glowing red and yellow marble appears in your hand. It is
					quite light, it pulses slowly, and it seems very fragile. (
					<a href="https://www.dndbeyond.com/spells/delayed-blast-fireball">
						Delayed Blast Fireball spell
					</a>
					)
				</p>
				<p>
					If you throw the marble at a target, drop it, or damage it in any way,
					the marble will explode dealing 12d6 fire damage in a 20ft sphere. DC
					15 dex save to halve the damage. The marble will not explode or
					disappear until damaged.
				</p>
			</>
		}
		neutral={
			<>
				The next flammable item you touch, that you aren’t currently wearing or
				carrying, bursts into flame.
			</>
		}
		bad={
			<>
				A Fireball Spell Explodes centered on self: 20ft radius DC15 Dex save
				6d6 damage.
			</>
		}
	/>,
	<Surge
		good={
			<>
				For 24 hours, You can control a fire aura. You can turn it on or off at
				will. While it is active, it deals 1d6 fire damage every 6 seconds to
				any creature within 5ft of you. You are also resistant to fire damage
				while it is active.
			</>
		}
		neutral={
			<>
				You immediately catch on Fire. You take 1d6 fire damage at the start of
				your turn each round for 1 minute or until you or a companion has spent
				an action dousing the flames.
			</>
		}
		bad={
			<>
				<p>
					A 15ft radius circular wall of fire rises up from the ground around
					you with you at the center. Any creature in any of the spaces covered
					by this fire must immediately make a DC 15 Dex saving throw or take
					3d6 fire damage.
				</p>
				<p>
					The ring of fire lasts for 1 hour. Any attempt to move through the
					flames deals 3d6 fire damage with a DC 15 acrobatics check to halve
					the damage.
				</p>
			</>
		}
	/>,
	<Surge
		good={
			<>
				A strong Gale forms. All creatures within 30ft of you make a Strength
				Save or get pulled/pushed towards you (whichever would be BETTER for the
				players)
			</>
		}
		neutral={
			<>
				A gentle gust of wind blows outward from you. All creatures within 40
				feet of you can feel it, but it otherwise does nothing.
			</>
		}
		bad={
			<>
				A strong Gale forms. All creatures within 30ft of you make a Strength
				Save or get pulled/pushed towards you (whichever would be WORSE for the
				players)
			</>
		}
	/>,
	<Surge
		good={
			<>
				You get one opportunity to cast{' '}
				<a href="https://www.dndbeyond.com/spells/call-lightning">
					Call Lightning
				</a>{' '}
				for Free as an Action. No expiration date.
			</>
		}
		neutral={
			<>
				You see the occasional flash of lightning flicker around you. Creatures
				you touch feel a nasty static electric shock. For 24 hours, any creature
				you touch takes 1d4 lightning damage.
			</>
		}
		bad={
			<>
				A loud boom emanates from you. All creatures within 15 feet take 2d8
				thunder damage and must make a DC 15 Constitution saving throw or be
				deafened for 24 hours.
			</>
		}
	/>,
]
