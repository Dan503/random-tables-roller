import type { RollTableData } from 'src/utils/utilTypes'

const Character = ' The creature that triggered the divine burst '
const character = ' the creature that triggered the divine burst '

/**
 * AKA "Divine Burst"
 *
 * Values based on https://www.dndbeyond.com/sources/tcoe/dungeon-masters-tools#BlessedRadiance
 */
export const divineNat20: RollTableData = [
	{
		roll: [1, 6],
		value: (
			<>
				Golden light fills a 20-foot-radius, 40-foot-high cylinder centered on
				one character in the region and then fades. That character and their
				friends in the cylinder gain the benefits of the{' '}
				<a href="https://www.dndbeyond.com/spells/divine-favor">divine favor</a>{' '}
				spell for 1 hour.
			</>
		),
	},
	{
		roll: [7, 12],
		value: (
			<>
				Radiant energy erupts in a 10-foot-radius sphere centered on {character}
				. Each creature in the sphere that isn’t undead regains 3d6 hit points.
				Each undead creature in the sphere takes 3d6 radiant damage.
			</>
		),
	},
	{
		roll: [13, 18],
		value: (
			<>
				Creatures in a 30ft radius around {character} can suddenly start
				understanding all languages for 1 hour.
			</>
		),
	},
	{
		roll: [19, 24],
		value: (
			<>{Character} gains advantage on saving throws for the next 24 hours.</>
		),
	},
	{
		roll: [25, 30],
		value: (
			<>
				{Character} is suffused with celestial power. For 1 minute, the
				character’s melee attacks deal an extra 2d6 radiant damage on a hit.
			</>
		),
	},
	{
		roll: [31, 36],
		value: (
			<>
				One simple or martial weapon that is nonmagical and carried by{' '}
				{character} gains the properties of a{' '}
				<a href="https://www.dndbeyond.com/magic-items/mace-of-disruption">
					Mace of Disruption
				</a>{' '}
				for 24 hours.
			</>
		),
	},
	{
		roll: [37, 42],
		value: (
			<>
				A{' '}
				<a href="https://www.dndbeyond.com/monsters/flying-sword">
					flying sword made of light
				</a>{' '}
				appears next to {character} under their control. The sword can be
				controlled using a bonus action. The sword deals radiant damage instead
				of slashing damage. The sword vanishes after 1 minute.
			</>
		),
	},
	{
		roll: [43, 48],
		value: (
			<>
				{Character} hears whispers from celestial beings or refrains of
				celestial choirs. The character can ask those voices one question as if
				using the <a href="https://www.dndbeyond.com/spells/commune">Commune</a>{' '}
				spell.
			</>
		),
	},
	{
		roll: [49, 54],
		value: (
			<>
				All creatures in a 30ft radius of {character} give off a crimson glow
				for 1 minute. The creatures shed dim light in a 10-foot radius, attacks
				against them have advantage if the attacker can see them, and the
				creatures can’t benefit from being invisible.
			</>
		),
	},
	{
		roll: [55, 60],
		value: (
			<>
				Celestial power explodes in a 30-foot-radius sphere of divine light
				centered on {character}. Each creature in the sphere must make a DC 15
				Constitution saving throw. On a failure, the creature takes 4d6 radiant
				damage and is blinded. On a success, it takes half damage and isn’t
				blinded.
			</>
		),
	},
	{
		roll: [61, 66],
		value: (
			<>
				{Character} feels a profound sense of purpose and gains the benefit of
				the <a href="https://www.dndbeyond.com/spells/bless">Bless</a> spell for
				1 minute. They can choose two other creatures they can see to gain the
				spell’s benefits as well.
			</>
		),
	},
	{
		roll: [67, 72],
		value: (
			<>
				A booming voice thunders in Celestial and can be heard throughout the
				region. Each creature within 100ft of {character} must make a DC 15
				Constitution saving throw. On a success, the creature gains 2d10
				temporary hit points. On a failure, the creature is deafened for 1
				minute.
			</>
		),
	},
	{
		roll: [73, 78],
		value: (
			<>
				{Character} hands begin to glow with divine bower and gains the ability
				to cure afflictions for 1 hour. As an action, they can cast lesser
				restoration or greater restoration without expending a spell slot and
				requiring no material components.
			</>
		),
	},
	{
		roll: [79, 84],
		value: (
			<>
				If V (or selune follower) Twilight Sanctuary activates. Else An area
				30ft around {character} becomes filled with bright light that is not
				extinguished by the darkness spell.
			</>
		),
	},
	{
		roll: [85, 90],
		value: (
			<>
				An angelic voice rings throughout the region. Each creature within 60ft
				of {character} must succeed on a DC 15 Wisdom saving throw or perform
				the grovel option of the command spell.
			</>
		),
	},
	{
		roll: [91, 95],
		value: <>{Character} gains immunity to cold damage for 24 hours.</>,
	},
	{
		roll: [96, 100],
		value: (
			<>
				{Character} gains the ability to use the{' '}
				<a href="https://www.dndbeyond.com/sources/phb/classes#DivineIntervention">
					Divine Intervention
				</a>{' '}
				cleric feature for 7 days. It succeeds automatically when used. The
				character can only use the feature granted in this way only once. Reroll
				if you’ve already rolled this effect.
			</>
		),
	},
]
