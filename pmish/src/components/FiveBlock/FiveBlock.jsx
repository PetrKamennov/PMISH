import React, { useEffect, useState } from 'react'
import './FiveBlock.css'
import GridCell from './GridCell'
import axios from 'axios'
const FiveBlock = () => {
	const [update, setUpdate] = useState(false)
	const [cell, setCell] = useState([])

	async function getcell() {
		axios
			.get(`http://raduga.aleksbcg.beget.tech/eduProgs/`, {})
			.then(response => {
				setCell(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	console.log(cell)

	useEffect(() => {
		if (update) return
		getcell()
	}, [update])

	return (
		<>
			<div className='FiveBlock'>
				<div className='FiveBlock__main'>
					<h5>Образовательные программы</h5>
					<div className='FiveBlock__main-grid'>
						{cell.map((cell, index) => (
							<GridCell cell={cell} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default FiveBlock
