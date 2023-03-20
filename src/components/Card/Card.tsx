import React from 'react'

import cl from './Card.module.scss'

interface ICard {
	imageUrl: string
	type: string
	name: string
	// price: number
}

const toRub = Intl.NumberFormat('ru', {
	style: 'currency',
	currency: 'rub',
	minimumFractionDigits: 0,
})

const Card: React.FC<ICard> = ({ imageUrl, type, name }) => {
	return (
		<a href='/' className={cl.root}>
			<img className={cl.image} src={imageUrl} alt='product' />
			<div className={cl.info}>
				<span className={cl.type}>{type}</span>
				<p className={cl.name}>{name}</p>
				{/* <span className={cl.price}>{toRub.format(price)}</span> */}
			</div>
		</a>
	)
}

export default Card
