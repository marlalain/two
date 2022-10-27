import React, { FC } from 'react';
import styled from 'styled-components';
import Profile from './profile';

const Meta = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 400px) {
		justify-content: center;
	}
`;

const Header = styled.h3`
	font-weight: bold;
	text-transform: uppercase;
	font-size: 1em;
	color: #a9a7a7;
`;

const Contact: FC<{ name: string; email: string; phone: string }> = ({ name, email, phone }) => {
	return (
		<div>
			<Meta>
				<Header>Your Feefo Support Contact</Header>
			</Meta>

			<Profile name={name} email={email} phone={phone} />
		</div>
	);
};

export default Contact;
