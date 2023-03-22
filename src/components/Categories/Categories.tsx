import React from 'react'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { categories, changeCategory } from '../../store/slices/filterSlice'

import cl from './Categories.module.scss'

const Categories: React.FC = () => {
	const dispatch = useAppDispatch()
	const {category} = useAppSelector(state => state.filter)
	const linkActive = `${cl.filterBar__button} ${cl.active}`

	return (
		<ul className={cl.filterBar}>
			{categories.map((str, index) => (
				<li key={str} className={cl.filterBar__item}>
					<button
						className={category === index ? linkActive : cl.filterBar__button}
						onClick={() => dispatch(changeCategory(index))}
					>
						{str}
					</button>
				</li>
			))}
		</ul>
	)
}

export default Categories
