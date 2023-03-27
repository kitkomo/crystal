import React from 'react'

import cl from './About.module.scss'

const About: React.FC = () => {
	return (
		<div>
			<h1 className='title'>about</h1>
			<p className='subtitle'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
				incidunt.
			</p>
			<div className={cl.text}>
				<p className='text'>
					Crystal was brought into the world through a progression of spring-up
					stores in 2014. We needed to offer enhanced shopping background and
					inventive motivation and associate with those with a similar vision.
					Today our objective continues as before.
				</p>
				<p className='text'>
					In 2015, we opened the ways to our leader store in Chicago, US. In
					this space, we work crosswise over various mediums, from fashion and
					photography to accommodation. There’s nothing we won’t do. Joint
					efforts are constantly invited and sustained.
				</p>
				<p className='text'>
					Summer 2016 saw the dispatch of ‘Organization Name’ ‘s eponymous mark,
					which centers around quality, wearability, and present-day
					effortlessness. We cherish the sentiment of unisex garments, so we
					plan in light of the two sexual orientations. The mark exists outside
					of fashion seasons. We will continue adding to the line consistently,
					so keep your eyes stripped.
				</p>
				<p className='text'>
					2018 imprints the beginning of our first worldwide endeavor. Venturing
					into the US advertise, ‘Organization Name’ has arrived at a standout
					amongst L.A.’s most looked-for retail areas, Platform. An energizing
					new section is standing by, exhibiting our most cherished British
					brands and banding together with any semblance of Psychic Sisters.
				</p>
			</div>
		</div>
	)
}

export default About
