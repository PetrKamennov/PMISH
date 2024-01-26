import React, { useEffect, useState } from 'react'
import './FiveBlock.css'
import GridCell from './GridCell'
import axios from 'axios'
const FiveBlock = () => {
	const [update, setUpdate] = useState(false)
	const [cell, setCell] = useState([
		{
			EducationTitle: 'Образовательная программа',
			EducationText:
				'Программа магистратуры ПИШ включает в себя более глубокое изучение различных областей медицинской инженерии и научных исследований',
		},
		{
			EducationTitle: 'Образовательная программа',
			EducationText:
				'Программа магистратуры ПИШ включает в себя более глубокое изучение различных областей медицинской инженерии и научных исследований',
		},
		{
			EducationTitle: 'Образовательная программа',
			EducationText:
				'Программа магистратуры ПИШ включает в себя более глубокое изучение различных областей медицинской инженерии и научных исследований',
		},
		{
			EducationTitle: 'Образовательная программа',
			EducationText:
				'Программа магистратуры ПИШ включает в себя более глубокое изучение различных областей медицинской инженерии и научных исследований',
		},
		{
			EducationTitle: 'Образовательная программа',
			EducationText:
				'Программа магистратуры ПИШ включает в себя более глубокое изучение различных областей медицинской инженерии и научных исследований',
		},
		{
			EducationTitle: 'Образовательная программа',
			EducationText:
				'Программа магистратуры ПИШ включает в себя более глубокое изучение различных областей медицинской инженерии и научных исследований',
		},
	])

	async function getcell() {
		axios
			.get(`http://localhost:8080/Section`, {})
			.then(response => {
				setCell(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

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
