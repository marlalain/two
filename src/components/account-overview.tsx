import React from 'react';
import AccountOverviewHeader from './header/account-overview-header';

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
	return (
		<div>
			<AccountOverviewHeader account={account} />
		</div>
	);
};

export default AccountOverview;
