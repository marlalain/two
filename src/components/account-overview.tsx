import React from 'react';
import styled from 'styled-components';

export type Account = {
	supportContact: {
		name: string;
		email: string;
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
			<FontAwesomeIcon icon={faHardHat} />
			Build your components here
		</Meta>
	)
}

export default AccountOverview;
