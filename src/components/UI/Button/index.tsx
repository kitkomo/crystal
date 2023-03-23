import React from 'react'

import cl from './Button.module.scss'

interface Props {
	children: React.ReactNode,
	onClick: () => void
	// icon?: string
}

const Button: React.FC<Props> = ({ children, ...props }) => {
	return <button className={cl.root} {...props}>{children}</button>
}

export default Button
