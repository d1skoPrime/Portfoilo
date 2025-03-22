import Button from '../components/UI/Button'

const About = () => {
	const aboutMe = [
		{
			id: 1,
			picture: '/mypic.jpg',
			Name: 'Roman',
			mylanguages:
				'Russian, English and a little bit of Spanish (of Latin America)',
			proglanguages: 'Python, JavaScript, HTML, CSS, Tailwind 4',
			frameworks: 'React.JS, NestJs, ',
			info: "Hello! I hope by reading this information you can learn some things about me! So, I'm 15 years old, I was born in Russia and in 2024 I moved to US. Since 12 or 13 years old I'd been starting to learn coding. My first programming language was Python (Took courses 'bout it). In age of 14 years old, I started learning HTML, CSS AND JAVASCRIPT. After 3 or 4 month of learning these languages, I decided to start learning framework - React.JS. In that time, I didn't decide what to choose either Front-End or Back-End. In early's fifteen I started learning Back-End. Now I can do both of frontend and backend. Now my goal is to gain an experience of developing fullstack websites. I already have started developing my own social media, however I don't know if I finish it. That's it! If you want to communicate with me, click Links below it!",
		},
	]

	return (
		<div className="min-h-screen w-full bg-gray-300 flex justify-center items-center p-4 md:p-8">
			<div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl border-2 rounded-lg border-red-500 shadow-black shadow-2xl overflow-y-auto max-h-[90vh]">
				{aboutMe.map((item) => (
					<div
						className="relative px-3 sm:px-5 md:px-7 py-4 flex flex-col justify-center items-center"
						key={item.id}
					>
						<div>
							<img
								src={item.picture || '/placeholder.svg'}
								onClick={() => {
									window.open(item.picture, '_blank')
								}}
								alt="Me"
								className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 rounded-full border-green-500 cursor-pointer object-cover"
							/>
						</div>

						<div className="w-full flex justify-center pt-3 sm:pt-5 flex-col">
							<h1 className="text-black font-bold text-xl sm:text-2xl text-center">
								My Name:{' '}
								<span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
									{item.Name}
								</span>
							</h1>

							<div className="space-y-1 sm:space-y-2 mt-2">
								<h2 className="text-center font-bold text-sm sm:text-base md:text-lg">
									Languages I speak:{' '}
									<span className="text-pink-600 break-words">
										{item.mylanguages}
									</span>
								</h2>
								<h2 className="text-center font-bold text-sm sm:text-base md:text-lg">
									Programming Languages:{' '}
									<span className="text-green-700 break-words">
										{item.proglanguages}
									</span>
								</h2>
								<h2 className="text-center font-bold text-sm sm:text-base md:text-lg">
									Frameworks:{' '}
									<span className="text-orange-700 break-words">
										{item.frameworks}
									</span>
								</h2>
							</div>
						</div>

						<div className="flex justify-center pt-3 sm:pt-5 flex-col w-full">
							<h2 className="text-center font-bold text-black text-xl sm:text-2xl md:text-3xl pb-2 sm:pb-4">
								About Me:
							</h2>
							<p className="text-sm sm:text-base md:text-lg bg-gradient-to-r from-green-500 via-black to-purple-500 text-transparent bg-clip-text font-semibold px-1 sm:px-2 md:px-4">
								{item.info}
							</p>
						</div>

						<div className="pt-3 sm:pt-5">
							<Button
								onClick={() => {
									window.location.href = '/links'
								}}
							>
								Links
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default About
