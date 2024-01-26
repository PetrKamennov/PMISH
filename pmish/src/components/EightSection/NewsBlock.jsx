import React from 'react'
import '../../page/EightSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'

function NewsBlock(props) {
	return (
		<div className='slider-block_container'>
			<div className='slider-block_contain'>
				<h2 className='slider-block_title'>{props.news.title}</h2>
				<p className='slider-block_txt'>{props.news.text}</p>
				<span className='slider-block_date'>{props.news.data}</span>
			</div>
		</div>
	)
}

export default NewsBlock
