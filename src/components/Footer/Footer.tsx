import React from 'react'

import Logo from '../UI/Logo'

import cl from './Footer.module.scss'

const Footer:React.FC = () => {
	return (
		<footer className={cl.root}>
			<Logo/>
			<p className={cl.copyright}>Copyright © 2023 Crystal LLC. All rights reserved. Crystal is a registered financial technology company. 1309 Kitkomo Avenue Ste 1337 SwagStreet, NY 99999.</p>
		</footer>
	)
}

export default Footer