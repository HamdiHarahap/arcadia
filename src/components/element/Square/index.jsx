/* eslint-disable react/prop-types */
const Square = (props) => {
	const { value, onSquareClick } = props

	return (
		<button
			className="border-2 border-black w-12 h-12 font-bold text-lg"
			onClick={onSquareClick}
		>
			{value}
		</button>
	)
}

export default Square
