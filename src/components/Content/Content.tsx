import React from 'react'

import Categories from '../Categories/Categories'
import Card from '../Card/Card'
import CardSkeleton from '../Card/CardSkeleton'

import { useAppSelector } from '../../store/hooks'

import cl from './Content.module.scss'

const Content: React.FC = () => {
	const { products, status } = useAppSelector(state => state.products)
	const skeletons = [...new Array(8)].map(item => <CardSkeleton />)
	const renderProducts = products.map(item => (
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
			<div className={cl.content}>
				{status === 'loading' ? skeletons : renderProducts}
			</div>
		</section>
	)
}

export default Content
