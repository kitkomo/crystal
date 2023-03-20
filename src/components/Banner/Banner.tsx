import React from 'react'

import cl from './Banner.module.scss'

const Banner: React.FC = () => {
	return (
		<div className={cl.root}>
			<h1 className={cl.title}>Explore our shop</h1>
			<p className={cl.descr}>
				From skincare to makeup, our platform features a wide range of products
				that cater to all your beauty needs. We strive to provide our customers
				with a luxury shopping experience, from browsing through our carefully
				selected products to receiving them in our signature packaging. Shop
				with us for the ultimate in beauty luxury.
			</p>
		</div>
	)
}

export default Banner
