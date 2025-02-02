import { Link } from 'react-router-dom'
import Button from '../../element/Button'

const Reaction = () => {
	return (
		<section className="bg-white text-black flex flex-col items-center h-[50vh] w-[40rem] rounded-lg m-auto py-6 mt-24 px-5 gap-6">
			<div className="w-full">
				<Button className="mr-auto text-blue-500">
					<Link to={`/`}>Back</Link>
				</Button>
				<h1 className="font-bold text-3xl text-center mt-2">
					Reaction Time Test
				</h1>
			</div>
		</section>
	)
}

export default Reaction
