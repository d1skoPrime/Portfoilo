import { Github, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
	return (
		<footer className="w-full bg-gray-100 py-10 px-6">
			<div
				className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
				id="footer"
			>
				{/* Left side with text */}
				<div className="max-w-lg text-center md:text-left">
					<h1 className="font-bold text-2xl">
						Roman.<span className="text-sm font-bold">com</span>
					</h1>
					<p className="text-gray-600 mt-2">
						I am developing software developer. I have an experience in Web
						Development about 2 years. Have knowledge how to build cool
						website.
					</p>
				</div>

				<div className="flex flex-col items-center md:items-end space-y-4">
					<nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-600 font-medium">
						<a href="#" className="hover:text-black transition">
							Home
						</a>
						<a href="/about-me" className="hover:text-black transition">
							About Me
						</a>
						<a href="links" className="hover:text-black transition">
							Contact
						</a>
					</nav>

					<div className="flex space-x-4">
						<a
							href="https://github.com/d1skoPrime"
							target="_blank"
							className="p-2"
						>
							<div className="p-2 bg-black rounded-full">
								<Github className="w-5 h-5 text-gray-100" />
							</div>
						</a>

						<a
							href="https://www.instagram.com/itsroman_25"
							target="_blank"
							className="p-2"
						>
							<div className="p-2 border-transparent rounded-full bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500">
								<Instagram className="w-5 h-5 text-gray-100" />
							</div>
						</a>
						<a
							href="https://www.youtube.com/@d1skoPrime"
							target="_blank"
							className="p-2"
						>
							<div className="p-2 border-transparent rounded-full  bg-red-600">
								<Youtube className="w-5 h-5 text-gray-100" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
