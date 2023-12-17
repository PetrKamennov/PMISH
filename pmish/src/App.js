import './App.css'
import FiveBlock from './components/FiveBlock/FiveBlock'
import FourthBlock from './components/FourthBlock/FourthBlock'
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock'
import SecondBlock from './components/SecondBlock/SecondBlock'
import ThirdBlock from './components/ThirdBlock/ThirdBlock'

function App() {
	return (
		<>
			<Header />
			<MainBlock />
			<SecondBlock />
			<ThirdBlock/>
			<FourthBlock/>
			<FiveBlock/>
		</>
	)
}

export default App
