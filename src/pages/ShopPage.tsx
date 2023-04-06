import React from 'react'
import { useGetAllProductsQuery } from '../store/productsApi'
import { useAppSelector } from '../store/hooks'
import { categories } from './../store/slices/filterSlice'
import Banner from '../components/Banner/Banner'
import Content from '../components/Content/Content'

const ShopPage: React.FC = () => {
	const [currentCategory, setCurrentCategory] = React.useState('')
	const { data = [], isFetching } = useGetAllProductsQuery(currentCategory)
	const { category } = useAppSelector(state => state.filter)

	React.useEffect(() => {
		if (category === 0) {
			setCurrentCategory('')
		} else {
			setCurrentCategory(categories[category].toLowerCase())
		}
	}, [category])

	return (
		<>
			<Banner />
			<section className='content'>
				<Content data={data} isLoading={isFetching} />
			</section>
		</>
	)
}

export default ShopPage
