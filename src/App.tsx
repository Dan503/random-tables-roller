import { ReactNode } from 'react'
import './App.css'
import { FlexGap } from './components/FlexGap/FlexGap'
import { RollResult } from './components/RollResult/RollResult'
import { RollTableSet } from './components/RollTableSet/RollTableSet'
import { TravelCalculator } from './components/TravelCalculator/TravelCalculator'
import {
	creatures,
	activityBeast,
	activityHumanoid,
} from './data/Arctic-encounters'
import { personality, quirks, races, sex, age } from './data/npcs'
import { curses } from './data/other'
import { storms, weather, weatherDuration } from './data/weather'
import { Roll } from './utils/utilTypes'

function App() {
	return (
		<div className="App">
			<div className="App-inner">
				<h1>Random Table Rollers</h1>
				<FlexGap direction="vertical">
					<TravelCalculator />
					<RollTableSet heading="NPC Characters">
						<RollResult<Roll> label="Race" tableData={races} dSize={'d100'} />
						<RollResult<Roll> label="Sex" tableData={sex} dSize={'d4'} />
						<tr>
							<td colSpan={5}>
								<p>
									Use the "Fantasy Name Generator" app to generate character
									names.
								</p>
							</td>
						</tr>
						<RollResult
							label="Personality trait"
							tableData={personality}
							dSize={'d100'}
						/>
						<RollResult label="Quirk" tableData={quirks} dSize={'d100'} />
						<RollResult label="Age (appearance)" tableData={age} dSize="d100" />
					</RollTableSet>

					<RollTableSet heading="Arctic encounter generator">
						<RollResult<ReactNode>
							label="Creature(s)"
							tableData={creatures}
							dSize={'d20'}
						/>
						<RollResult<ReactNode>
							label="Activity (Beast)"
							tableData={activityBeast}
							dSize={'d12'}
						/>
						<RollResult<ReactNode>
							label="Activity (Humanoid)"
							tableData={activityHumanoid}
							dSize={'d12'}
						/>
					</RollTableSet>

					<RollTableSet heading="Weather & Storms">
						<RollResult label="Weather" tableData={weather} dSize="d20" />
						<RollResult label="Storm" tableData={storms} dSize="d4" />
						<RollResult<ReactNode>
							label="Duration"
							tableData={weatherDuration}
							dSize="d8"
						/>
					</RollTableSet>

					<RollTableSet heading="Other aspects">
						<RollResult label="Curses" tableData={curses} dSize={'d100'} />
					</RollTableSet>

					<p>
						Personality traits and Quirks from{' '}
						<a href="https://www.dmsguild.com/product/317982/PC-and-NPC-Creation-Tables">
							PC and NPC Creation Tables
						</a>
					</p>
					<p>
						Arctic activities and weather table from{' '}
						<a href="https://www.dmsguild.com/product/332576/Arctic-Survival-House-Rules-for-Icewind-Dale">
							Arctic Survival House Rules for Icewind Dale
						</a>
					</p>
					<p>
						Curses from{' '}
						<a href="http://dndspeak.com/2017/12/100-curses/">D&D speak.com</a>.
					</p>
				</FlexGap>
			</div>
		</div>
	)
}

export default App
