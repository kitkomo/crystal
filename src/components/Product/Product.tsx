import React from 'react'
import { useParams } from 'react-router-dom'

import { useProductQuery } from '../../store/productsApi'
import { toRub } from '../../helpers/currencyFormat'

import cl from './Product.module.scss'

const Product: React.FC = () => {
	const { article } = useParams()
	const { data } = useProductQuery(`${article}`)

	return (
		<>
			{data &&
				data.map(item => (
					<>
					<div className={cl.mainContainer}>
						<img className={cl.image} src={item.imageUrl} alt='product' />
						<div className={cl.name}>
							<span className={cl.subtitle}>{item.type}</span>
							<h1 className={cl.image}>{item.name}</h1>
						</div>
						<div className={cl.info}>
							<span className={cl.article}>article: {item.article}</span>
							<div className={cl.volume}>
								<span>volume / ml</span>
								<ul>
									{item.volume.map(size => (
										<li>
											<button>{size}</button>
										</li>
									))}
								</ul>
							</div>
							<span className={cl.price}>{toRub.format(item.price)}</span>
							<button className={cl.toCartBtn}>Add to cart</button>
						</div>
					</div>
					<p className={cl.descr}>
						{item.info}
					</p>
					</>
				))}
		</>
	)
}

export default Product
