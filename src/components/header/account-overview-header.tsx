import React from 'react';
import { Account } from '../account-overview';

export const AccountOverviewHeader: React.FC<{ account: Account }> = ({
	account,
}) => {
	return (
		<div>
			<div>
				<h1>Account Overview</h1>
			</div>
			<div>
				<div>
					<span>Your Feefo Support Contact</span>
				</div>
				<div>
					<span>{account.supportContact.name.charAt(0)}</span>
					<div>
						<span>{account.supportContact.name}</span>
						<span>{account.supportContact.email}</span>
					</div>
					<span>{account.supportContact.phone}</span>
				</div>
			</div>
		</div>
	);
};

export default AccountOverviewHeader;
