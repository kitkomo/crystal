import React from 'react'

import cl from './Input.module.scss'

const Input: React.FC = () => {
	return (
		<div className={cl.root}>
			<input type='text' placeholder='Search' />
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M9.58341 17.5C13.9557 17.5 17.5001 13.9556 17.5001 9.58333C17.5001 5.21108 13.9557 1.66666 9.58341 1.66666C5.21116 1.66666 1.66675 5.21108 1.66675 9.58333C1.66675 13.9556 5.21116 17.5 9.58341 17.5Z'
					stroke='#3B3B3B'
					stroke-width='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M18.3334 18.3333L16.6667 16.6667'
					stroke='#3B3B3B'
					stroke-width='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}

export default Input
