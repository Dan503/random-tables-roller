import type { CarryCapacity } from '../../data/travel/CarryCapacity'

import { FC, useState, useEffect } from 'react'
import {
	creatureData,
	TravelCreature,
	TravelMethod,
	TravelMethodCode,
	travelMethods,
} from '../../data/travel/Creatures'
import { sledTravelMethodData } from '../../data/travel/Sleds'
import {
	onCheckboxChange,
	onNumberInputChange,
	onSelectChange,
	abbreviatedNumber,
} from '../../utils/utilFunctions'
import { FlexGap } from '../FlexGap/FlexGap'

type component = FC<{
	/** Add a string of CSS classes */
	className?: string
}>

type validCreatureCounts = 1 | 2 | 4 | 6

type EncomberanceLabel =
	| 'Comfortable'
	| 'Encombered'
	| 'Heavily Encombered'
	| `Can't Move`
type EncomberanceCode = 'c' | 'e' | 'he' | 'x'

type EncomberanceType = {
	[key in EncomberanceCode]: {
		label: EncomberanceLabel
		timeMultiplier: 1 | 1.5 | 2 | 0
		limitName: keyof CarryCapacity | 'x'
	}
}

const Encomberance: EncomberanceType = {
	c: {
		label: 'Comfortable',
		timeMultiplier: 1,
		limitName: 'comfortableLimit',
	},
	e: {
		label: 'Encombered',
		timeMultiplier: 1.5,
		limitName: 'encumberedLimit',
	},
	he: {
		label: 'Heavily Encombered',
		timeMultiplier: 2,
		limitName: 'heavilyEncumberedLimit',
	},
	x: {
		label: `Can't Move`,
		timeMultiplier: 0,
		limitName: 'x',
	},
}

