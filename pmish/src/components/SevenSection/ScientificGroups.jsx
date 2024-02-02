import React, { useEffect, useState } from 'react'
import '../../page/SevenSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'

function NewsBlock(props) {
	return (
		<div className='content-block_left-group left-group'>
			<h2 className='left-group_title'>Биомедицинская электроника</h2>
			<p className='left-group_txt'>
				Изучение и разработка электронных устройств, используемых в медицинских
				целях
			</p>
		</div>
	)
}

export default NewsBlock
