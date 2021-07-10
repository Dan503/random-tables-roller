import type { d100, RollTableData } from '../../utils/utilTypes'

export const races: RollTableData<d100> = [
	{
		roll: 1,
		value: 'Half-orc',
	},
	{
		roll: [2, 40],
		value: 'Human',
	},
	{
		roll: [41, 70],
		value: 'Dwarf',
	},
	{
		roll: [71, 85],
		value: 'Goliath',
	},
	{
		roll: [86, 90],
		value: 'Triton',
	},
	{
		roll: [91, 92],
		value: 'Halfling',
	},
	{
		roll: [93, 94],
		value: 'Gnome',
	},
	{
		roll: [95, 96],
		value: 'Tabaxi',
	},
	{
		roll: 97,
		value: 'Tiefling',
	},
	{
		roll: 98,
		value: 'Dragonborn',
	},
	{
		roll: 99,
		value: 'Half-Elf',
	},
	{
		roll: 100,
		value: 'Elf',
	},
]
