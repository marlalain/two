import React, { FC } from 'react';
import { SupportContact } from '../account-overview';
import styled from 'styled-components';
import Title from './title';
import Contact from './contact';

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 50%;

	@media (max-width: 1350px) {
		width: 70%;
	}

	@media (max-width: 1024px) {
		width: 100%;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		gap: 2em;
	}
`;
export const AccountOverviewHeader: FC<{ contact: SupportContact }> = ({ contact }) => {
	return (
		<Header>
			<Title text="Account Overview" />

			<Contact name={contact.name} email={contact.email} phone={contact.phone} />
		</Header>
	);
};

export default AccountOverviewHeader;
