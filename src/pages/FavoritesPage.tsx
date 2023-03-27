import React from 'react'
import Favorites from '../components/Favorites/Favorites'

const FavoritesPage: React.FC = () => {
	return (
		<div className='content-wrapper'>
			<section className='content'>
				<Favorites />
			</section>
		</div>
	)
}

export default FavoritesPage
