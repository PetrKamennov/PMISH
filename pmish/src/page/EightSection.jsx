import React, { useEffect, useState } from 'react'
import './EightSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import NewsBlock from '../components/EightSection/NewsBlock'
import axios from 'axios'

function EightSection() {
	const [update, setUpdate] = useState(false)
	const [news, setnews] = useState([])

	function AdaptiveSize() {
		if (window.innerWidth <= 1366 && window.innerWidth > 1024) {
			return 2.5
		} else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
			return 2
		} else if (window.innerWidth <= 768 && window.innerWidth > 640) {
			return 1.5
		} else if (window.innerWidth <= 640) {
			return 1
		} else {
			return 3.75
		}
	}

	async function getnews() {
		axios
			.get(`http://raduga.aleksbcg.beget.tech/news/`, {})
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
		AdaptiveSize()
		getnews()
	}, [update])
	return (
		<div className='Eight-section_container slider-block'>
			<h1 className='slider-block-title'>Новости</h1>
			<Swiper
				spaceBetween={40}
				slidesPerView={AdaptiveSize()}
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
