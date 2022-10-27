import React from 'react';
import { Account } from '../account-overview';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 40%;
`;
const Title = styled.h1`
	color: #484446;
	align-self: center;
	font-weight: 400;
`;

const SupportContact = styled.div`
	display: flex;
	flex-direction: row;
`;

const SupportContactHeader = styled.h3`
	font-weight: bold; // FIXME: Not bold
	text-transform: uppercase;
	font-size: 1em;
	color: #a9a7a7;
`;

const SupportProfile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	color: #606060;
	gap: 1em;
`;

const SupportProfileLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-grow: 2;
	align-items: flex-start;
`;

const IconProfilePlaceholder = styled.div`
	background-color: #f9cf02;
	color: #070600;
	cursor: default;
	user-select: none;
	font-weight: bold;
	font-size: 1.5em;
	border-radius: 0.25em;
	padding: 0.55em 0.85em;
`;

const SupportProfileName = styled.span`
	font-weight: 700;
`;

const SupportProfileEmail = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5em;
`;

const SupportProfilePhone = styled.span`
	align-self: flex-end;
`;

const SupportProfileBottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2em;
`;

export const AccountOverviewHeader: React.FC<{ account: Account }> = ({ account }) => {
	return (
		<Header>
			<div>
				<Title>Account Overview</Title>
			</div>
			<div>
				<SupportContact>
					<SupportContactHeader>Your Feefo Support Contact</SupportContactHeader>
				</SupportContact>
				<SupportProfile>
					<IconProfilePlaceholder>{account.supportContact.name.charAt(0)}</IconProfilePlaceholder>

					<SupportProfileLeft>
						<div>
							<SupportProfileName>{account.supportContact.name}</SupportProfileName>
						</div>

						<SupportProfileBottom>
							<SupportProfileEmail>
								<FontAwesomeIcon icon={faEnvelope} />
								{account.supportContact.email}
							</SupportProfileEmail>

							<SupportProfilePhone>{account.supportContact.phone}</SupportProfilePhone>
						</SupportProfileBottom>
					</SupportProfileLeft>
				</SupportProfile>
			</div>
		</Header>
	);
};

export default AccountOverviewHeader;
