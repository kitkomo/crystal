import React from 'react'

import cl from './Loading.module.scss'

const Loading: React.FC = () => {
	return (
		<div className={cl.root}>
			<div className={cl.container}>
				<div className={cl.line}></div>
			</div>
		</div>
	)
}

export default Loading
