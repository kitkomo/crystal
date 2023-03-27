import { configureStore } from '@reduxjs/toolkit'

import { productsApi } from './productsApi';
import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice';
import favoritesSlice from './slices/favoritesSlice';

const store = configureStore({
	reducer: {
		filter: filterSlice,
		cart: cartSlice,
		favorites: favoritesSlice,
		[productsApi.reducerPath]: productsApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
