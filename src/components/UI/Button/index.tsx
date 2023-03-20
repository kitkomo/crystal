import React from 'react'

import cl from './Button.module.scss'

interface Props {
	children: React.ReactNode
	// icon?: string
}

const Button: React.FC<Props> = ({ children }) => {
	return <button className={cl.root}>{children}</button>
}

export default Button
