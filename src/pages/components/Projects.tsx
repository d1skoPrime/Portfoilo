'use client'

import Button from './UI/Button'

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'Bakery Website',
			description:
				'The Bakery Website, where user can send an email with specific order. And who makes cakes will get that order on his email.',
			stack: 'React Js, Express Js, Tailwind 4, Nodemailer',
			status: 'Completed',
			link: 'https://github.com/d1skoPrime/bakery-client',
		},
		{
			id: 2,
			title: 'Social Media',
			description:
				'It calls AnonGram, it is social media as Instagram, however it has an option to send messages anonymously.',
			stack: 'React Js, NestJs, Postgresql, JWT AUTH, Tailwind 4',
			status: 'In Developing',
			link: 'https://github.com/d1skoPrime/SocialMedia-BackEnd',
		},
		{
			id: 3,
			title: 'Coming Soon...',
			description:
				"I'll add more my other projects here as soon as I've got 'em finished",
			stack: 'Coming Soon',
			status: 'In Developing',
			link: '/coming-soon',
		},
	]

	return (
		<div className="pt-10 w-full bg-gray-100 px-4 md:px-6 lg:px-10 pb-12">
			<div className="flex flex-col">
				<div className="pb-5 md:pb-8 flex flex-col w-full justify-center items-center">
					<h1 className="font-medium text-4xl md:text-6xl text-center">
						My Projects
					</h1>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((item) => (
						<div
							className="bg-gray-900/80 rounded-xl flex flex-col justify-center items-center gap-3 px-4 md:px-10 py-6"
							key={item.id}
						>
							<h1 className="text-white font-bold text-xl md:text-2xl text-center">
								<span className="text-red-500 font-bold">Title:</span>
								{''} {item.title}
							</h1>
							<p className="text-white text-sm md:text-base text-center">
								<span className="text-red-500 font-bold">
									Description:
								</span>{' '}
								{item.description}
							</p>

							<h2 className="text-white font-medium text-sm md:text-base text-center">
								<span className="text-red-500 font-bold">
									Technology Stack:
								</span>{' '}
								{item.stack}
							</h2>

							<h2 className="text-red-500 font-bold text-sm md:text-base">
								Status:{' '}
								<span className="text-white font-bold">
									{item.status}
								</span>
							</h2>

							<Button
								onClick={() => {
									window.open(item.link, '_blank')
								}}
							>
								Visit
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
