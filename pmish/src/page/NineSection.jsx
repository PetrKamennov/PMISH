import React, { useEffect, useState } from 'react'
import './NineSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import img from '../image/Intersect.png'
import Team from '../components/NineSection/Team'
import axios from 'axios'

function NineSection() {
	const [update, setUpdate] = useState(false)
	const [news, setnews] = useState([])
	async function getnews() {
		axios
			.get(`http://raduga.aleksbcg.beget.tech/team/`, {})
			.then(response => {
				setnews(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	console.log(news)
	useEffect(() => {
		if (update) return
		getnews()
	}, [update])

	return (
		<div className='Nine-section_container card-block'>
			<h1 className='card-block-title'>Команда</h1>
			<Swiper
				spaceBetween={50}
				slidesPerView='auto'
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
			>
				{news.map((news, index) => (
					<SwiperSlide className='card-slide'>
						<Team news={news} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default NineSection
