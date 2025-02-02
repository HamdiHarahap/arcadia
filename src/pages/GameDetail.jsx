import { useParams } from 'react-router-dom'
import games from '../../utils/games'
import Jankenpon from '../components/layouts/Games/Jankenpon'

const GameDetail = () => {
	const { slug } = useParams()
	const game = games.find(
		(game) => game.name.toLowerCase().replace(/\s+/g, '-') === slug
	)

	if (!game) {
		return <h2 className="text-center text-red-500">Game not found!</h2>
	}

	return (
		<div className="p-4 rounded-md">
			{game.name.toLowerCase() === 'jankenpon' ? (
				<Jankenpon />
			) : (
				<h2 className="text-center text-gray-700">Game not available yet!</h2>
			)}
		</div>
	)
}

export default GameDetail
