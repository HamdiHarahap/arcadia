import { Link } from 'react-router-dom'
import Board from '../../fragments/Board'
import Button from '../../element/Button'

const TicTacToe = () => {
	return (
		<section className="bg-white text-black flex flex-col items-center h-[70vh] w-[40rem] rounded-lg m-auto py-6 mt-24 px-5 gap-6 max-[520px]:w-full">
			<div className="w-full">
				<Button className="mr-auto text-blue-500">
					<Link to={`/`}>Back</Link>
				</Button>
				<h1 className="font-bold text-3xl text-center mt-2">Tic Tac Toe</h1>
			</div>
			<Board />
		</section>
	)
}

export default TicTacToe
