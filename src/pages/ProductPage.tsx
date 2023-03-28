import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductQuery } from '../store/productsApi'
import Loading from '../components/UI/Loading/Loading'
import Product from '../components/Product/Product'

const ProductPage: React.FC = () => {

	const { article } = useParams()
	const { data, isLoading } = useProductQuery(`${article}`)

	return (
		<>
		{
			isLoading ? <Loading/> : <Product data={data ? data : ''}/>
		}
		</>
	)
}

export default ProductPage