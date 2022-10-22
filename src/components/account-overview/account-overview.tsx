import React from 'react';
import { default as Header } from './header/account-overview-header';
import styled from 'styled-components';
import { default as Main } from './main/account-overview-main';

export type Account = {
	supportContact: {
		name: string;
		email: string;
		phone: string;
	};
	salesOverview: {
		uploads: number;
		successfulUploads: number;
		linesAttempted: number;
		linesSaved: number;
		lastUploadDate: number;
	};
};

export const AccountOverview: React.FC<{ account: Account }> = ({ account }) => {
	const Overview = styled.div`
		background-color: #f4f4f4;
		display: flex;
		flex-direction: column;
		gap: 3em;
		margin-top: 5em;
		padding: 2em 0em;
		align-items: center;
		justify-content: space-between;
	`;

	return (
		<Overview>
			<Header account={account} />
			<Main account={account} />
		</Overview>
	);
};

export default AccountOverview;
