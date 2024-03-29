import type { ReactNode } from 'react'
import './App.css'
import { FlexGap } from './components/FlexGap/FlexGap'
import { RollResult } from './components/RollResult/RollResult'
import { RollTableSet } from './components/RollTableSet/RollTableSet'
import { TravelCalculator } from './components/TravelCalculator/TravelCalculator'
import {
	activityBeast,
	activityHumanoid,
	creatures,
} from './data/Arctic-encounters'
import {
	age,
	attractiveness,
	eye,
	hair,
	height,
	personality,
	quirks,
	races,
	sex,
	weight,
} from './data/npcs'
import { attitude, voiceEffects, voiceStyle } from './data/npcs/voice'
import { chawingaCharms, curses, itemBreakage } from './data/other'
import {
	dangerousTravelEncounters,
	safeTravelEncounters,
	tavernEncounters,
	townEncounters,
} from './data/Predefined-Encounters'
import {
	WildernessTerrain,
	Landmarks,
	MountainousTerrain,
} from './data/travel/Terrain'
import { storms, weather, weatherDuration } from './data/weather'
import { divineNat20, wildMagicSurge } from './data/wild-magic'

function App() {
	return (
		<div className="App">
			<div className="App-inner">
				<h1>Random Table Rollers</h1>
				<FlexGap direction="vertical">
					<RollTableSet heading="NPC voice">
						<RollResult label="Voice style" tableData={voiceStyle} />
						<RollResult
							label="Voice effect"
							tableData={voiceEffects}
							dSize="d100"
						/>
						<RollResult label="Attitude" tableData={attitude} />
					</RollTableSet>
					<RollTableSet heading="NPC appearance">
						<tr>
							<td colSpan={5}>You meet a...</td>
						</tr>
						<RollResult label="Age (appearance)" tableData={age} dSize="d100" />
						<RollResult label="Sex" tableData={sex} />
						<RollResult label="Race" tableData={races} dSize="d100" />
						<tr>
							<td colSpan={5}>who is...</td>
						</tr>
						<RollResult label="Height" tableData={height} />
						<tr>
							<td colSpan={5}>and</td>
						</tr>
						<RollResult label="Weight" tableData={weight} dSize="d100" />

						<tr>
							<td colSpan={5}>with...</td>
						</tr>
						<RollResult label="Hair length" tableData={hair.length} />
						<RollResult label="Hair color" tableData={hair.color} />
						<tr>
							<td colSpan={5}>hair and...</td>
						</tr>
						<RollResult label="Eye color" tableData={eye.color} />
						<tr>
							<td colSpan={5}>eyes who is...</td>
						</tr>
						<RollResult
							label="Attractiveness"
							tableData={attractiveness}
							dSize="d10"
						/>
					</RollTableSet>

					<RollTableSet heading="NPC Personality">
						<RollResult
							label="Personality trait"
							tableData={personality}
							dSize={'d100'}
						/>
						<RollResult label="Quirk" tableData={quirks} dSize={'d100'} />
					</RollTableSet>

					<RollTableSet heading="Travel and encounters">
						<RollResult
							label="Wilderness Terrain"
							tableData={WildernessTerrain}
							dSize="d20"
						/>
						<RollResult
							label="Mountainous Terrain"
							tableData={MountainousTerrain}
							dSize="d20"
						/>
						<RollResult label="Landmark" tableData={Landmarks} />
						<RollResult
							label="Any travel encounter"
							tableData={[
								...dangerousTravelEncounters,
								...safeTravelEncounters,
							]}
						/>
						<RollResult
							label="Dangerous travel encounters"
							tableData={dangerousTravelEncounters}
						/>
						<RollResult
							label="Safe travel encounters"
							tableData={safeTravelEncounters}
						/>
						<RollResult
							label="Town encounters"
							tableData={townEncounters}
							dSize="d12"
						/>
						<RollResult
							label="Tavern encounters"
							tableData={tavernEncounters}
							dSize="d12"
						/>
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

					<RollTableSet heading="Wild magic surges">
						<RollResult<ReactNode>
							label="Wild Magic Surge (nat 1 when casting magic)"
							tableData={wildMagicSurge}
						/>
						<RollResult<ReactNode>
							label="Divine burst (divine nat 20)"
							tableData={divineNat20}
							dSize="d100"
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
						<RollResult label="Chawinga Charms" tableData={chawingaCharms} />
						<RollResult
							label="Item breakage"
							tableData={itemBreakage}
							dSize="d10"
						/>
						<RollResult label="Curses" tableData={curses} dSize="d100" />
					</RollTableSet>

					{/* This is overcomplicated, just have mounts go twice as fast */}
					<TravelCalculator />

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
