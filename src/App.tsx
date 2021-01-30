import './App.css'
import { FlexGap } from './components/FlexGap/FlexGap'
import { RollResult } from './components/RollResult/RollResult'
import { races, sex } from './data'

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<h1>Random Table Rollers</h1>
				<h2>NPC Characters</h2>
				<FlexGap direction="vertical">
					<RollResult label="Race" tableData={races} dSize={'d100'} />
					<RollResult label="Sex" tableData={sex} dSize={'d4'} />
				</FlexGap>
			</div>
		</div>
	)
}

export default App
