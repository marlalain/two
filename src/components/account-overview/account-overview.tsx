import React from 'react';
import AccountOverviewHeader from './header/account-overview-header';
import styled from 'styled-components';

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

export const AccountOverview: React.FC<{ account: Account }> = ({
	account,
}) => {
	const Overview = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 5em;
		background-color: #f4f4f4;
		padding: 2em 0em;
	`;

	return (
		<Overview>
			<AccountOverviewHeader account={account} />
		</Overview>
	);
};

export default AccountOverview;
