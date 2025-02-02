import games from '../../../utils/games'
import Button from '../../components/element/Button'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<section className="flex gap-10 flex-wrap px-52 py-12 items-stretch justify-center">
			{games.map((game, index) => (
				<div
					key={index}
					className="group flex flex-col justify-between items-center bg-white rounded-md px-4 py-2 w-[14rem] border shadow-md transition duration-300 cursor-pointer"
				>
					<div className="h-full flex flex-col items-center mb-4 gap-1">
						<img
							src={game.image}
							alt={game.name}
							className="w-36 transition-transform duration-300 group-hover:scale-105"
						/>
						<h2 className="font-bold text-xl">{game.name}</h2>
						<p className="text-center text-zinc-400">{game.description}</p>
					</div>
					<Link to={`/games/${game.slug}`}>
						<Button className="border-2 rounded-xl py-2 px-10 font-semibold transition duration-300 group-hover:bg-green-600 group-hover:border-none">
							Play
						</Button>
					</Link>
				</div>
			))}
		</section>
	)
}

export default Home
