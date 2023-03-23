import React from 'react'
import { Link } from 'react-router-dom'

import cl from './Logo.module.scss'

const Logo: React.FC = () => {
	return (
		<Link to='/shop' className={cl.logo}>
			crystal.
		</Link>
	)
}

export default Logo
