import React, { createContext, useContext, useState } from 'react'
import './Header.css'
import logoPISH from './img/logoPISH.png'
import logoSamGMU from './img/logoSAMGMU.png'
const Header = () => {
	const[active, setActive] = useState(false)
		const clickHandler = (e) => {
			e.preventDefault();
			setActive(!active)
			if(active === false){
				document.body.style.overflow = "hidden"
			}else{
				document.body.style.overflow = "scroll"
			}
		};
		const closeBurger = (e) => {
			setActive(!active)
			document.body.style.overflow = "scroll"
			document.body.style.overflowX = "hidden"
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
						<a href='#one'  onClick={closeBurger} className={`burger_li ${active ? 'active' : ""}`}>Образование</a>
						<a href='#two'  onClick={closeBurger} className={`burger_li ${active ? 'active' : ""}`}>Наука</a>
						<a href='#tree' onClick={closeBurger} className={`burger_li ${active ? 'active' : ""}`}>Новости</a>
						<a href='#four' onClick={closeBurger} className={`burger_li ${active ? 'active' : ""}`}>Контакты</a>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
