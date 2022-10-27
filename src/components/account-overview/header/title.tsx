import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
`;

const Text = styled.h1`
	color: #484446;
	align-self: center;
	font-weight: 400;
`;

const Title: FC<{ text: string }> = ({ text }) => {
	return (
		<Wrapper>
			<Text>{text}</Text>
		</Wrapper>
	);
};

export default Title;
