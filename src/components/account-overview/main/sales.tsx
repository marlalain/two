import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faUpload } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import styled from 'styled-components';

const Meta = styled.div`
	color: #5d5d5d;
	grid-area: sales;
	background-color: #fff;
	font-size: 0.9em;
	padding: 0.1em 1.5em 1.75em 1.75em;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 0.2em;
`;

const Heading = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const SalesTitle = styled.h2`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.4em;
`;

const SalesText = styled.span`
	color: #9b9898;
`;

const BoldText = styled.span`
	color: #5d5d5d;
	font-weight: 600;
`;

const Bold = (props: { children: any }) => {
	return <BoldText role="mark">{props.children}</BoldText>;
};

const Sales: FC<{ uploads: number; linesAttempted: number }> = ({ uploads, linesAttempted }) => {
	return (
		<Meta>
			<Heading>
				<SalesTitle>
					<FontAwesomeIcon fontSize="20px" color="#3eb1eb" icon={faUpload} /> <span>Sales</span>
				</SalesTitle>

				<span>
					<FontAwesomeIcon fontSize="20px" color="#bfbbbb" icon={faCircleInfo} />
				</span>
			</Heading>

			<SalesText>
				You had <Bold>{uploads} uploads</Bold> and <Bold>{linesAttempted}</Bold> lines added.
			</SalesText>
		</Meta>
	);
};

export default Sales;
