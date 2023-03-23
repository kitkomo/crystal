import React from 'react'

import cl from './PrimaryButton.module.scss'

interface PrimaryButton {
	onClick?: () => void,
	children: React.ReactNode
}

const PrimaryButton:React.FC<PrimaryButton> = ({children, ...props}) => {
	return (
		<button className={cl.root} {...props}>
			{children}
		</button>
	)
}

export default PrimaryButton
