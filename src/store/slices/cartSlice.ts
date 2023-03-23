import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICartProduct } from '../../models/ICartProduct'

interface ICart {
	open: boolean,
	items: ICartProduct[],
	total: number
}

const initialState: ICart = {
	open: false,
	items: [],
	total: 0,
}

const findItem = (state: ICart, payload:string) => state.items.find(item => item.id === payload)
const countTotal = (array: ICartProduct[]) => array.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		cartState(state) {
			state.open = !state.open
		},
		addToCart(state, action: PayloadAction<ICartProduct>) {
			const itemExist = findItem(state, action.payload.id)

			if (itemExist) {
				itemExist.count++
			} else {
				state.items.push(action.payload)
			}

			state.total = countTotal(state.items)
		},
		removeFromCart(state, action: PayloadAction<string>) {
			const item = findItem(state, action.payload)

			if (item) {
				state.items = state.items.filter(item => item.id !== action.payload)
			}

			state.total = countTotal(state.items)
		},
		increase(state, action: PayloadAction<string>) {
			const item = findItem(state, action.payload)
			if (item) {
				item.count++
				state.total = countTotal(state.items)
			}

		},
		decrease(state, action: PayloadAction<string>) {
			const item = findItem(state, action.payload)
			if (item && item.count > 1) {
				item.count--
				state.total = countTotal(state.items)
			}
		}
	},
})

export const { cartState, addToCart, removeFromCart, increase, decrease } = cartSlice.actions
export default cartSlice.reducer
