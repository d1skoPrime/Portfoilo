import Button from '../components/UI/Button'
import SpinnerEffect from './SpinnerEffect'

const ComingSoon = () => {
	return (
		<div className="min-h-screen w-full flex justify-center items-center flex-col bg-gray-300 px-4 py-8">
			<div className="pb-6 md:pb-10">
				<img
					src="/icon.png"
					alt="Icon"
					className="w-40 h-40 md:w-70 md:h-70 object-contain"
				/>
			</div>
			<div className="text-center">
				<div className="flex items-center justify-center">
					<h1 className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text text-3xl md:text-5xl font-bold">
						Coming Soon
					</h1>
					<div className="ml-2 md:ml-4">
						<SpinnerEffect />
					</div>
				</div>

				<div className="flex justify-center items-center mt-8">
					<Button
						onClick={() => {
							window.location.href = '/'
						}}
					>
						Go Back
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ComingSoon
