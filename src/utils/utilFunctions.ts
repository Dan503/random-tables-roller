import { diceName, d20, d100 } from "./utilTypes"

export const roll = <dSize extends d100 = d20>(diceName: diceName) => {
	const maxRolls = {
		d100: 100,
		d20: 20,
		d12: 12,
		d10: 10,
		d8: 8,
		d6: 6,
		d4: 4,
	}
	return Math.ceil(Math.random() * maxRolls[diceName]) as dSize
}
