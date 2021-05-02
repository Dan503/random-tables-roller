import { CarryCapacity, generateCarryCapacity } from './CarryCapacity'

export enum TravelMethod {
	WALK = 'Walking',
	SNOWSHOE = 'Snow racket shoes',
	BIRD = 'Axe Beak',
	DOG = 'Dog',
	DEER = 'Reindeer',
	BEAR = 'Polar bear',
}

export type TravelMethodCode =
	| 'WALK'
	| 'SNOWSHOE'
	| 'DOG'
	| 'BIRD'
	| 'DEER'
	| 'BEAR'

export const travelMethods: Array<TravelMethodCode> = ['WALK', 'SNOWSHOE', 'DOG', 'BIRD', 'DEER', 'BEAR']

export interface TravelCreature {
	travelMethodCode: TravelMethodCode
	str: number
	strMod: number
	carryCapacity: CarryCapacity,
	cost: {
		/** Gold needed to buy outright */
		own: number,
		/** Gold per day needed to rent */
		rent: number
	},
	rationsPerLongRest: number,
	survivalMod: number,
	frostCheckMod: number,
	travelTimeReduction: number,
	isLarge: boolean
}

type CreatureData = {
	[key in TravelMethodCode]: TravelCreature
}

export const creatureData: CreatureData = {
	WALK: {
		travelMethodCode: 'WALK',
		str: 10,
		strMod: 0,
		carryCapacity: generateCarryCapacity({ strengthScore: 10, isLarge: false }),
		cost: {
			own: 0,
			rent: 0,
		},
		rationsPerLongRest: 1,
		survivalMod: 0,
		frostCheckMod: 0,
		isLarge: false,
		travelTimeReduction: 0.5,
	},
	SNOWSHOE: {
		travelMethodCode: 'SNOWSHOE',
		str: 10,
		strMod: 0,
		carryCapacity: generateCarryCapacity({ strengthScore: 10, isLarge: false }),
		cost: {
			own: 2,
			rent: 0.2,
		},
		rationsPerLongRest: 1,
		survivalMod: 0,
		frostCheckMod: 0,
		isLarge: false,
		travelTimeReduction: 0,
	},
	DOG: {
		travelMethodCode: 'DOG',
		str: 12,
		strMod: 1,
		carryCapacity: generateCarryCapacity({ strengthScore: 12, isLarge: false }),
		cost: {
			own: 10,
			rent: 1
		},
		rationsPerLongRest: 0.5,
		survivalMod: 1,
		frostCheckMod: 1,
		isLarge: false,
		travelTimeReduction: 4,
	},
	BIRD: {
		travelMethodCode: 'BIRD',
		str: 20,
		strMod: 5,
		carryCapacity: generateCarryCapacity({ strengthScore: 20 }),
		cost: {
			own: 50,
			rent: 5
		},
		rationsPerLongRest: 1,
		survivalMod: 1,
		frostCheckMod: 2,
		isLarge: true,
		travelTimeReduction: 3
	},
	DEER: {
		travelMethodCode: 'DEER',
		str: 16,
		strMod: 3,
		carryCapacity: generateCarryCapacity({ strengthScore: 16 }),
		cost: {
			own: 100,
			rent: 10,
		},
		rationsPerLongRest: 2,
		survivalMod: 2,
		frostCheckMod: 1,
		isLarge: true,
		travelTimeReduction: 2,
	},
	BEAR: {
		travelMethodCode: 'BEAR',
		str: 30, // Officially bears have strength of 20 but it made reindeer sleds overpowered at 20 strength
		strMod: 10,
		carryCapacity: generateCarryCapacity({ strengthScore: 30 }),
		cost: {
			own: 200,
			rent: 20,
		},
		rationsPerLongRest: 3,
		survivalMod: 3,
		frostCheckMod: 3,
		isLarge: true,
		travelTimeReduction: 2,
	},
}
