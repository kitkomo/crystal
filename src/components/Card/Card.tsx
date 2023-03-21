import React from 'react'
import {Link} from 'react-router-dom'

import cl from './Card.module.scss'

interface ICard {
	article: string
	imageUrl: string
	type: string
	name: string
	// price: number
}

const Card: React.FC<ICard> = ({article, imageUrl, type, name }) => {
	return (
		<Link to={'product/' + article} className={cl.root}>
			<img className={cl.image} src={imageUrl} alt='product' />
			<div className={cl.info}>
				<span className={cl.type}>{type}</span>
				<p className={cl.name}>{name}</p>
				{/* <span className={cl.price}>{toRub.format(price)}</span> */}
			</div>
		</Link>
	)
}

export default Card
