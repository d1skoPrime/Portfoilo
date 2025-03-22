'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from './UI/Button'

type Props = {}

export default function NavBar({}: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const connecttoeachother = () => {
		window.open(
			'https://www.instagram.com/itsroman_25',
			'_blank',
			'noopener,noreferrer'
		)
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className="fixed top-0 left-0 right-0 z-50 bg-primary h-auto md:h-20 w-full shadow-md">
			<div className="container mx-auto px-4 flex items-center justify-between h-full">
				{/* Logo */}
				<div className="py-4 md:py-0 text-2xl text-white">
					<span className="font-bold">Roman</span>
					<span className="font-bold text-sm">.com</span>
				</div>

				{/* Mobile menu button */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-white p-2">
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Navigation */}
				<div
					className={`${
						isMenuOpen ? 'flex' : 'hidden'
					} md:flex flex-col md:flex-row items-center absolute md:static left-0 top-full md:top-auto bg-primary md:bg-transparent w-full md:w-auto`}
				>
					<ul className="flex flex-col md:flex-row text-gray-400 space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 w-full md:w-auto text-center">
						<li>
							<a
								href="#home"
								className="block relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#fca311] after:scale-x-0 after:transition-transform after:duration-400 after:ease-in-out hover:after:scale-x-100"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#services"
								className="block relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#fca311] after:scale-x-0 after:transition-transform after:duration-400 after:ease-in-out hover:after:scale-x-100"
							>
								Services
							</a>
						</li>
						<li>
							<a
								href="#feedback"
								className="block relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#fca311] after:scale-x-0 after:transition-transform after:duration-400 after:ease-in-out hover:after:scale-x-100"
							>
								Testimonials
							</a>
						</li>
						<li>
							<a
								href="#footer"
								className="block relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#fca311] after:scale-x-0 after:transition-transform after:duration-400 after:ease-in-out hover:after:scale-x-100"
							>
								Contact Info
							</a>
						</li>
					</ul>

					{/* Mobile button (shown only when menu is open) */}
					<div className="md:hidden w-full py-4 flex justify-center">
						<Button onClick={connecttoeachother}>LET'S TALK</Button>
					</div>
				</div>

				{/* Button (desktop) */}
				<div className="hidden md:block">
					<Button onClick={connecttoeachother}>LET'S TALK</Button>
				</div>
			</div>
		</div>
	)
}
