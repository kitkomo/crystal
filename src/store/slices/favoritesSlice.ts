import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../models/IProduct'

interface IFavorites {
	items: IProduct[]
}

const initialState: IFavorites = {
	items: []
}


const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites(state, action: PayloadAction<IProduct>) {
			state.items.push(action.payload)
		},
		removeFromFavorites(state, action: PayloadAction<string>) {
			state.items = state.items.filter(item => item.id !== action.payload)
		}
	},
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
