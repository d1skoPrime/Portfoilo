import React from 'react'

type Props = {
	children: React.ReactNode
	onClick: () => void
}

const Button = (props: Props) => {
	return (
		<button
			className="text-black bg-linear-to-r from-purple-600 via-pink-500 to-orange-500 px-5 font-bold uppercase rounded-3xl py-1 transition duration-700 cursor-pointer hover:opacity-70 "
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
