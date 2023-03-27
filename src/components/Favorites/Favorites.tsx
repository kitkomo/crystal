import React from 'react'

import Card from '../Card/Card'
import { useAppSelector } from '../../store/hooks'

import cl from './Favorites.module.scss'

const Favorites: React.FC = () => {
	const { items } = useAppSelector(state => state.favorites)
	return (
		<div className={cl.favorites}>
			{items.length > 0 ? (
				items.map(item => (
					<Card
						key={item.id}
						article={item.article}
						imageUrl={item.imageUrl}
						name={item.name}
						type={item.type}
					/>
				))
			) : (
				<div className={cl.empty}>
					<h2>
						<span>you have no favorite products</span>
					</h2>
					<p>Try to look something in the shop</p>
				</div>
			)}
		</div>
	)
}

export default Favorites
