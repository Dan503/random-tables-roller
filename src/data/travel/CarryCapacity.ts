export interface CarryCapacity {
	/** Can move at **full speed** up to this limit */
	comfortableLimit: number
	/** Speed reduced by 1.5x up to this limit */
	encumberedLimit: number
	/** Speed reduced by 2x up to this limit.
	 *
	 * Creature cannot move if over this limit.
	 */
	heavilyEncumberedLimit: number
}

interface generateCarryCapacityOpts {
	strengthScore: number
	creatureCount?: number
	isLarge?: boolean
	isSled?: boolean
}

export const generateCarryCapacity = ({
	strengthScore,
	creatureCount = 1,
	isLarge = true,
	isSled = false,
}: generateCarryCapacityOpts): CarryCapacity => {
	const comfortableLimit = strengthScore * 5 * creatureCount
	const encumberedLimit = comfortableLimit + comfortableLimit
	const heavilyEncumberedLimit = encumberedLimit + comfortableLimit

	if (!isLarge && !isSled) {
		return {
			comfortableLimit,
			encumberedLimit,
			heavilyEncumberedLimit,
		}
	}

	if ((isLarge && !isSled) || (!isLarge && isSled)) {
		return {
			comfortableLimit: comfortableLimit * 2,
			encumberedLimit: encumberedLimit * 2,
			heavilyEncumberedLimit: heavilyEncumberedLimit * 2,
		}
	}

	return {
		comfortableLimit: comfortableLimit * 2 * 2,
		encumberedLimit: encumberedLimit * 2 * 2,
		heavilyEncumberedLimit: heavilyEncumberedLimit * 2 * 2,
	}
}
