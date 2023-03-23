import React from 'react'
import styled from 'styled-components'

const Button = styled.button<IButton>`
	display: block;
	cursor: pointer;
	width: 30px;
	height: 16px;
	background-color: transparent;
	border: none;

	span {
		position: absolute;
		left: 0;
		display: block;
		width: 100%;
		height: 2px;
		background-color: #000000;
		left: 30%;

		&:nth-child(1) {
			top: 0;
			transform: rotate(45deg) translateY(11px);
		}
		&:nth-child(2) {
			top: 100%;
			transform: rotate(-45deg) translateY(-12px);
		}
	}
`

interface IButton {
	className?: any
	onClick?: (event: React.MouseEvent) => void
}

const CloseBtn: React.FC<IButton> = ({ className, ...props }) => {
	return (
		<Button className={className} {...props}>
			<span></span>
			<span></span>
		</Button>
	)
}

export default CloseBtn
