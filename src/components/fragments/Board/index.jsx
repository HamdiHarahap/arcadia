import { useState, useEffect } from 'react'
import Square from '../../element/Square'
import Button from '../../element/Button'

const Board = () => {
	const [xIsNext, setXIsNext] = useState(true)
	const [squares, setSquares] = useState(Array(9).fill(null))
	const [status, setStatus] = useState('')
	const [gameOver, setGameOver] = useState(false)

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
		for (let line of lines) {
			const [a, b, c] = line
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a]
			}
		}
		return null
	}

	function resetGame() {
		setSquares(Array(9).fill(null))
		setStatus('')
		setGameOver(false)
		setXIsNext(true)
	}

	function handleClick(i) {
		if (squares[i] || !xIsNext || status) return

		const nextSquares = squares.slice()
		nextSquares[i] = 'X'
		setSquares(nextSquares)
		setXIsNext(false)
	}

	useEffect(() => {
		const winner = calculateWinner(squares)
		if (winner) {
			setStatus(winner === 'X' ? 'Anda Menang!' : 'Anda Kalah!')
			setGameOver(true)
			return
		}

		if (!xIsNext) {
			const emptySquares = squares
				.map((val, idx) => (val === null ? idx : null))
				.filter((idx) => idx !== null)
			if (emptySquares.length > 0) {
				const randomIndex =
					emptySquares[Math.floor(Math.random() * emptySquares.length)]
				const nextSquares = squares.slice()
				nextSquares[randomIndex] = 'O'
				setTimeout(() => {
					setSquares(nextSquares)
					setXIsNext(true)
				}, 500)
			}
		}
	}, [xIsNext, squares])

	return (
		<div className="flex flex-col   ">
			<div>
				<div className="flex">
					<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
					<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
					<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
				</div>
				<div className="flex">
					<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
					<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
					<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
				</div>
				<div className="flex">
					<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
					<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
					<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
				</div>
			</div>
			{gameOver ? (
				<div className="flex flex-col items-center w-full mt-2">
					<h2
						className={`text-center text-lg font-bold mb-4 ${
							status == 'Anda Menang!' ? 'text-green-600' : 'text-red-600'
						}`}
					>
						{status}
					</h2>
					<Button
						onClick={resetGame}
						className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
					>
						Main Lagi
					</Button>
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default Board
