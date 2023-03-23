import React from 'react'

import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'
import CloseBtn from '../UI/CloseBtn'
import CartItem from '../CartItem/CartItem'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { cartState } from '../../store/slices/cartSlice'

import cl from './Cart.module.scss'
import { toRub } from './../../helpers/currencyFormat'

const Cart: React.FC = () => {
	const dispatch = useAppDispatch()
	const { items, open, total } = useAppSelector(state => state.cart)

	const closeCart = (e: React.MouseEvent) => {
		e.stopPropagation()
		dispatch(cartState())
	}

	const [isOrderComplete, setIsOrderCompelete] = React.useState(false)

	return (
		<>
			{open && (
				<div className={cl.backdrop} onClick={e => closeCart(e)}>
					<div className={cl.cart} onClick={e => e.stopPropagation()}>
						<CloseBtn className={cl.closeBtn} onClick={e => closeCart(e)} />
						{isOrderComplete ? (
							<>
								<div className={cl.empty}>
									<h2>
										<span>Thank you!</span>
									</h2>
									<p>We are processing your order</p>
								</div>
							</>
						) : items.length > 0 ? (
							<>
								<h2 className={cl.title}>
									<span>cart</span> / {items.length} pc.
								</h2>
								<div className={cl.items}>
									{items.map(obj => (
										<CartItem
											key={obj.id}
											id={obj.id}
											imageUrl={obj.imageUrl}
											name={obj.name}
											price={obj.price}
											type={obj.type}
											volume={obj.volume}
											count={obj.count}
										/>
									))}
								</div>
								<div className={cl.totals}>
									<span className={cl.totalTitle}>total</span>
									<span className={cl.totalPrice}>{toRub.format(total)}</span>
									<PrimaryButton onClick={() => setIsOrderCompelete(true)}>Checkout</PrimaryButton>
								</div>
							</>
						) : (
							<>
								<div className={cl.empty}>
									<h2>
										<span>cart is empty...</span>
									</h2>
									<p>Try to look something in the shop</p>
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Cart
