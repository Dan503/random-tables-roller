import { CarryCapacity, generateCarryCapacity } from './CarryCapacity'
import { creatureData, TravelCreature, TravelMethodCode } from './Creatures'

export interface Sled {
	size: SledSize
	sledWeight: number
	drivers: number
	passengers: number
	/** Gold to own outright */
	costToOwn: number
}

export type SledSize = 'XS' | 'S' | 'M' | 'L' | 'XL'

type SledData = {
	[key in SledSize]: Sled
}

export const sledData: SledData = {
	XS: {
		size: 'XS',
		costToOwn: 10,
		drivers: 1,
		passengers: 0,
		sledWeight: 30,
	},
	S: {
		size: 'S',
		costToOwn: 30,
		drivers: 1,
		passengers: 1,
		sledWeight: 50,
	},
	M: {
		size: 'M',
		costToOwn: 100,
		drivers: 1,
		passengers: 2,
		sledWeight: 100,
	},
	L: {
		size: 'L',
		costToOwn: 500,
		drivers: 1,
		passengers: 4,
		sledWeight: 300,
	},
	XL: {
		size: 'L',
		costToOwn: 1000,
		drivers: 2,
		passengers: 10,
		sledWeight: 500,
	},
}

type SledTravelMethodData = {
	[key in TravelMethodCode]: null | GetSledCreatureComboDataReturn
}

interface GetSledCreatureComboDataProps {
	creatureCount: number
	sledSize: SledSize
	costToRent: number
}

type GetSledCreatureComboDataReturn = Array<{
	creature: TravelCreature
	creatureCount: number
	/** Gold per day to rent both slead and creatures */
	costToRent: number
	sled: Sled
	sledCarryCapacity: CarryCapacity
}>

const getSledCreatureComboData = (
	creatureCode: TravelMethodCode,
	props: Array<GetSledCreatureComboDataProps>
): GetSledCreatureComboDataReturn => {
	const travelCreature = creatureData[creatureCode]
	return props.map(({ costToRent, sledSize, creatureCount }) => ({
		creatureCode,
		creature: travelCreature,
		creatureCount,
		sled: sledData[sledSize],
		sledCarryCapacity: generateCarryCapacity({
			strengthScore: travelCreature.str,
			creatureCount: creatureCount,
			isSled: true,
			isLarge: travelCreature.isLarge,
		}),
		costToRent,
	}))
}

export const sledTravelMethodData: SledTravelMethodData = {
	WALK: null,
	SNOWSHOE: null,
	DOG: getSledCreatureComboData('DOG', [
		{
			creatureCount: 1,
			costToRent: 1,
			sledSize: 'XS',
		},
		{
			creatureCount: 2,
			costToRent: 3,
			sledSize: 'XS',
		},
		{
			creatureCount: 4,
			costToRent: 5,
			sledSize: 'S',
		},
		{
			creatureCount: 6,
			costToRent: 8,
			sledSize: 'M',
		},
	]),
	BIRD: null,
	DEER: getSledCreatureComboData('DEER', [
		{
			creatureCount: 1,
			costToRent: 10,
			sledSize: 'M',
		},
		{
			creatureCount: 2,
			costToRent: 20,
			sledSize: 'M',
		},
		{
			creatureCount: 4,
			costToRent: 40,
			sledSize: 'L',
		},
		{
			creatureCount: 6,
			costToRent: 60,
			sledSize: 'L',
		},
	]),
	BEAR: getSledCreatureComboData('BEAR', [
		{
			creatureCount: 1,
			costToRent: 20,
			sledSize: 'M',
		},
		{
			creatureCount: 2,
			costToRent: 40,
			sledSize: 'L',
		},
		{
			creatureCount: 4,
			costToRent: 80,
			sledSize: 'XL',
		},
		{
			creatureCount: 6,
			costToRent: 120,
			sledSize: 'XL',
		},
	]),
}
