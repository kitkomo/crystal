import React from 'react'

import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'
import { useAppDispatch, useAppSelector } from './../../store/hooks'
import { addToCart } from '../../store/slices/cartSlice'
import { IProduct } from './../../models/IProduct'
import { toRub } from '../../helpers/currencyFormat'
import {
	addToFavorites,
	removeFromFavorites,
} from '../../store/slices/favoritesSlice'

import cl from './Product.module.scss'
import FavoritesBtn from '../UI/FavoritesBtn'

interface ProductProps {
	data: IProduct[] | ''
}

const Product: React.FC<ProductProps> = ({data}) => {

	const [activeVolume, setActiveVolume] = React.useState(0)
	const favItems = useAppSelector(state => state.favorites.items)

	const dispatch = useAppDispatch()

	const handleAdding = (item: IProduct) => {
		dispatch(
			addToCart({
				id: item.id,
				imageUrl: item.imageUrl,
				type: item.type,
				name: item.name,
				price: item.price,
				volume: item.volume[activeVolume],
				count: 1,
			}),
		)
	}

	return (
		<>
			{data &&
				data.map(item => (
					<div key={item.id}>
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
										{item.volume.map((size, index) => (
											<li key={size}>
												<button
													className={
														index === activeVolume ? cl.activeVolume : ''
													}
													onClick={() => setActiveVolume(index)}
												>
													{size}
												</button>
											</li>
										))}
									</ul>
								</div>
								<span className={cl.price}>{toRub.format(item.price)}</span>
								<div className={cl.buttons}>
									<PrimaryButton onClick={() => handleAdding(item)}>
										Add to cart
									</PrimaryButton>
									<FavoritesBtn
										onAdd={() => dispatch(addToFavorites(item))}
										onRemove={() => dispatch(removeFromFavorites(item.id))}
										isLiked={
											favItems.find(el => el.id === item.id) ? true : false
										}
									/>
								</div>
							</div>
						</div>
						<p className={cl.descr}>{item.info}</p>
					</div>
				))}
		</>
	)
}

export default Product
