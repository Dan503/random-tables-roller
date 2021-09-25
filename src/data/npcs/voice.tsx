import { RollTableData } from 'src/utils/utilTypes'

export const voiceStyle = [
	<>
		<p>
			<b>Dabbing</b>
		</p>
		<ul style={{ textAlign: 'left' }}>
			<li>Light</li>
			<li>Direct</li>
			<li>Sudden</li>
		</ul>
	</>,
	<>
		<p>
			<b>Gliding</b>
		</p>
		<ul style={{ textAlign: 'left' }}>
			<li>Light</li>
			<li>Direct</li>
			<li>Sustained</li>
		</ul>
	</>,
	<>
		<p>
			<b>Flicking</b>
		</p>
		<ul style={{ textAlign: 'left' }}>
			<li>Light</li>
			<li>Indirect</li>
			<li>Sudden</li>
		</ul>
	</>,
	<>
		<p>
			<b>Floating</b>
		</p>
		<ul style={{ textAlign: 'left' }}>
			<li>Light</li>
			<li>Indirect</li>
			<li>Sustained</li>
		</ul>
	</>,
	<>
		<p>
			<b>Thrusting</b>
		</p>
		<ul style={{ textAlign: 'left' }}>
			<li>Strong</li>
			<li>Direct</li>
			<li>Sudden</li>
		</ul>
	</>,
	<>
		<p>
			<b>Pressing</b>
		</p>
		<ul style={{ textAlign: 'left' }}>
			<li>Strong</li>
			<li>Direct</li>
			<li>Sustained</li>
		</ul>
	</>,
	<>
		<p>
			<b>Slashing</b>
		</p>
		<ul style={{ textAlign: 'left' }}>
			<li>Strong</li>
			<li>Indirect</li>
			<li>Sudden</li>
		</ul>
	</>,
	<>
		<p>
			<b>Wringing</b>
		</p>
		<ul style={{ textAlign: 'left' }}>
			<li>Strong</li>
			<li>Indirect</li>
			<li>Sustained</li>
		</ul>
	</>,
]

export const attitude = ['Aggressive', 'Depressed', 'Disinterested', 'Friendly']

export const voiceEffects: RollTableData = [
	{
		roll: [1, 50],
		value: 'Normal',
	},
	{
		roll: [51, 55],
		value: 'Nasal',
	},
	{
		roll: [56, 60],
		value: 'Throaty (dumb)',
	},
	{
		roll: [61, 65],
		value: 'Gravelly',
	},
	{
		roll: [66, 70],
		value: 'Breathy',
	},
	{
		roll: [71, 75],
		value: 'Ultra masculine',
	},
	{
		roll: [76, 80],
		value: 'Ultra feminine',
	},
	{
		roll: [81, 85],
		value: 'Lisp (pronounce "S" as "TH")',
	},
	{
		roll: [86, 90],
		value: 'Pronounce "R" and "L" as "W"',
	},
	{
		roll: [91, 95],
		value: 'Shout everything',
	},
	{
		roll: [96, 100],
		value: 'Whisper everything',
	},
]
