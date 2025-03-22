const Idea = () => {
	const connecttoeachother = () => {
		window.open(
			'https://www.instagram.com/itsroman_25',
			'_blank',
			'noopener,noreferrer'
		)
	}

	return (
		<div className="w-full bg-black py-12 px-4">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
						<h1 className="uppercase">
							Have An Awesome Project? {''}
							<br className="hidden md:block" />
							Idea? Let's Discuss
						</h1>
					</div>

					<div>
						<button
							className="text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 px-5 py-3 font-bold uppercase rounded-full transition duration-700 cursor-pointer hover:opacity-70 w-full md:w-auto"
							onClick={connecttoeachother}
						>
							START PROJECT
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Idea
