import React, { useEffect, useState } from 'react'
import '../../page/EightSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'

function NewsBlock(props) {
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
		<div className='slider-block_container'>
			<div className='slider-block_contain'>
				<img src={img} alt='12' />
				<h2 className='slider-block_title'>{props.news.newsShortText}</h2>
				<p className='slider-block_txt'>{props.news.newsMainText}</p>
				<span className='slider-block_date'>{props.news.NewsMainText}</span>
			</div>
		</div>
	)
}

export default NewsBlock
