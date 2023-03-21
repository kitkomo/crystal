import React from 'react'

import Categories from '../Categories/Categories'
import Card from '../Card/Card'
import CardSkeleton from '../Card/CardSkeleton'

import { useGetProductsQuery } from '../../store/productsApi'

import cl from './Content.module.scss'

const Content: React.FC = () => {

	const { data = [], isLoading } = useGetProductsQuery('')

	const skeletons = [...new Array(8)].map((item: undefined) => <CardSkeleton />)
	const renderProducts = data.map(item => (
		<Card
			key={item.id}
			imageUrl={item.imageUrl}
			name={item.name}
			type={item.type}
		/>
	))

	return (
		<section className={cl.root}>
			<Categories />
			<div className={cl.content}>{isLoading ? skeletons : renderProducts}</div>
		</section>
	)
}

export default Content
