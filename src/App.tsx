import './App.css'
import { RollResult } from './components/RollResult/RollResult'
import { races } from './data'

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<h1>Random Table Rollers</h1>
				<h2>NPC Characters</h2>
				<RollResult label="Race" tableData={races} dSize={'d100'} />
			</div>
		</div>
	)
}

export default App
