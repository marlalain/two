import React from 'react';
import { default as Header } from './header/account-overview-header';
import styled from 'styled-components';
import { default as Main } from './main/account-overview-main';

export type Account = {
	supportContact: SupportContact;
	salesOverview: SalesOverview;
};

export type SupportContact = {
	name: string;
	email: string;
	phone: string;
};

export type SalesOverview = {
	uploads: number;
	successfulUploads: number;
	linesAttempted: number;
	linesSaved: number;
	lastUploadDate: number;
};

const CenterWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Overview = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3em;
	align-items: center;
	width: 100vw;
`;

export const AccountOverview: React.FC<{ account: Account }> = ({ account }) => {
	return (
		<CenterWrapper>
			<Overview>
				<Header contact={account.supportContact} />
				<Main overview={account.salesOverview} />
			</Overview>
		</CenterWrapper>
	);
};

export default AccountOverview;
