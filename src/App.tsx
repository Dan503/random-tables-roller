import './App.css'
import { FlexGap } from './components/FlexGap/FlexGap'
import { RollResult } from './components/RollResult/RollResult'
import { personality, quirks, races, sex } from './data/npcs'

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<h1>Random Table Rollers</h1>
				<h2>NPC Characters</h2>
				<FlexGap direction="vertical">
					<RollResult label="Race" tableData={races} dSize={'d100'} />
					<RollResult label="Sex" tableData={sex} dSize={'d4'} />
					<p>
						Use the "Fantasy Name Generator" app to generate character names.
					</p>
					<RollResult
						label="Personality trait"
						tableData={personality}
						dSize={'d100'}
					/>
					<RollResult label="Quirk" tableData={quirks} dSize={'d100'} />
					<RollResult label="Age (appearance)" dSize={'d100'} />
					<p>
						Personality traits and Quirks from{' '}
						<a href="https://www.dmsguild.com/product/317982/PC-and-NPC-Creation-Tables">
							PC and NPC Creation Tables
						</a>{' '}
						on DMs Guild
					</p>
				</FlexGap>
			</div>
		</div>
	)
}

export default App
