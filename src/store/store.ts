import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productsSlice';

const store = configureStore({
	reducer: {
		products: productSlice
	}
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch