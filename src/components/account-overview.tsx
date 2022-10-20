import React from 'react';
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
	const Meta = styled.div`
		background-color: lightblue;
	`;

	return (
		<Meta>
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
		</Meta>
	);
};

export default AccountOverview;
