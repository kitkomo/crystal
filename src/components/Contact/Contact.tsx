import React from 'react'

import cl from './Contact.module.scss'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'

const Contact: React.FC = () => {
	return (
		<div className={cl.root}>
			<h1 className='title'>contact</h1>
			<p className='subtitle'>
				you can use the following methods to contact us
			</p>
			
			<div className={cl.block}>
				<a href='tel: 89999999999' className={cl.block__title}>
					8 999 999-99-99
				</a>
				<p className={cl.block__info}>
					for orders with delivery within the country
				</p>
				<a href='tel: 89999999999'>
					<PrimaryButton width='280'>call us</PrimaryButton>
				</a>
			</div>
			<div className={cl.blocks}>

		
			<div >
				<span className={cl.block__title}>the development division</span>
				<p className={cl.block__info}>
					contact about the opening of new stores
				</p>
				<a className={cl.block__connect} href='mail: fakeemail@mail.com'>
					<span>email:</span> fakeemail@mail.com
				</a>
			</div>
			<div >
				<span className={cl.block__title}>commercial division</span>
				<p className={cl.block__info}>
					To offer a new brand establishment, you need to submit an application
				</p>
				<a className={cl.block__connect} href='mail: fakeemail@mail.com'>
					<span>email:</span> fakeemail@mail.com
				</a>
			</div>
			<div >
				<span className={cl.block__title}>PR division</span>
				<p className={cl.block__info}>for media inquiries</p>
				<a className={cl.block__connect} href='mail: fakeemail@mail.com'>
					<span>email:</span> fakeemail@mail.com
				</a>
			</div>
			<div >
				<span className={cl.block__title}>corporate orders</span>
				<p className={cl.block__info}>
					gift cards, beauty boxes and bulk orders for legal entities.
				</p>
				<a className={cl.block__connect} href='mail: fakeemail@mail.com'>
					<span>email:</span> fakeemail@mail.com
				</a>
			</div>
				</div>
		</div>
	)
}

export default Contact
