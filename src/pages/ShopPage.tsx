import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Banner from '../components/Banner/Banner'
import Content from '../components/Content/Content'

const ShopPage: React.FC = () => {
	return (
		<>
			<Banner />
			<section className='content'>
				<Content />
			</section>
		</>
	)
}

export default ShopPage
