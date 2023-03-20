import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface ProductItem {
	id: string
	imageUrl: string
	type: string
	name: string
	info: string
	price: number
	volume: string[]
	article: string
	category: string
}

export interface Products {
	products: ProductItem[]
	status: null | string
	error: null | string
}

export const fetchProducts = createAsyncThunk<ProductItem[]>(
	'products/fetchProducts',
	async function () {
		const { data } = await axios.get(
			'https://640b7d8b65d3a01f981c3e71.mockapi.io/crystal',
		)
		return data
	},
)

const initialState: Products = {
	products: [],
	status: null,
	error: null,
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'resolved'
				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, state => {
				state.status = 'rejected'
			})
	},
})

export default productSlice.reducer
