import React from 'react';
import { SupportContact } from '../account-overview';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 50%;

	@media (max-width: 1350px) {
		width: 70%;
	}

	@media (max-width: 1024px) {
		width: 100%;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		gap: 2em;
	}
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

const Contact = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 400px) {
		justify-content: center;
	}
`;

const ContactHeader = styled.h3`
	font-weight: bold;
	text-transform: uppercase;
	font-size: 1em;
	color: #a9a7a7;
`;

const Profile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	color: #606060;
	gap: 1em;

	@media (max-width: 400px) {
		flex-direction: column;
	}
`;

const ProfileCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-grow: 2;
	align-items: flex-start;
`;

const ProfilePlaceholder = styled.div`
	background-color: #f9cf02;
	color: #070600;
	cursor: default;
	user-select: none;
	font-weight: bold;
	font-size: 1.5em;
	border-radius: 0.25em;
	padding: 0.55em 0.85em;

	@media (max-width: 400px) {
		align-self: center;
	}
`;

const ProfileName = styled.span`
	font-weight: 700;
`;

const ProfileEmail = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5em;
`;

const ProfileInteraction = styled.a`
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

const BottomSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2em;
`;

export const AccountOverviewHeader: React.FC<{ contact: SupportContact }> = ({ contact }) => {
	const formatPhone = (phone: string) => {
		return `tel:+${phone.replace(' ', '')}`;
	};

	const phone = formatPhone(contact.phone);

	return (
		<Header>
			<TitleWrapper>
				<Title>Account Overview</Title>
			</TitleWrapper>

			<div>
				<Contact>
					<ContactHeader>Your Feefo Support Contact</ContactHeader>
				</Contact>

				<Profile>
					<ProfilePlaceholder>{contact.name.charAt(0)}</ProfilePlaceholder>

					<ProfileCard>
						<div>
							<ProfileName>{contact.name}</ProfileName>
						</div>

						<BottomSection>
							<ProfileEmail>
								<FontAwesomeIcon icon={faEnvelope} />
								<ProfileInteraction aria-label="Support Contact Email" href={`mailto:${contact.email}`}>
									{contact.email}
								</ProfileInteraction>
							</ProfileEmail>

							<ProfileInteraction aria-label="Support Contact Phone" href={phone}>
								{contact.phone}
							</ProfileInteraction>
						</BottomSection>
					</ProfileCard>
				</Profile>
			</div>
		</Header>
	);
};

export default AccountOverviewHeader;
