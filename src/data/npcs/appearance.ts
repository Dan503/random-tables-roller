import { d10, d20, RollTableData } from "src/utils/utilTypes"

export const hair = {
	color: [
		'black',
		'dark-brown',
		'light-brown',
		'dark-blond',
		'blond',
		'grey',
		'white',
		'pink',
		'blue',
		'green'
	],
	length: [
		'bald',
		'short',
		'shoulder-length',
		'long hip-length',
		'pony-tail',
		'pig-tails'
	]
}

export const eye = {
	color: [
		'light brown',
		'dark brown',
		'hazel',
		'green',
		'blue',
		'grey',
	]
}

export const height = [
	'short',
	'of average height',
	'tall'
]

export const weight: RollTableData = [
	{
		roll: 1,
		value: 'anorexic'
	},
	{
		roll: [2, 24],
		value: 'thin'
	},
	{
		roll: [25, 49],
		value: 'slender'
	},
	{
		roll: [50, 75],
		value: 'of average weight'
	},
	{
		roll: [76, 95],
		value: 'a bit overweight'
	},
	{
		roll: [96, 100],
		value: 'obese'
	},
	{
		roll: 100,
		value: 'morbidly obese'
	},
]

export const attractiveness: RollTableData<d10> = [
	{
		roll: 1,
		value: 'disgusting to look at'
	},
	{
		roll: [2, 3],
		value: 'rather unattractive'
	},
	{
		roll: [4, 6],
		value: 'average in looks'
	},
	{
		roll: [7, 9],
		value: 'rather attractive',
	},
	{
		roll: 10,
		value: 'insanely attractive'
	}
]
