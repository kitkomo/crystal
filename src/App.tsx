import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import ShopPage from './pages/ShopPage'

const App: React.FC = () => {
	return (
		<div className='app-wrapper'>
			<Header />

			<Routes>
				<Route path='/' element={<ShopPage />} />
				<Route path='/product/:article' element={<Product />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App
