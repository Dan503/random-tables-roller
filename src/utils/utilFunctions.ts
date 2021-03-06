import type { ChangeEvent, ReactNode } from 'react'
import type { d100, d20, diceName, Roll } from './utilTypes'

export const maxRolls = {
	d100: 100,
	d20: 20,
	d12: 12,
	d10: 10,
	d8: 8,
	d6: 6,
	d4: 4,
}

export const roll = <dSize extends d100 = d20>(diceName: diceName | number = 'd20') => {
	const maxRoll = typeof diceName === 'string' ? maxRolls[diceName] : diceName
	return Math.ceil(Math.random() * maxRoll) as dSize
}

export const isRollObject = (tableRow: Roll | ReactNode) =>
	Object.keys(tableRow || {}).includes('roll')

export const getResult = (
	tableData: Array<Roll | ReactNode>,
	maxRoll: number
): Roll => {
	const result = roll(maxRoll)

	const findMatchingRow = (row: Roll) => {
		if (Array.isArray(row.roll)) {
			const isGreaterThanMin = row.roll[0] <= result
			const isLessThanMax = row.roll[1] >= result
			return isGreaterThanMin && isLessThanMax
		} else {
			const isEqual = row.roll === result
			return isEqual
		}
	}

	if (isRollObject(tableData[0])) {
		const matchedRow = tableData.find(row => findMatchingRow(row as Roll))
		return {
			...(matchedRow as Roll),
			actualRoll: result,
		}
	} else {
		return {
			roll: result,
			value: tableData[result - 1],
			actualRoll: result,
		}
	}
}

export function onSelectChange<ReturnState>(
	setState: (newState: ReturnState) => void
) {
	return (e: ChangeEvent<HTMLSelectElement>) => {
		const newValue: unknown = e.target.value
		setState(newValue as ReturnState)
	}
}

export function onCheckboxChange(setState: (newState: boolean) => void) {
	return (e: ChangeEvent<HTMLInputElement>) => {
		setState(e.target.checked)
	}
}

export function onNumberInputChange<ReturnState = number>(
	setState: (newState: ReturnState) => void
) {
	return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const newValue: unknown = parseFloat(e.target.value) || 0
		setState(newValue as ReturnState)
	}
}

export const hasDecimals = (number: number) => number % 1 !== 0
export const abbreviatedNumber = (number: number) =>
	hasDecimals(number) ? parseFloat(number.toFixed(2)) : number
