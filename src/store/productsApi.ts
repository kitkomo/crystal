import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../models/IProduct'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://640b7d8b65d3a01f981c3e71.mockapi.io/crystal',
	}),
	endpoints: build => ({
		getAllProducts: build.query<IProduct[], string>({
			query: (category: string = '') => ({
				url: category !== '' ? `?category=${category}` : '',
			}),
		}),
		product: build.query<IProduct[], string>({
			query: (article = '') => `/?article=${article}`,
		}),
	}),
})

export const { useGetAllProductsQuery, useProductQuery } = productsApi
