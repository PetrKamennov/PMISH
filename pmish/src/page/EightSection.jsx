import React, { useEffect, useState } from 'react'
import './EightSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import NewsBlock from '../components/EightSection/NewsBlock'
import axios from 'axios'

function EightSection() {
	const [update, setUpdate] = useState(false)
	const [news, setnews] = useState([
		{
			title: 'Создание новой лаборатории',
			text: 'Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии',
			data: '24.11.2023',
		},
		{
			title: 'Создание новой лаборатории',
			text: 'Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии',
			data: '24.11.2023',
		},
		{
			title: 'Создание новой лаборатории',
			text: 'Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии',
			data: '24.11.2023',
		},
		{
			title: 'Создание новой лаборатории',
			text: 'Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии',
			data: '24.11.2023',
		},
		{
			title: 'Создание новой лаборатории',
			text: 'Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии',
			data: '24.11.2023',
		},
	])

	async function getnews() {
		axios
			.get(`http://localhost:8080/Section`, {})
			.then(response => {
				setnews(response.data)
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
		<div className='Eight-section_container slider-block'>
			<h1 className='slider-block-title'>Новости</h1>
			<Swiper
				spaceBetween={40}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
			>
				{news.map((news, index) => (
					<SwiperSlide>
						<NewsBlock news={news} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className='end_line-block2'>
				<span className='end_line2' />
			</div>
		</div>
	)
}

export default EightSection
