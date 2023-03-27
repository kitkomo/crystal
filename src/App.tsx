import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import ShopPage from './pages/ShopPage'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import FavoritesPage from './pages/FavoritesPage';

const App: React.FC = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Cart />
			<main className='main'>
				<Routes>
					<Route path='/' element={<ShopPage />} />
					<Route path='/:article' element={<Product />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
