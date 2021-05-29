import type { FC } from 'react'
import { FlexGap } from '../FlexGap/FlexGap'
import './RollTableSet.css'

type component = FC<{
	heading?: string
}>

export const RollTableSet: component = ({ heading, children }) => {
	return (
		<div className="RollTableSet">
			<FlexGap direction="vertical">
				<h2>{heading}</h2>
				<table>
					<thead>
						<tr>
							<th>Trait</th>
							<th>Roll value</th>
							<th>Result</th>
							<th>Action</th>
							<th>Table</th>
						</tr>
					</thead>
					<tbody>{children}</tbody>
				</table>
			</FlexGap>
		</div>
	)
}
