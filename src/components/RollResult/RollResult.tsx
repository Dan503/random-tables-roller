import { useState } from 'react'
import { getResult, isRollObject, maxRolls } from '../../utils/utilFunctions'
import type { diceName, Roll, RollRow } from '../../utils/utilTypes'
import './RollResult.css'

type Props<T extends RollRow> = {
	label: string
	tableData: Array<T>
	dSize?: diceName
}

const critClass = (
	diceResult: number,
	maxRoll: number
): 'crit crit-fail' | 'crit crit-success' | '' => {
	if (diceResult === 1) {
		return 'crit crit-fail'
	}
	return maxRoll === diceResult ? 'crit crit-success' : ''
}

export const RollResult = <T extends RollRow>({
	label,
	tableData,
	dSize,
}: Props<T>) => {
	const [result, setResult] = useState<Roll>()
	const [isTableVisible, setIsTableVisible] = useState<boolean>(false)

	const maxRoll = typeof dSize === 'string' ? maxRolls[dSize] : tableData.length

	const handleRoll = () => {
		setResult(getResult(tableData, maxRoll))
	}

	const toggleTable = () => {
		setIsTableVisible(!isTableVisible)
	}

	return (
		<>
			<tr className="RollResult">
				<th>{label}</th>
				<td>
					{tableData && result?.actualRoll && (
						<span className={critClass(result.actualRoll, maxRoll)}>
							[ {result.actualRoll} ]
						</span>
					)}
				</td>
				<td>{result?.value}</td>
				<td>
					<button onClick={handleRoll}>Roll</button>
				</td>
				<td>
					<button
						onClick={toggleTable}
						aria-expanded={isTableVisible}
						aria-label="Toggle table"
					></button>
				</td>
			</tr>
			{isTableVisible && tableData && (
				<tr>
					<td colSpan={5}>
						<table>
							<thead>
								<tr>
									<th align="right">Number</th>
									<th align="left">Result</th>
								</tr>
							</thead>
							<tbody>
								{tableData.map((row: T, index) => {
									if (isRollObject(row)) {
										const { value, roll } = row as Roll
										const number = Array.isArray(roll)
											? `${roll[0]} - ${roll[1]}`
											: roll

										return (
											<tr key={number}>
												<th align="right">{number}</th>
												<td align="left">{value}</td>
											</tr>
										)
									} else {
										return (
											<tr key={index}>
												<th align="right">{index + 1}</th>
												<td align="left">{row}</td>
											</tr>
										)
									}
								})}
							</tbody>
						</table>
					</td>
				</tr>
			)}
		</>
	)
}
