import { d20, RollTableData } from "src/utils/utilTypes";

export const Terrain: RollTableData<d20> = [
	{
		roll: 1,
		value: 'Dangerous encounter'
	},
	{
		roll: 2,
		value: 'Safe encounter'
	},
	{
		roll: 3,
		value: 'Cliff face'
	},
	{
		roll: 4,
		value: 'Cave'
	},
	{
		roll: 5,
		value: 'Frozen river'
	},
	{
		roll: 6,
		value: 'Frozen stream'
	},
	{
		roll: [7, 8],
		value: 'Thick Shrubbery'
	},
	{
		roll: [9, 10],
		value: 'Slippery Ice'
	},
	{
		roll: [11, 12],
		value: 'Deep Snow'
	},
	{
		roll: [13, 15],
		value: 'Rocky'
	},
	{
		roll: [16, 19],
		value: 'Open plains'
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
	'Massive flying creature / bird / dragon flies overhead',
	`Boulder sits in the middle of the snow, it looks as if it fell or was thrown (Ogres near?)`,
	`Sharp spires of large black crystals (Chardalyn) extend out of the ground forming a jagged wasteland`,
	'Skelleton of a huge creature sticks out of the ground forming a large canopy (safety or a creatures lair?)',
	`You find a large cavern face with dark blood across it,	inside you find a singular white scaled egg... Where is the mother? What is this creature? (White dragon?)`,
	'A massive block of ice with a gentle creature frozen inside',
	'A hot spring or some kind of thermal vent warms a small body of water',
]