export const TravelCalculator: component = ({
	className,
	children,
	...restProps
}) => {
	const [travelMethod, setTravelMethod] = useState<TravelMethodCode>('WALK')
	const [currentCreature, setCurrentCreature] = useState<TravelCreature>()
	const [isUsingSled, setIsUsingSled] = useState<boolean>(true)
	const [isWilderness, setIsWilderness] = useState<boolean>(false)
	const [isMountains, setIsMountains] = useState<boolean>(false)
	const [encumbrance, setEncomberance] = useState<CarryCapacity>()
	const [creatureCount, setCreatureCount] = useState<validCreatureCounts>(1)
	const [baseTravelHours, setBaseTravelHours] = useState<number>(0)
	const [inventoryWeight, setInventoryWeight] = useState<number>(0)

	const [currentEncomberance, setCurrentEncomberance] =
		useState<EncomberanceCode>('c')

	const [calculatedTravelHours, setCalculatedTravelHours] = useState<number>(0)
	const [totalCalculatedTravelHours, setTotalCalculatedTravelHours] =
		useState<number>(0)

	const onTravelSelect = onSelectChange<TravelMethodCode>(setTravelMethod)
	const onSledChange = onCheckboxChange(setIsUsingSled)
	const onCreatureCountChange =
		onNumberInputChange<validCreatureCounts>(setCreatureCount)
	const onBaseTravelHourChange = onNumberInputChange<number>(setBaseTravelHours)
	const onInventoryWeightChange =
		onNumberInputChange<number>(setInventoryWeight)

	useEffect(() => {
		setCurrentCreature(creatureData[travelMethod])
	}, [travelMethod])

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

	useEffect(() => {
		if (encumbrance) {
			const { comfortableLimit, encumberedLimit, heavilyEncumberedLimit } =
				encumbrance
			if (inventoryWeight <= comfortableLimit) {
				setCurrentEncomberance('c')
			} else if (inventoryWeight <= encumberedLimit) {
				setCurrentEncomberance('e')
			} else if (inventoryWeight <= heavilyEncumberedLimit) {
				setCurrentEncomberance('he')
			} else {
				setCurrentEncomberance('x')
			}
		}
	}, [encumbrance, inventoryWeight])

	useEffect(() => {
		const { timeMultiplier: encomberanceMultiplier } =
			Encomberance[currentEncomberance]

		const { travelTimeReduction, restInterval } = creatureData[travelMethod]

		const terrainMultiplier = (isMountains && 3) || (isWilderness && 2) || 1

		const totalTravelHours =
			(baseTravelHours / travelTimeReduction) *
			encomberanceMultiplier *
			terrainMultiplier

		setCalculatedTravelHours(abbreviatedNumber(totalTravelHours))

		if (restInterval) {
			const restHours = Math.floor(totalTravelHours) / restInterval
			setTotalCalculatedTravelHours(
				abbreviatedNumber(totalTravelHours + restHours)
			)
		}
	}, [
		currentEncomberance,
		baseTravelHours,
		isWilderness,
		isMountains,
		travelMethod,
	])

	useEffect(() => {
		if (isMountains) {
			setIsWilderness(false)
		}
	}, [isMountains])
	useEffect(() => {
		if (isWilderness) {
			setIsMountains(false)
		}
	}, [isWilderness])

	return (
		<div className={className} {...restProps}>
			<h2>Travel calculator</h2>

			<FlexGap direction="vertical" align="center" justify="center">
				<FlexGap>
					<label>
						<span>Base travel hours</span>
						<input
							inputMode="decimal"
							type="text"
							value={baseTravelHours}
							onChange={onBaseTravelHourChange}
						/>
					</label>
					<label>
						<span>Total inventory weight</span>
						<input
							inputMode="decimal"
							type="text"
							value={inventoryWeight}
							onChange={onInventoryWeightChange}
						/>
					</label>
				</FlexGap>
				<FlexGap>
					<select
						onChange={onCreatureCountChange}
						title="Creature count"
						value={creatureCount}
					>
						{[1, 2, 4, 6].map(value => {
							return (
								<option value={value} key={value}>
									{value}x
								</option>
							)
						})}
					</select>
					<select
						onChange={onTravelSelect}
						value={travelMethod}
						title="Travel method"
					>
						{travelMethods.map(value => {
							const label = TravelMethod[value]
							return (
								<option value={value} key={value}>
									{label}
								</option>
							)
						})}
					</select>
				</FlexGap>

				<FlexGap>
					<label>
						<span>Sled?</span>
						<input
							type="checkbox"
							checked={isUsingSled}
							onChange={onSledChange}
						/>
					</label>
					<label>
						<span>Wilderness?</span>
						<input
							type="checkbox"
							checked={isWilderness}
							onChange={onCheckboxChange(setIsWilderness)}
						/>
					</label>
					<label>
						<span>Mountains?</span>
						<input
							type="checkbox"
							checked={isMountains}
							onChange={onCheckboxChange(setIsMountains)}
						/>
					</label>
				</FlexGap>

				<div>
					<p>
						<strong>Total travel time:</strong> {calculatedTravelHours} hours
						{Boolean(currentCreature?.restInterval) && (
							<>
								<br />
								(Creature must rest every {currentCreature?.restInterval} hours)
								<br />
								<strong>Plus rests:</strong> {totalCalculatedTravelHours} hours
							</>
						)}
					</p>
					<p>
						<strong>Encomberance:</strong>{' '}
						{Encomberance[currentEncomberance].label} (
						{Encomberance[currentEncomberance].timeMultiplier}x)
					</p>
				</div>

				<ul>
					<li>
						<strong>Comfortable limit</strong> {encumbrance?.comfortableLimit}
					</li>
					<li>
						<strong>Encombered limit</strong> {encumbrance?.encumberedLimit}
					</li>
					<li>
						<strong>Heavily Encombered limit</strong>{' '}
						{encumbrance?.heavilyEncumberedLimit}
					</li>
				</ul>
			</FlexGap>
		</div>
	)
}
