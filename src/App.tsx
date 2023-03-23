import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import ShopPage from './pages/ShopPage'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Cart/>
			<Routes>
				<Route path='/shop' element={<ShopPage />} />
				<Route path='/shop/:article' element={<Product />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App
