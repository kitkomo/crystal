import React from 'react'
import { useParams } from 'react-router-dom'

import Categories from '../UI/Categories/Categories'
import Card from '../Card/Card'
import CardSkeleton from '../Card/CardSkeleton'

import { useGetAllProductsQuery } from '../../store/productsApi'

import cl from './Content.module.scss'
import { useAppSelector } from '../../store/hooks'
import { categories } from './../../store/slices/filterSlice'

const Content: React.FC = () => {
	const [currentCategory, setCurrentCategory] = React.useState('')
	const { data = [], isLoading } = useGetAllProductsQuery(currentCategory)
	const { category } = useAppSelector(state => state.filter)
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

	React.useEffect(() => {
		if (category === 0) {
			setCurrentCategory('')
		} else {
			setCurrentCategory(categories[category].toLowerCase())
		}
	}, [category])

	return (
		<div>
			<Categories />
			<div className={cl.content}>{isLoading ? skeletons : renderProducts}</div>
		</div>
	)
}

export default Content
