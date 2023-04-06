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
	const menuRef = React.useRef<HTMLUListElement>(null)
	const burgerRef = React.useRef<HTMLDivElement>(null)

	const menuClasses = [cl.menu]

	if (menuOpen) {
		menuClasses.push(cl.menuActive)
	}

	React.useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (burgerRef.current) {
				if (
					menuRef.current &&
					!event.composedPath().includes(menuRef.current) &&
					!event.composedPath().includes(burgerRef.current)
				) {
					setMenuOpen(false)
				}
			}
		}
		document.body.addEventListener('click', handleOutsideClick)
		return () => document.body.removeEventListener('click', handleOutsideClick)
	}, [])

	return (
		<header className={cl.header}>
			<Logo />

			<ul className={menuClasses.join(' ')} ref={menuRef}>
				<li className={cl.menu__item}>
					<NavLink
						className={props => (props.isActive ? cl.activeLink : '')}
						to='/'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						Shop
					</NavLink>
				</li>
				<li className={cl.menu__item}>
					<NavLink
						className={props => (props.isActive ? cl.activeLink : '')}
						to='/favorites'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						Favorites
					</NavLink>
				</li>
				<li className={cl.menu__item}>
					<NavLink
						className={props => (props.isActive ? cl.activeLink : '')}
						to='/contact'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						Contact
					</NavLink>
				</li>
				<li className={cl.menu__item}>
					<NavLink
						className={props => (props.isActive ? cl.activeLink : '')}
						to='/about'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						About
					</NavLink>
				</li>
			</ul>

			<Button onClick={() => dispatch(cartState())}>View Cart</Button>
			<div
				ref={burgerRef}
				className={cl.burger}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<div className='line-1'></div>
				<div className='line-2'></div>
			</div>
		</header>
	)
}

export default Header
