import React from 'react'
import styled from 'styled-components'

const Contact = styled.section`
	h2 {
		font-size: 40px;
		margin: 20px 0 0;
	}

	p {
		font-size: 20px;
		font-weight: 500;
		margin: 0;
	}

	div {
		margin: 20px 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-weight: 500;

		span:first-child {
			font-size: 30px;
		}
		span:last-child {
			color: grey;
		}
	}
`

const AboutPage: React.FC = () => {
	return (
		<div className='content-wrapper'>
			<section className='content'>
				<Contact>
					<h2>about</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						officia blanditiis iure voluptatem, corporis molestias ex
					</p>
					<div>
						<span>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Perspiciatis quo facilis iure, hic quidem quam, error possimus
							perferendis, deleniti dolore culpa? Obcaecati aperiam, nihil
							molestias omnis consequatur id modi recusandae!
						</span>
					</div>
				</Contact>
			</section>
		</div>
	)
}

export default AboutPage
