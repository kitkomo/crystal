import React from 'react'
import { NavLink } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { categories, changeCategory } from '../../store/slices/filterSlice'

import cl from './Categories.module.scss'

const Categories: React.FC = () => {
	const dispatch = useAppDispatch()
	const linkActive = `${cl.filterBar__button} ${cl.active}`

	return (
		<ul className={cl.filterBar}>
			{categories.map((str, index) => (
				<li key={str} className={cl.filterBar__item}>
					<NavLink
						to={index === 0 ? '/' : '/' + str.toLowerCase()}
						className={({isActive}) => isActive ? linkActive : cl.filterBar__button}
						onClick={() => dispatch(changeCategory(index))}
					>
						{str}
					</NavLink>
				</li>
			))}
		</ul>
	)
}

export default Categories
