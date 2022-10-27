import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import styled from 'styled-components';

const Meta = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	color: #606060;
	gap: 1em;

	@media (max-width: 400px) {
		flex-direction: column;
	}
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-grow: 2;
	align-items: flex-start;
`;

const Placeholder = styled.div`
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

const Email = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5em;
`;

const Interaction = styled.a`
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

const Profile: FC<{ name: string; email: string; phone: string }> = ({ name, email, phone }) => {
	const formatPhone = (phone: string) => {
		// Example: 123 456 7890 -> 1234567890
		return `tel:+${phone.replace(' ', '')}`;
	};

	return (
		<Meta>
			<Placeholder>{name.charAt(0)}</Placeholder>

			<Card>
				<div>
					<ProfileName>{name}</ProfileName>
				</div>

				<BottomSection>
					<Email>
						<FontAwesomeIcon icon={faEnvelope} />
						<Interaction aria-label="Support Contact Email" href={`mailto:${email}`}>
							{email}
						</Interaction>
					</Email>

					<Interaction aria-label="Support Contact Phone" href={formatPhone(phone)}>
						{phone}
					</Interaction>
				</BottomSection>
			</Card>
		</Meta>
	);
};

export default Profile;
