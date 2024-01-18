import React, { createContext, useContext, useState } from 'react'
import './Header.css'
import logoPISH from './img/logoPISH.png'
import logoSamGMU from './img/logoSAMGMU.png'
const Header = () => {
	const[active, setActive] = useState(false)
		const clickHandler = (e) => {
			e.preventDefault();
			setActive(!active)
		};
	return (
		<>
			<header className='Header'>
				<div className='Header__iconBlock'>
					<img src={logoPISH} alt='PISH' />
					<img src={logoSamGMU} alt='SamGMU' />
				</div>
				<a href="" onClick={clickHandler} className={`burger_button ${active ? 'active' : ""}`}>
					<span className="button_bar"></span>
					<span className="button_bar"></span>
					<span className="button_bar"></span>
				</a>
				<nav className={`Header__navblock ${active ? 'active' : ""}`}>
					<ul>
						<li className={`burger_li ${active ? 'active' : ""}`}>Образование</li>
						<li className={`burger_li ${active ? 'active' : ""}`}>Наука</li>
						<li className={`burger_li ${active ? 'active' : ""}`}>Новости</li>
						<li className={`burger_li ${active ? 'active' : ""}`}>Контакты</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
