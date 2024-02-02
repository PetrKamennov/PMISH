import React, { useEffect, useState } from 'react'
import '../../page/EightSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'

function Team(props) {
	const [img, setimg] = useState([])
	const [update, setUpdate] = useState(false)

	async function getnews() {
		axios
			.get(
				`http://raduga.aleksbcg.beget.tech/getImage/${props.news.imageId_id}`,
				{}
			)
			.then(response => {
				setimg(response.data[0].image)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	useEffect(() => {
		if (update) return
		getnews()
	}, [update])
	return (
		<div className='card-block_container'>
			<div className='card-block_image img'>
				<img src={img} alt='img' className='img_logo' />
			</div>
			<div className='card-block_contain'>
				<h2 className='card-block_title'>{props.news.nameMember}</h2>
				<p className='card-block_txt'>{props.news.teamText}</p>
			</div>
		</div>
	)
}

export default Team
