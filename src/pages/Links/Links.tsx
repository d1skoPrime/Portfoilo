import Button from '../components/UI/Button'

const Links = () => {
	const x: string = '/'
	const links = [
		{
			id: 1,
			url: 'https://www.youtube.com/@d1skoPrime',
			title: 'My YouTube',
		},
		{
			id: 2,
			url: 'https://www.donationalerts.com/r/d1skoprime',
			title: 'Support Me',
		},
		{
			id: 3,
			url: 'https://www.instagram.com/itsroman_25',
			title: 'Contact with me',
		},
		{
			id: 4,
			url: 'https://github.com/d1skoPrime',
			title: 'My GitHub',
		},
	]

	return (
		<div className="min-h-screen w-full flex justify-center items-center bg-gray-100 p-4">
			<div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 border-2 border-green-500">
				<h2 className="text-2xl font-bold text-center mb-6">My Links</h2>

				<div className="flex flex-col space-y-3">
					{links.map((item) => (
						<a
							key={item.id}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-gray-400 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors duration-300 flex items-center justify-center"
						>
							{item.title}
						</a>
					))}
				</div>
			</div>
			<div className="absolute bottom-15">
				<Button
					onClick={() => {
						window.location.href = x
					}}
				>
					Go Back
				</Button>
			</div>
		</div>
	)
}

export default Links
