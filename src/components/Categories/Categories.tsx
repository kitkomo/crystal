import React from 'react'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { categories, changeCategory } from '../../store/slices/filterSlice'

import cl from './Categories.module.scss'

interface IButton {
	isActive: boolean
}

const Button = styled.button<IButton>`
	background-color: ${props => (props.isActive ? '#F3F3F3' : '')};
	font-family: ${props => (props.isActive ? 'Satoshi-Italic' : '')};
`

const Categories: React.FC = () => {
	const dispatch = useAppDispatch()
	const { category } = useAppSelector(state => state.filter)

	return (
		<ul className={cl.filterBar}>
			{categories.map((str, index) => (
				<li key={str} className={cl.filterBar__item}>
					<Button
						className={cl.filterBar__button}
						onClick={() => dispatch(changeCategory(index))}
						isActive={category === index}
					>
						{str}
					</Button>
				</li>
			))}
		</ul>
	)
}

export default Categories
