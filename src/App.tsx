import React from 'react'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

import { useAppDispatch } from './store/hooks';
import { fetchProducts } from './store/slices/productsSlice'

const App: React.FC = () => {
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<div className='app-wrapper'>
			<Header />
			<Banner />
			<Content/>
			<Footer/>
		</div>
	)
}

export default App
