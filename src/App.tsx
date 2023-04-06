import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector } from './store/hooks'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import ShopPage from './pages/ShopPage'
import Footer from './components/Footer/Footer'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import FavoritesPage from './pages/FavoritesPage'
import ProductPage from './pages/ProductPage'

const App: React.FC = () => {
	const { open } = useAppSelector(state => state.cart)
	return (
		<div className='app-wrapper'>
			<Header />
			<CSSTransition in={open} timeout={150} unmountOnExit classNames='cart'>
				<Cart />
			</CSSTransition>
			<main className='main'>
				<Routes>
					<Route path='/' element={<ShopPage />} />
					<Route path='/:article' element={<ProductPage />} />
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
