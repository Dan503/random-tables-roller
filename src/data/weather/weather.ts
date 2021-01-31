import { d20, RollTable } from "../../utils/utilTypes";

export const weather: RollTable<d20> = [
	{
		roll: 1,
		value: 'Blizzard (-5 next weather roll)'
	},
	{
		roll: 2,
		value: 'Hail storm (-2 next weather roll)'
	},
	{
		roll: [3, 5],
		value: 'Snow storm (-2 next weather roll)'
	},
	{
		roll: [6, 7],
		value: 'Frigid winds'
	},
	{
		roll: [8, 9],
		value: 'Dense Fog'
	},
	{
		roll: [10, 11],
		value: 'Light fog'
	},
	{
		roll: [12, 14],
		value: 'Light snow fall'
	},
	{
		roll: [15, 19],
		value: 'Clear skies (+2 next weather roll)'
	},
	{
		roll: 20,
		value: 'Rays of Hope (+5 next weather roll)'
	},
]