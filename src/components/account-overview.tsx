import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export const AccountOverview = ({data}: any) => {
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
