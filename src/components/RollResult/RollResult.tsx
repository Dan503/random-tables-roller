import { useState } from 'react'
import { getResult, maxRolls, roll } from '../../utils/utilFunctions'
import { diceName, Roll, d100, RollRow } from '../../utils/utilTypes'
import './RollResult.css'

type Props<T extends RollRow> = {
	label: string
	tableData?: Array<T>
	dSize: diceName
}

const critClass = (
	diceResult?: d100,
	dSize: diceName = 'd20'
): 'crit crit-fail' | 'crit crit-success' | '' => {
	if (diceResult === 1) {
		return 'crit crit-fail'
	}
	return maxRolls[dSize] === diceResult ? 'crit crit-success' : ''
}

export const RollResult = <T extends RollRow>({
	label,
	tableData,
	dSize,
}: Props<T>) => {
	const [result, setResult] = useState<Roll>()

	const handleClick = () => {
		if (tableData) {
			setResult(getResult(tableData, dSize))
		} else {
			const rolledNumber = roll(dSize)
			setResult({
				roll: rolledNumber,
				value: `${rolledNumber}`,
				actualRoll: rolledNumber,
			})
		}
	}

	return (
		<tr className="RollResult">
			<th>{label}</th>
			<td>
				{tableData && (
					<span className={critClass(result?.actualRoll, dSize)}>
						[ {result?.actualRoll} ]
					</span>
				)}
			</td>
			<td>{result?.value}</td>
			<td>
				<button onClick={handleClick}>Roll</button>
			</td>
		</tr>
	)
}
