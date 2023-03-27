import React from 'react'
import styled from 'styled-components'

import cl from './PrimaryButton.module.scss'

const PrimaryBtn = styled.button<PrimaryButton>`
	width: ${props => props.width ? props.width + 'px' : '100%'};
`

interface PrimaryButton {
	onClick?: () => void,
	children: React.ReactNode,
	width?: string
}

const PrimaryButton:React.FC<PrimaryButton> = ({children, ...props}) => {
	return (
		<PrimaryBtn className={cl.root} {...props}>
			{children}
		</PrimaryBtn>
	)
}

export default PrimaryButton
