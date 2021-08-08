import { roll } from "../../utils/utilFunctions"
import { d20, RollTableData } from "src/utils/utilTypes"

export const WildernessTerrain: RollTableData<d20> = [
	{
		roll: 1,
		value: 'Cave (Enter for shortcut or take a fail to go around)'
	},
	{
		roll: 2,
		value: 'Jagged rocks (DC 14)'
	},
	{
		roll: [3, 4],
		value: 'Slippery ice (DC 13)'
	},
	{
		roll: [5, 6],
		value: 'Thick shrubbery & thistles (DC 13)'
	},
	{
		roll: [7, 8],
		value: 'Thick Forrest (DC 12)'
	},
	{
		roll: [9, 11],
		value: 'Waist high snow (DC 11)'
	},
	{
		roll: [12, 13],
		value: 'Loose rocks (DC 10)'
	},
	{
		roll: [14, 15],
		value: 'Forrest (DC 10)'
	},
	{
		roll: [16, 17],
		value: () => `Frozen river/stream ${roll(50)}ft across`
	},
	{
		roll: [18, 19],
		value: 'Open plains (DC 8)'
	},
	{
		roll: 20,
		value: 'Roll on Landmark Table'
	}
]

// Mountainous terrain has +2 DC to checks that are also in Wilderness table
export const MountainousTerrain: RollTableData<d20> = [
	{
		roll: 1,
		value: 'Cave (Enter for shortcut or take a fail to go around)'
	},
	{
		roll: 2,
		value: 'Chasm (DC 18)'
	},
	{
		roll: [3, 4],
		value: 'Ascend cliff face (DC 17)'
	},
	{
		roll: [5, 6],
		value: 'Descend cliff face (DC 17)'
	},
	{
		roll: [7, 9],
		value: 'Jagged rocks (DC 16)'
	},
	{
		roll: [10, 13],
		value: 'Slippery ice (DC 15)'
	},
	{
		roll: [14, 15],
		value: 'Waist high snow (DC 13)'
	},
	{
		roll: [16, 17],
		value: () => `Frozen river/stream ${roll(50)}ft across`
	},
	{
		roll: [18, 19],
		value: 'Loose rocks (DC 12)'
	},
	{
		roll: 20,
		value: 'Roll on Landmark Table'
	}
]

export const Landmarks = [
	'A mile wide frozen lake with with a gigantic white dragon frozen inside, sealed by magic (use dragon lake map)',
	`corpses of dead animals partially burried in a strange fashion are arranged from smallest to largest (human size creature looks to be next?)`,
	`Ice castle with frozen blood and frozen solid bodies (lair of "The Spine Demon" (Abominable Yeti)?)`,
	'Massive bird like nest',
	`Boulder sits in the middle of the snow, it looks as if it fell or was thrown (Ogres near?)`,
	`Sharp spires of large black crystals (Chardalyn) extend out of the ground forming a jagged wasteland`,
	'Skeleton of a huge humanoid creature sticks out of the ground forming a large canopy (use giant-skeleton map)',
	`You find a large cavern face with dark blood across it,	inside you find a singular white scaled egg... Where is the mother? What is this creature? (White dragon?)`,
	'A massive block of ice with a gentle creature frozen inside',
	'A hot spring or some kind of thermal vent warms a small body of water',
]
