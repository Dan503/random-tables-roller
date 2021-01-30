import logo from './logo.svg'
import './App.css'
import { RollResult } from './components/RollResult/RollResult'
import { races } from './data'

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<RollResult label="Race" tableData={races} />
			</div>
		</div>
	)
}

export default App
