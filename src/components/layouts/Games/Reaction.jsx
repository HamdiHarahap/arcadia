import { Link } from 'react-router-dom'
import Button from '../../element/Button'
import { useEffect, useState, useRef } from 'react'

const Reaction = () => {
	const [lampu, setLampu] = useState('red')
	const [waktuMulai, setWaktuMulai] = useState(null)
	const [waktuReaksi, setWaktuReaksi] = useState(null)
	const [sudahKlik, setSudahKlik] = useState(false)
	const timerRef = useRef(null)

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			setLampu('green')
			setWaktuMulai(Date.now())
		}, 4000)

		return () => clearTimeout(timerRef.current)
	}, [])

	const resetGame = () => {
		setLampu('red')
		setWaktuMulai(null)
		setWaktuReaksi(null)
		setSudahKlik(false)

		timerRef.current = setTimeout(() => {
			setLampu('green')
			setWaktuMulai(Date.now())
		}, 4000)
	}

	const handleClick = () => {
		if (lampu === 'green' && !sudahKlik) {
			const reaksi = Date.now() - waktuMulai
			setWaktuReaksi(reaksi)
			setSudahKlik(true)
		} else if (lampu === 'red') {
			setWaktuReaksi('Tunggu sampai lampu hijau!')
			setSudahKlik(true)
			clearTimeout(timerRef.current)
		}
	}

	return (
		<section className="bg-white text-black flex flex-col items-center h-[70vh] w-[40rem] rounded-lg m-auto py-6 mt-24 px-5 gap-6">
			<div className="w-full">
				<Button className="mr-auto text-blue-500">
					<Link to={`/`}>Back</Link>
				</Button>
				<h1 className="font-bold text-3xl text-center mt-2">
					Reaction Time Test
				</h1>
				<p className="text-center">Klik lingkaran saat hijau</p>
			</div>
			<div
				onClick={handleClick}
				className={`w-40 h-40 rounded-full cursor-pointer ${
					lampu === 'red' ? 'bg-red-500' : 'bg-green-500'
				}`}
			></div>
			<div className="text-xl mt-4">
				{waktuReaksi !== null &&
					(typeof waktuReaksi === 'string'
						? waktuReaksi
						: `Kecepatan reaksi Anda: ${waktuReaksi} ms`)}
			</div>
			{sudahKlik && (
				<Button
					onClick={resetGame}
					className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
				>
					Main Lagi
				</Button>
			)}
		</section>
	)
}

export default Reaction
