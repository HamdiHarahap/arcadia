import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../element/Button'

const choices = ['batu', 'gunting', 'kertas']

const Jankenpon = () => {
	const [userChoice, setUserChoice] = useState(null)
	const [computerChoice, setComputerChoice] = useState(null)
	const [result, setResult] = useState(null)
	const [gameOver, setGameOver] = useState(false)

	const play = (choice) => {
		const randomChoice = choices[Math.floor(Math.random() * choices.length)]
		setUserChoice(choice)
		setComputerChoice(randomChoice)
		whoWinner(choice, randomChoice)
		setGameOver(true)
	}

	const whoWinner = (user, computer) => {
		if (user == computer) {
			setResult('Draw!')
		} else if (
			(user == 'batu' && computer == 'kertas') ||
			(user == 'kertas' && computer == 'gunting') ||
			(user == 'gunting' && computer == 'batu')
		) {
			setResult('Kamu Menang')
		} else {
			setResult('Kamu Kalah')
		}
	}

	const resetGame = () => {
		setUserChoice(null)
		setComputerChoice(null)
		setResult(null)
		setGameOver(false)
	}

	return (
		<section className="bg-white text-black flex flex-col items-center h-[50vh] w-[40rem] gap-12 rounded-lg m-auto py-6 mt-24 px-5">
			<div className="w-full">
				<Button className="mr-auto text-blue-500">
					<Link to={`/`}>Back</Link>
				</Button>
				<h1 className="font-bold text-3xl text-center mt-2">Jankenpon</h1>
			</div>
			{!gameOver ? (
				<div className="flex justify-center gap-4 flex-col items-center">
					<h3 className="font-semibold text-lg">Select one</h3>
					<div className="flex gap-4">
						{choices.map((choice) => (
							<button
								key={choice}
								onClick={() => play(choice)}
								className="text-white font-bold py-2 px-4 rounded border-2 border-black"
							>
								<img
									src={`/assets/images/${
										choice.charAt(0) + choice.slice(1)
									}.jpg`}
									alt={choice}
									className="w-10  object-cover"
								/>
							</button>
						))}
					</div>
				</div>
			) : (
				<div className="w-full px-12 flex flex-col justify-center items-center gap-6">
					<div className="flex justify-center items-center gap-16 w-full">
						<div className="flex flex-col gap-1 items-center">
							<p className="font-bold text-lg">Player</p>
							<img
								src={`/assets/images/${userChoice}.jpg`}
								alt=""
								className="w-10"
							/>
						</div>
						<div className="flex flex-col gap-1 items-center">
							<p className="font-bold text-lg">Computer</p>
							<img
								src={`/assets/images/${computerChoice}.jpg`}
								alt=""
								className="w-10"
							/>
						</div>
					</div>
					<h2 className="text-xl font-bold text-green-600 mt-2">{result}</h2>

					<Button
						onClick={resetGame}
						className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
					>
						Main Lagi
					</Button>
				</div>
			)}
		</section>
	)
}

export default Jankenpon
