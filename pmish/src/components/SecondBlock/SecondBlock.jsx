import React from 'react'
import './SecondBlock.css'
import bookmark from './img/bookmark.png'
const SecondBlock = () => {
	return (
		<>
			<div className='SecondBlock'>
				<div className='SecondBlock__main'>
					<img
						className='SecondBlock__main-bookmark'
						src={bookmark}
						alt='bookmark'
					/>
					<h2>Открой дверь в мир возможностей</h2>
					<p>
						Мы предлагаем уникальную программу обучения, которая сочетает
						инженерию и медицину. Наши студенты получают незаменимые знания и
						навыки, которые помогут им наладить мосты между двумя науками.
					</p>
					<div className='SecondBlock__main-statBlock'>
						<div className='SecondBlock__main-statBlock__stat'>
							<p>100+</p>
							<span>студентов</span>
						</div>
						<div className='SecondBlock__main-statBlock__stat'>
							<p>10</p>
							<span>образовательных программ</span>
						</div>
						<div className='SecondBlock__main-statBlock__stat'>
							<p>15+</p>
							<span>мероприятий</span>
						</div>
						<div className='SecondBlock__main-statBlock__stat'>
							<p>7+</p>
							<span>проектов</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SecondBlock
