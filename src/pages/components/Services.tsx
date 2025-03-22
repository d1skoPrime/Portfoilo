const Services = () => {
	const getintoch = () => {
		window.open('https://www.instagram.com/itsroman_25', '_blank')
	}
	return (
		<div
			className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-10 py-16"
			id="services"
		>
			<div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
				{/* left-handed side with text */}
				<div className="text-center lg:text-left lg:w-1/2">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
						Services{' '}
						<span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
							I <br />
							Am Providing,
						</span>{' '}
					</h1>
					<p className="text-gray-500 mt-4 text-base md:text-lg px-4 lg:px-0">
						I provides couple services. First is UI development (front-end) -
						everything that user can see. Back-end where is the logic of
						program or website and etc.
					</p>
					{/* Buttons */}
					<div className="mt-6 flex justify-center lg:justify-start">
						<button
							className="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold rounded-full shadow-lg hover:opacity-90 transition w-full sm:w-auto"
							onClick={getintoch}
						>
							GET IN TOUCH
						</button>
					</div>
				</div>

				{/* Right-hand side with services */}
				<div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
					<div className="w-full max-w-md">
						<div className="border-b-2 my-3 border-solid border-gray-600 w-full"></div>
						<h1 className="text-2xl md:text-4xl font-bold text-center">
							Web Development
						</h1>
						<div className="border-b-2 my-3 border-solid border-gray-600 w-full"></div>
						<h1 className="text-2xl md:text-4xl font-bold text-center">
							Back-End Development
						</h1>
						<div className="border-b-2 my-3 border-solid border-gray-600 w-full"></div>
						<h1 className="text-2xl md:text-4xl font-bold text-center">
							FrontEnd Development
						</h1>
						<div className="border-b-2 my-3 border-solid border-gray-600 w-full"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
