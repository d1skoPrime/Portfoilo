const MarqueDone = () => {
	return (
		<div className="py-12 w-full bg-black">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-30">
					<div className="text-xl font-medium text-white flex items-center flex-col justify-center">
						<h1 className="bg-gradient-to-r uppercase from-purple-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
							Projects Done
						</h1>
						<p className="font-bold text-4xl md:text-6xl text-center">15+</p>
					</div>

					<div className="text-xl text-center font-medium text-white">
						<h1 className="bg-gradient-to-r uppercase from-purple-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
							Experience
						</h1>
						<p className="text-4xl md:text-6xl text-center font-bold">
							1.5 Years
						</p>
					</div>

					<div className="text-xl font-medium text-white">
						<h1 className="bg-gradient-to-r uppercase from-purple-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
							CLIENTS SATISFACTION
						</h1>
						<p className="text-4xl md:text-6xl text-center font-bold">98%</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MarqueDone
