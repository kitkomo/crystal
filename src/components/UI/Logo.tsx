import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.a`
	padding: 10px 78px 10px 24px;
	height: 100%;
	background-color: #fff;
	border-radius: 12px;

	font-weight: 700;
	font-size: 20px;

	display: flex;
	align-items: center;
`

const Logo: React.FC = () => {
	return (
		<StyledLogo href='/' className='logo'>
			crystal.
		</StyledLogo>
	)
}

export default Logo
