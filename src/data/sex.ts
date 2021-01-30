import { d4, RollTable } from "../utils/utilTypes";

export const sex: RollTable<d4> = [
	{
		roll: [1, 2],
		value: 'Male'
	},
	{
		roll: [3, 4],
		value: 'Female'
	},
]
