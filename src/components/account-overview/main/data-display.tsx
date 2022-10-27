import styled from 'styled-components';
import React from 'react';

const Meta = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 1em;
	background-color: #fdfdfd;
	width: 100%;
`;

const Percentage = styled.span`
	color: ${(props) => props.color};
	font-size: 2.5em;
	font-weight: 700;
`;

const Text = styled.span`
	text-transform: uppercase;
	color: #9b9898;
	font-weight: 500;
	letter-spacing: 0.05em;
`;

const DataDisplay: React.FC<{
	percentage: number;
	text: string;
}> = ({ percentage, text }) => {
	const isPositive = percentage > 0;
	const color = isPositive ? '#21ab55' : '#ab2132';
	const textId = `${text.replace(' ', '-')}-text`;

	return (
		<Meta>
			<Percentage color={color} aria-describedby={textId}>{`${percentage}%`}</Percentage>
			<Text id={textId}>{text}</Text>
		</Meta>
	);
};

export default DataDisplay;
