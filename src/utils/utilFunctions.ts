import { diceName, d20, d100, RollTable, Roll } from "./utilTypes"

export const maxRolls = {
	d100: 100,
	d20: 20,
	d12: 12,
	d10: 10,
	d8: 8,
	d6: 6,
	d4: 4,
}

export const roll = <dSize extends d100 = d20>(diceName: diceName = 'd20') => {
	return Math.ceil(Math.random() * maxRolls[diceName]) as dSize
}

export const getResult = (tableData: RollTable, dSize: diceName = 'd20'): Roll => {
	const result = roll(dSize)
	const isObject = Object.keys(tableData[0] || {}).includes('roll')
	const matchedRow = isObject ? tableData.find(
		(row: any) => {
			return Array.isArray(row?.roll) ? row.roll[0] <= result &&
				row.roll[1] >= result :
				row.roll === result
		}
	) : tableData[result - 1]
	return {
		...matchedRow as Roll,
		actualRoll: result,
	}
}