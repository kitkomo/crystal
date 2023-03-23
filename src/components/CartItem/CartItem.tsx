import React from 'react'

import CountButton from '../UI/CountButton'
import { ICartItem } from './../../models/ICartItem'
import { toRub } from './../../helpers/currencyFormat'
import { useAppDispatch } from './../../store/hooks'
import { decrease, increase, removeFromCart } from '../../store/slices/cartSlice'

import cl from './CartItem.module.scss'
import CloseBtn from '../UI/CloseBtn'

const CartItem: React.FC<ICartItem> = ({
	id,
	imageUrl,
	name,
	price,
	type,
	volume,
	count,
}) => {
	const dispatch = useAppDispatch()

	return (
		<div className={cl.item}>
			<img className={cl.image} src={imageUrl} alt='product preview' />
			<div className={cl.info}>
				<span className={cl.subtitle}>{type}</span>
				<span className={cl.title}>{name}</span>
				<span className={cl.volume}>{volume} ml</span>
				<span className={cl.price}>{toRub.format(price)}</span>
			</div>
			<div className={cl.count}>
				<CountButton direction='up' onClick={() => dispatch(increase(id))} />
				<span>x{count}</span>
				<CountButton direction='down' onClick={() => dispatch(decrease(id))} />
			</div>
			<CloseBtn className={cl.delBtn} onClick={() => dispatch(removeFromCart(id))}/>
		</div>
	)
}

export default CartItem
