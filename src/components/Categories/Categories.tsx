import React from 'react'

import cl from './Categories.module.scss'

const categories: string[] = [
	'All products',
	'Perfume',
	'Skinshare',
	// 'Haircare',
	// 'Makeup',
	// 'Bath & Body',
]

const Categories: React.FC = () => {
	return (
		<ul className={cl.filterBar}>
				{categories.map(str => (
					<li className={cl.filterBar__item}>
						<button className={cl.filterBar__button}>{str}</button>
					</li>
				))}
			</ul>
	)
}

export default Categories