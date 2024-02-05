import { useEffect, useState } from 'react'
import ScientificGroups from '../components/SevenSection/ScientificGroups'
import './SevenSection.css'
import axios from 'axios'

function SevenSection() {
	const [update, setUpdate] = useState(false)
	const [group, setGroup] = useState([])

	async function getcell() {
		axios
			.get(`http://raduga.aleksbcg.beget.tech/science/`, {})
			.then(response => {
				setGroup(response.data)
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
		<div className='Seven_section science-group'>
			<h1 className='science-group_title'>Научные группы</h1>
			<div className='science-group_block'>
				{group.map((group, index) => (
					<ScientificGroups group={group} />
				))}
			</div>
			<div className='end_line-block'>
				<span className='end_line' />
			</div>
		</div>
	)
}

export default SevenSection
