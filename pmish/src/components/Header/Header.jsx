import React, { createContext, useContext, useState } from 'react'
import './Header.css'
import logoPISH from './img/logoPISH.png'
import logoSamGMU from './img/logoSAMGMU.png'
const Header = () => {
	const MenuContext = createContext({
		isMenuOpen: true,
		toggleMenu: () => {},
	  });
	  
	  const NavState = ({ children }) => {
		const [isMenuOpen, toggleMenu] = useState(false);

	  }
		const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

		const clickHandler = (e) => {
			e.preventDefault()
		};
	return (
		<>
			<header className='Header'>
				<div className='Header__iconBlock'>
					<img src={logoPISH} alt='PISH' />
					<img src={logoSamGMU} alt='SamGMU' />
				</div>
				<a href="" onClick={clickHandler} className={`burger_button ${isMenuOpen ? 'active' : ""}`}>
					<span className="button_bar"></span>
					<span className="button_bar"></span>
					<span className="button_bar"></span>
				</a>
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
