import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Content from './components/Content/Content'
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Banner />
			<section className='content'>
				<Routes>
					<Route path='/' element={<Content />} />
					<Route path='/:category' element={<Content />} />
					<Route path='/product/:article' element={<Product />} />
				</Routes>
			</section>
			<Footer />
		</div>
	)
}

export default App
