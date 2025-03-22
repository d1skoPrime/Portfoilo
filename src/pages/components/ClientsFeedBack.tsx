'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, User } from 'lucide-react'
import { useState } from 'react'

const ClientsFeedBack = () => {
	const feedbacks = [
		{
			id: 1,
			name: 'David M.',
			company: 'Startup Founder',
			feedback:
				'Roman’s work is impressive! The UI is clean, responsive, and well-optimized. The animations make the experience smooth and professional. Highly recommend his skills!',
		},
		{
			id: 2,
			name: 'Sophia L.',
			company: 'Web Designer',
			feedback:
				'I needed a feedback section for my website, and Roman delivered beyond expectations. His code was easy to integrate, and the transitions felt seamless. Great attention to detail!',
		},
		{
			id: 3,
			name: 'Michael R.',
			company: 'Client',
			feedback:
				'Roman understands not just how to build things, but how to make them work efficiently. His use of React, TypeScript, and animations gave my project a polished look.',
		},
		{
			id: 4,
			name: 'Emily J.',
			company: 'Client',
			feedback:
				'What stood out the most was his ability to write clean, maintainable code. The project was delivered on time, and every component was optimized for performance.',
		},
		{
			id: 5,
			name: 'Chris T.',
			company: 'Client',
			feedback:
				'Working with Roman was a smooth experience. He quickly grasped my requirements and provided a functional, elegant solution. Looking forward to more collaborations!',
		},
		{
			id: 6,
			name: 'Owner Roman',
			company: 'Owner',
			feedback:
				"I have much more client's feedback, but I am not going to post 'em here 😊,",
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () =>
		setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
	const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % feedbacks.length)

	return (
		<div className="w-full bg-gray-100 py-16 px-4" id="feedback">
			<h1 className="uppercase font-bold text-3xl md:text-5xl mb-10 text-center">
				Explore my clients feedback
			</h1>

			<div className="relative w-full max-w-3xl mx-auto flex items-center">
				{/* Left button */}
				<button
					onClick={prevSlide}
					className="absolute left-0 z-10 p-2 md:p-3 bg-white shadow-md rounded-full"
					aria-label="Previous feedback"
				>
					<ChevronLeft size={24} />
				</button>

				{/* Animated feedback container */}
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					transition={{ duration: 0.5 }}
					className="w-full mx-8 p-[2px] bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500"
				>
					<div className="bg-white p-4 md:p-6 shadow-md flex flex-col items-center">
						<User className="w-12 h-12 rounded-full border-2 border-gray-300" />
						<p className="text-center text-gray-600 mt-4">
							{feedbacks[currentIndex].feedback}
						</p>
						<h3 className="font-bold text-center mt-4">
							{feedbacks[currentIndex].name}
						</h3>
						<p className="text-center text-gray-500">
							{feedbacks[currentIndex].company}
						</p>
					</div>
				</motion.div>

				{/* Right button */}
				<button
					onClick={nextSlide}
					className="absolute right-0 z-10 p-2 md:p-3 bg-white shadow-md rounded-full"
					aria-label="Next feedback"
				>
					<ChevronRight size={24} />
				</button>
			</div>
		</div>
	)
}

export default ClientsFeedBack
