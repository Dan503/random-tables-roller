import { generateCarryCapacity, CarryCapacity } from './CarryCapacity'

test('20 strength - large - no sled', () => {
	const expectation: CarryCapacity = {
		comfortableLimit: 200,
		encumberedLimit: 400,
		heavilyEncumberedLimit: 600
	}
	expect(generateCarryCapacity({ strengthScore: 20, isLarge: true, isSled: false })).toEqual(expectation)
})

test('20 strength - medium - no sled', () => {
	const expectation: CarryCapacity = {
		comfortableLimit: 100,
		encumberedLimit: 200,
		heavilyEncumberedLimit: 300
	}
	expect(generateCarryCapacity({ strengthScore: 20, isLarge: false, isSled: false })).toEqual(expectation)
})

test('20 strength - large - with sled', () => {
	const expectation: CarryCapacity = {
		comfortableLimit: 400,
		encumberedLimit: 800,
		heavilyEncumberedLimit: 1200
	}
	expect(generateCarryCapacity({ strengthScore: 20, isLarge: true, isSled: true })).toEqual(expectation)
})

test('16 strength - large - no sled', () => {
	const expectation: CarryCapacity = {
		comfortableLimit: 160,
		encumberedLimit: 320,
		heavilyEncumberedLimit: 480
	}
	expect(generateCarryCapacity({ strengthScore: 16, isLarge: true, isSled: false })).toEqual(expectation)
})

test('16 strength - medium - no sled', () => {
	const expectation: CarryCapacity = {
		comfortableLimit: 80,
		encumberedLimit: 160,
		heavilyEncumberedLimit: 240
	}
	expect(generateCarryCapacity({ strengthScore: 16, isLarge: false, isSled: false })).toEqual(expectation)
})

test('16 strength - large - with sled', () => {
	const expectation: CarryCapacity = {
		comfortableLimit: 320,
		encumberedLimit: 640,
		heavilyEncumberedLimit: 960
	}
	expect(generateCarryCapacity({ strengthScore: 16, isLarge: true, isSled: true })).toEqual(expectation)
})
