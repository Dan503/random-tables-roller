import type { RollTableData } from "../../utils/utilTypes";

/** Remember that the values are for probability, not age brackets */
export const age: RollTableData = [
	{
		roll: 1,
		value: 'Baby'
	},
	{
		roll: [2, 5],
		value: 'Young child',
	},
	{
		roll: [6, 25],
		value: 'Teenager',
	},
	{
		roll: [26, 55],
		value: 'Young Adult',
	},
	{
		roll: [56, 80],
		value: 'Middle aged',
	},
	{
		roll: [81, 99],
		value: 'Old',
	},
	{
		roll: 100,
		value: 'Ancient'
	}
]