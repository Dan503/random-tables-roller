import { d20, RollTableData } from "src/utils/utilTypes";

export const Terrain: RollTableData<d20> = [
	{
		roll: 1,
		value: 'Cave (Enter or take a travel fail to go around)'
	},
	{
		roll: 2,
		value: 'Chasm'
	},
	{
		roll: 3,
		value: 'Cliff face'
	},
	{
		roll: 4,
		value: 'Frozen river'
	},
	{
		roll: 5,
		value: 'Frozen stream'
	},
	{
		roll: [6, 7],
		value: 'Slippery ice'
	},
	{
		roll: [8, 9],
		value: 'Thick shrubbery & thistles'
	},
	{
		roll: [10, 11],
		value: 'Deep waist high snow'
	},
	{
		roll: [12, 13],
		value: 'Jagged rocks'
	},
	{
		roll: [14, 15],
		value: 'Loose rocks'
	},
	{
		roll: [16, 17],
		value: 'Forrest'
	},
	{
		roll: [18, 19],
		value: 'Open plains (Advantage?)'
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
