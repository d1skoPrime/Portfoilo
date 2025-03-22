import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as MRouter, Route, Routes } from 'react-router'
import App from './App'
import './global/styles/index.css'
import About from './pages/AboutMe/About.tsx'
import ComingSoon from './pages/ComingSoon/ComingSoon.tsx'
import Links from './pages/Links/Links.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MRouter>
			<Routes>
				<Route path="" element={<App />} />
				<Route path="/coming-soon" element={<ComingSoon />} />
				<Route path="/about-me" element={<About />} />
				<Route path="/links" element={<Links />} />
			</Routes>
		</MRouter>
	</StrictMode>
)
