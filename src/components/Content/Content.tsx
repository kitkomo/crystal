import React from 'react'

import Categories from '../Categories/Categories'
import Card from '../Card/Card'
import CardSkeleton from '../Card/CardSkeleton'

import { useGetProductsQuery } from '../../store/productsApi'

import cl from './Content.module.scss'

const Content: React.FC = () => {
	const { data = [], isLoading } = useGetProductsQuery('')
	const skeletons = [...new Array(8)].map(() => <CardSkeleton />)
	const renderProducts = data.map(item => (
		<Card
			key={item.id}
			article={item.article}
			imageUrl={item.imageUrl}
			name={item.name}
			type={item.type}
		/>
	))

	return (
		<div>
			<Categories />
			<div className={cl.content}>{isLoading ? skeletons : renderProducts}</div>
		</div>
	)
}

export default Content
