import './App.css'
import FiveBlock from './components/FiveBlock/FiveBlock'
import FourthBlock from './components/FourthBlock/FourthBlock'
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock'
import SecondBlock from './components/SecondBlock/SecondBlock'
import ThirdBlock from './components/ThirdBlock/ThirdBlock'
import SixSection from './page/SixSection'
import SevenSection from './page/SevenSection'
import EightSection from './page/EightSection'
import NineSection from './page/NineSection'
import FooterSection from './page/FooterSection'

function App() {
	return (
		<>
			<Header />
			<MainBlock />
			<SecondBlock />
			<ThirdBlock/>
			<FourthBlock/>
			<FiveBlock/>
			<SixSection/>
			<SevenSection/>
			<EightSection/>
			<NineSection/>
			<FooterSection/>
		</>
	)
}

export default App
