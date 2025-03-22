const Home = () => {
	const githubrepo = () => {
		window.open('https://github.com/d1skoPrime', '_blank')
	}

	return (
		<div
			className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 md:px-10 pt-24 md:pt-0"
			id="home"
		>
			<div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 py-12">
				{/* left-handed side with text */}
				<div className="text-center lg:text-left lg:w-1/2">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
						Hello,{' '}
						<span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
							I'm Roman,
						</span>{' '}
						<br />
						full-stack developer <br /> based in USA.
					</h1>
					<p className="text-gray-500 mt-4 text-base md:text-lg px-4 lg:px-0">
						I am a growing developer with experience of 2+ year in Software
						Development. During this 1 year I have created lots of websites.
					</p>
					{/* Buttons */}
					<div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
						<button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold rounded-full shadow-lg hover:opacity-90 transition w-full sm:w-auto">
							GET IN TOUCH
						</button>
						<button
							className="cursor-pointer px-6 py-3 border-2 border-black text-black font-bold rounded-full shadow-lg hover:bg-black hover:text-white transition w-full sm:w-auto"
							onClick={githubrepo}
						>
							VIEW ALL WORKS
						</button>
					</div>
				</div>

				{/* Right-hand side with photo */}
				<div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
					<div className="relative">
						<img
							src="/logo1.svg"
							alt="Profile"
							className="w-56 h-56 md:w-172 md:h-72 skew-y-12 -skew-x-12"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
