import React from 'react'
import './Header.css'
import logoPISH from './img/logoPISH.png'
import logoSamGMU from './img/logoSAMGMU.png'
const Header = () => {
	return (
		<>
			<header className='Header'>
				<div className='Header__iconBlock'>
					<img src={logoPISH} alt='PISH' />
					<img src={logoSamGMU} alt='SamGMU' />
				</div>
				<nav className='Header__navblock'>
					<ul>
						<li>Образование</li>
						<li>Наука</li>
						<li>Новости</li>
						<li>Контакты</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
