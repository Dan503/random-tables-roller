import { FC, useState, useEffect, useCallback, ChangeEvent } from 'react'
import { CarryCapacity } from '../../data/travel/CarryCapacity'
import {
	creatureData,
	TravelMethod,
	TravelMethodCode,
	travelMethods,
} from '../../data/travel/Creatures'
import { sledTravelMethodData } from '../../data/travel/Sleds'
import {
	onCheckboxChange,
	onNumberInputChange,
	onSelectChange,
} from '../../utils/utilFunctions'

type component = FC<{
	/** Add a string of CSS classes */
	className?: string
}>

type validCreatureCounts = 1 | 2 | 4 | 6

export const TravelCalculator: component = ({
	className,
	children,
	...restProps
}) => {
	const [travelMethod, setTravelMethod] = useState<TravelMethodCode>('WALK')
	const [isUsingSled, setIsUsingSled] = useState<boolean>(true)
	const [encomberance, setEncomberance] = useState<CarryCapacity>()
	const [creatureCount, setCreatureCount] = useState<validCreatureCounts>(1)

	const onTravelSelect = onSelectChange<TravelMethodCode>(setTravelMethod)
	const onSledChange = onCheckboxChange(setIsUsingSled)
	const onCreatureCountChange = onNumberInputChange<validCreatureCounts>(
		setCreatureCount
	)

	useEffect(() => {
		const sledTravelMethod = sledTravelMethodData[travelMethod]?.find(
			x =>
				x.creature.travelMethodCode === travelMethod &&
				x.creatureCount === creatureCount
		)

		if (creatureCount > 1 && sledTravelMethod) {
			setIsUsingSled(true)
		}

		if (isUsingSled) {
			if (!sledTravelMethod) {
				setIsUsingSled(false)
			} else {
				setEncomberance(sledTravelMethod.sledCarryCapacity)
			}
		} else {
			setEncomberance(creatureData[travelMethod].carryCapacity)
		}
	}, [travelMethod, isUsingSled, creatureCount])

	return (
		<div className={className} {...restProps}>
			<h2>Travel calculator</h2>

			<input placeholder="Base travel hours" inputMode="numeric" type="text" />
			<input placeholder="Inventory weight" inputMode="decimal" type="text" />

			<select
				onChange={onCreatureCountChange}
				title="Creature count"
				value={creatureCount}
			>
				{[1, 2, 4, 6].map(value => {
					return <option value={value}>{value}x</option>
				})}
			</select>
			<select
				onChange={onTravelSelect}
				value={travelMethod}
				title="Travel method"
			>
				{travelMethods.map(value => {
					const label = TravelMethod[value]
					return <option value={value}>{label}</option>
				})}
			</select>
			<label>
				<span>Sled?</span>
				<input type="checkbox" checked={isUsingSled} onChange={onSledChange} />
			</label>
			<ul>
				<li>
					<strong>Comfortable limit</strong> {encomberance?.comfortableLimit}
				</li>
				<li>
					<strong>Encombered limit</strong> {encomberance?.encumberedLimit}
				</li>
				<li>
					<strong>Heavily Encombered limit</strong>{' '}
					{encomberance?.heavilyEncumberedLimit}
				</li>
			</ul>
		</div>
	)
}
