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

const ContactPage: React.FC = () => {
	return (
		<Contact>
			<h2>contacts</h2>
			<p>you can use the following methods to contact us</p>
			<div>
				<span>8 999 999-99-99</span>
				<span>
					for orders with delivery within the territory of the Russian
					Federation
				</span>
			</div>
		</Contact>
	)
}

export default ContactPage
