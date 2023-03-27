import React from 'react'
import { useAppSelector } from '../store/hooks'
import Card from '../components/Card/Card'

const FavoritesPage: React.FC = () => {
	const { items } = useAppSelector(state => state.favorites)

	return (
		<div>
			{items.map(item => (
				<Card
					key={item.id}
					article={item.article}
					imageUrl={item.imageUrl}
					name={item.name}
					type={item.type}
				/>
			))}
		</div>
	)
}

export default FavoritesPage
