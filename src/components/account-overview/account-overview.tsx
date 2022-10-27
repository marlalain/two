import React from 'react';
import { default as Header } from './header/account-overview-header';
import styled from 'styled-components';
import { default as Main } from './main/account-overview-main';
import { z } from 'zod';

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
	height: 95vh;
`;

const CenterError = styled(CenterWrapper)`
	flex-direction: column;
`;

const ErrorTitle = styled.h1`
	font-size: 2rem;
	color: #ff0000;
`;

const Overview = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3em;
	align-items: center;
	width: 100vw;
`;

const accountSchema = z.object({
	supportContact: z.object({
		name: z.string(),
		email: z.string().email(),
		phone: z.string().regex(/^\d{3} \d{4} \d{4}$/, 'Phone number must be in the format 000 0000 0000'),
	}),
	salesOverview: z.object({
		uploads: z.number().nonnegative(),
		successfulUploads: z.number().nonnegative(),
		linesAttempted: z.number().nonnegative(),
		linesSaved: z.number().nonnegative(),
		lastUploadDate: z.number().nonnegative(),
	}),
});

export const AccountOverview: React.FC<{ account: Account }> = ({ account }) => {
	const accountParse = accountSchema.safeParse(account);

	if (!accountParse.success) {
		const errors = accountParse.error.issues.map((issue) => issue.message);
		return (
			<CenterError>
				<ErrorTitle>Invalid Account</ErrorTitle>

				<p>
					{errors.map((error, idx) => (
						<span key={idx}>
							{error} <br />
						</span>
					))}
				</p>
			</CenterError>
		);
	}

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
