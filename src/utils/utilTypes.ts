import type { ReactNode } from 'react'

/** Numbers available in a d100 */
export type d100 =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30
	| 31
	| 32
	| 33
	| 34
	| 35
	| 36
	| 37
	| 38
	| 39
	| 40
	| 41
	| 42
	| 43
	| 44
	| 45
	| 46
	| 47
	| 48
	| 49
	| 50
	| 51
	| 52
	| 53
	| 54
	| 55
	| 56
	| 57
	| 58
	| 59
	| 60
	| 61
	| 62
	| 63
	| 64
	| 65
	| 66
	| 67
	| 68
	| 69
	| 70
	| 71
	| 72
	| 73
	| 74
	| 75
	| 76
	| 77
	| 78
	| 79
	| 80
	| 81
	| 82
	| 83
	| 84
	| 85
	| 86
	| 87
	| 88
	| 89
	| 90
	| 91
	| 92
	| 93
	| 94
	| 95
	| 96
	| 97
	| 98
	| 99
	| 100
/** Numbers available in a d20 */
export type d20 =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
/** Numbers available in a d12 */
export type d12 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
/** Numbers available in a d10 */
export type d10 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
/** Numbers available in a d8 */
export type d8 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
/** Numbers available in a d6 */
export type d6 = 1 | 2 | 3 | 4 | 5 | 6
/** Numbers available in a d4 */
export type d4 = 1 | 2 | 3 | 4

/** all available dice names strings */
export type diceName = 'd100' | 'd20' | 'd12' | 'd10' | 'd8' | 'd6' | 'd4'

/** The typical structure of a roll table row */
export interface Roll<dSize = d100> {
	/** Single Number or a Min and Max range for a the die roll */
	roll: dSize | [dSize, dSize]
	/** The result for when this number is rolled, passing a function will recalculate the value on every render */
	value: ReactNode | ((value?: any) => ReactNode)
	actualRoll?: dSize
}

export type RollRow = Roll | ReactNode

/** The typical structure of a full roll table */
export type RollTableData<dSize = d100> = Array<Roll<dSize>>
