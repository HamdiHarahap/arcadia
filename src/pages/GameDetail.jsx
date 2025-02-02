import { useParams } from 'react-router-dom'
import games from '../../utils/games'
import Jankenpon from '../components/layouts/Games/Jankenpon'
import TicTacToe from '../components/layouts/Games/TicTacToe'

const GameDetail = () => {
	const { slug } = useParams()
	const game = games.find(
		(game) => game.name.toLowerCase().replace(/\s+/g, '-') === slug
	)

	if (!game) {
		return <h2 className="text-center text-red-500">Game not found!</h2>
	}

	const renderGameComponent = () => {
		switch (game.name.toLowerCase()) {
			case 'jankenpon':
				return <Jankenpon />
			case 'tic tac toe':
				return <TicTacToe />
			default:
				return <p>Game tidak ada</p>
		}
	}

	return <div className="p-4 rounded-md">{renderGameComponent()}</div>
}

export default GameDetail
