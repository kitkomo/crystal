import React from 'react'

import Categories from '../UI/Categories/Categories'
import Card from '../Card/Card'
import CardSkeleton from '../Card/CardSkeleton'

import cl from './Content.module.scss'
import { IProduct } from '../../models/IProduct'

interface IContent {
	data: IProduct[]
	isLoading?: boolean
}

const Content: React.FC<IContent> = ({ data, isLoading }) => {
	const skeletons = [...new Array(8)].map((_, index) => (
		<CardSkeleton key={index} />
	))
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
