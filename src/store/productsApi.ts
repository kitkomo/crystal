import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://640b7d8b65d3a01f981c3e71.mockapi.io/'}),
	endpoints: (build) => ({
		getProducts: build.query<ProductItem[], string>({
			query: () => '/crystal',
		}),
		category: build.query<ProductItem[], string>({
			query: (id = '') => `/crystal?category=${id}`,
		})
	})
})

export const {useGetProductsQuery, useCategoryQuery} = productsApi