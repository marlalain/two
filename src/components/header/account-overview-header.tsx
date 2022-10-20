import React from 'react';
import { Account } from '../account-overview';
import AccountOverviewHeader from './account-overview-header';

export const AccountOverview: React.FC<{ account: Account }> = ({
	account,
}) => {
	return (
		<div>
			<AccountOverviewHeader account={account} />
		</div>
	);
};

export default AccountOverview;
