import React, { useEffect, useState } from 'react'
import '../../page/SevenSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'

function ScientificGroups(props) {
	return (
		<div className='content-block_left-group left-group'>
			<h2 className='left-group_title'>{props.group.scientificGroupsTitle}</h2>
			<p className='left-group_txt'>{props.group.scientificGroupsText}</p>
		</div>
	)
}

export default ScientificGroups
