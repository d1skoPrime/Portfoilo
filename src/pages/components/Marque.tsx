const Marque = () => {
	return (
		<div className="h-auto md:h-32 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
			<div className="bg-gray-100 shadow-black shadow-lg transform -skew-y-2 w-full py-6 md:py-0 md:h-35">
				<div className="h-full flex flex-col md:flex-row justify-center items-center text-xl md:text-3xl font-bold overflow-hidden">
					<div className="whitespace-nowrap animate-marquee">
						<span className="mx-4">Web Design ✨</span>
						<span className="mx-4">Software Development ✨</span>
						<span className="mx-4">Web Development ✨</span>
						<span className="mx-4">Back-End Development ✨</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Marque
