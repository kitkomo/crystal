import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice';
import { productsApi } from './productsApi';

const store = configureStore({
	reducer: {
		filter: filterSlice,
		cart: cartSlice,
		[productsApi.reducerPath]: productsApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
