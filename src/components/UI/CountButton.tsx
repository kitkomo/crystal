import React from 'react'
import styled from 'styled-components'

interface ICountButton {
	direction: 'up' | 'down',
	onClick?: () => void
}

const ArrowBtn = styled.button<ICountButton>`
	cursor: pointer;
	display: block;
	padding: 5px;
	background-color: transparent;
	border: none;

	svg {
		transform: rotate(
			${props => (props.direction === 'up' ? '-90deg' : '90deg')}
		);
	}
`

const CountButton: React.FC<ICountButton> = ({ direction , ...props}) => {
	return (
		<ArrowBtn direction={direction} {...props}>
			<svg
				height='25'
				viewBox='0 0 200 200'
				width='25'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M132.72,78.75l-56.5-56.5a9.67,9.67,0,0,0-14,0,9.67,9.67,0,0,0,0,14l56.5,56.5a9.67,9.67,0,0,1,0,14l-57,57a9.9,9.9,0,0,0,14,14l56.5-56.5C144.22,109.25,144.22,90.25,132.72,78.75Z' />
			</svg>
		</ArrowBtn>
	)
}

export default CountButton
