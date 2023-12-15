import React from 'react'
import './MainBlock.css'
import girl from './img/Girl.png'
const MainBlock = () => {
	return (
		<>
			<div className='MainBlock'>
				<div className='MainBlock__right'>
					<h1>Передовая инженерная Школа СамГМУ</h1>
					<button>узнать больше</button>
				</div>
				<div className='MainBlock__left'>
					<img src={girl} alt='girl' />
				</div>
			</div>
		</>
	)
}

export default MainBlock
