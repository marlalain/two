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

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
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
	font-weight: bold;
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

const SupportProfileCard = styled.div`
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

const SupportProfileInteraction = styled.a`
	color: #606060;
	text-decoration: none;

	&:hover {
		text-decoration: dashed underline;
	}

	&:visited,
	&:focus-visible {
		color: #606060;
		outline: 1px dashed #606060;
	}
`;

const SupportProfileBottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2em;
`;

export const AccountOverviewHeader: React.FC<{ account: Account }> = ({ account }) => {
	const formatPhone = (phone: string) => {
		return `tel:+${phone.replace(' ', '')}`;
	};

	const phone = formatPhone(account.supportContact.phone);

	return (
		<Header>
			<TitleWrapper>
				<Title>Account Overview</Title>
			</TitleWrapper>
			<div>
				<SupportContact>
					<SupportContactHeader>Your Feefo Support Contact</SupportContactHeader>
				</SupportContact>
				<SupportProfile>
					<IconProfilePlaceholder>{account.supportContact.name.charAt(0)}</IconProfilePlaceholder>

					<SupportProfileCard>
						<div>
							<SupportProfileName>{account.supportContact.name}</SupportProfileName>
						</div>

						<SupportProfileBottom>
							<SupportProfileEmail>
								<FontAwesomeIcon icon={faEnvelope} />
								<SupportProfileInteraction
									aria-label="Support Contact Email"
									href={`mailto:${account.supportContact.email}`}
								>
									{account.supportContact.email}
								</SupportProfileInteraction>
							</SupportProfileEmail>

							<SupportProfileInteraction aria-label="Support Contact Phone" href={phone}>
								{account.supportContact.phone}
							</SupportProfileInteraction>
						</SupportProfileBottom>
					</SupportProfileCard>
				</SupportProfile>
			</div>
		</Header>
	);
};

export default AccountOverviewHeader;
