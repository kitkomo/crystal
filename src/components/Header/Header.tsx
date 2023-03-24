import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../UI/Logo/Logo'
import Button from '../UI/Button'
import Input from '../UI/Input'

import cl from './Header.module.scss'
import { useAppDispatch } from './../../store/hooks'
import { cartState } from '../../store/slices/cartSlice'

const Header: React.FC = () => {
	const dispatch = useAppDispatch()

	return (
		<header className={cl.header}>
			<Logo />
			<ul className={cl.menu}>
				<li className={cl.menu__item}>
					<NavLink
						className={props => (props.isActive ? cl.activeLink : '')}
						to='/'
					>
						Shop
					</NavLink>
				</li>
				{/* <li className={cl.menu__item}>
					<NavLink
						className={props => (props.isActive ? cl.activeLink : '')}
						to='/favorites'
					>
						Favorites
					</NavLink>
				</li> */}
				<li className={cl.menu__item}>
					<NavLink
						className={props => (props.isActive ? cl.activeLink : '')}
						to='/contact'
					>
						Contact
					</NavLink>
				</li>
				<li className={cl.menu__item}>
					<NavLink
						className={props => (props.isActive ? cl.activeLink : '')}
						to='/about'
					>
						About
					</NavLink>
				</li>
			</ul>
			{/* <Input /> */}
			<Button onClick={() => dispatch(cartState())}>View Cart</Button>
		</header>
	)
}

export default Header
