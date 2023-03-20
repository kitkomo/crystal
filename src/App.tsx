import React from 'react'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
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
