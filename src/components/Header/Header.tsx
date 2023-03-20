import React from 'react'
import Logo from '../UI/Logo'
import Button from '../UI/Button'
import Input from '../UI/Input'

import cl from './Header.module.scss'

const Header: React.FC = () => {

	return (
		<header className={cl.header}>
			<Logo/>
			<ul className={cl.menu}>
				<li className={cl.menu__item}>
					<a href='/'>Shop</a>
				</li>
				<li className={cl.menu__item}>
					<a href='/'>Collections</a>
				</li>
				<li className={cl.menu__item}>
					<a href='/'>Contact</a>
				</li>
				<li className={cl.menu__item}>
					<a href='/'>About</a>
				</li>
			</ul>
			<Input/>
			<Button>View Cart</Button>
		</header>
	)
}

export default Header
