import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../UI/Logo/Logo'
import Button from '../UI/Button'

import cl from './Header.module.scss'
import { useAppDispatch } from './../../store/hooks'
import { cartState } from '../../store/slices/cartSlice'

const Header: React.FC = () => {
	const dispatch = useAppDispatch()
	const [menuOpen, setMenuOpen] = React.useState(false)

	React.useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 1100) {
				setMenuOpen(true)
			} else {
				setMenuOpen(false)
			}
		})
	}, [])

	return (
		<header className={cl.header}>
			<Logo />
			{menuOpen && (
				<ul className={cl.menu}>
					<li className={cl.menu__item}>
						<NavLink
							className={props => (props.isActive ? cl.activeLink : '')}
							to='/'
						>
							Shop
						</NavLink>
					</li>
					<li className={cl.menu__item}>
						<NavLink
							className={props => (props.isActive ? cl.activeLink : '')}
							to='/favorites'
						>
							Favorites
						</NavLink>
					</li>
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
			)}

			<Button onClick={() => dispatch(cartState())}>View Cart</Button>
			<div className={cl.burger} onClick={() => setMenuOpen(!menuOpen)}>
				<div className='line-1'></div>
				<div className='line-2'></div>
			</div>
		</header>
	)
}

export default Header
