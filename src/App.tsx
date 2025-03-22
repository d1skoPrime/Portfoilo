import './global/styles/index.css'
import ClientsFeedBack from './pages/components/ClientsFeedBack'
import Footer from './pages/components/Footer'
import Home from './pages/components/Home'
import Idea from './pages/components/Idea'
import Marque from './pages/components/Marque'
import MarqueDone from './pages/components/MarqueDone'
import NavBar from './pages/components/NavBar'
import Projects from './pages/components/Projects'
import Services from './pages/components/Services'

function App() {
	return (
		<div className="overflow-hidden">
			<NavBar />
			<Home />
			<Marque />
			<Services />
			<MarqueDone />
			<Projects />
			<ClientsFeedBack />
			<Idea />
			<Footer />
		</div>

		//TODO: PROJECTS PAGE and add some projects from github! And add MY Pic in home page
	)
}

export default App
