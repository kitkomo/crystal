import React from 'react'

import Categories from '../Categories/Categories'
import Card from '../Card/Card'

import cl from './Content.module.scss'

import data from '../../assets/data.json'

const Content: React.FC = () => {
	return (
		<section className={cl.root}>
			<Categories />
			<div className={cl.content}>
				{data.map(item => (
					<Card
						key={item.id}
						imageUrl={item.imageUrl}
						name={item.name}
						type={item.type}
						// price={item.price}
					/>
				))}
			</div>
		</section>
	)
}

export default Content
