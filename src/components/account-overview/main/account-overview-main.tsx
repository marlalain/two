import { Account } from '../account-overview';
import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faUpload } from '@fortawesome/free-solid-svg-icons';

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

	return (
		<Meta>
			<Percentage color={color}>{`${percentage}%`}</Percentage>
			<Text>{text}</Text>
		</Meta>
	);
};

const Main = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 1em 0.05em #e1e1e1; // TODO needs to be whiter
	width: 40%; // FIXME
	border-radius: 0.5em;
`;

const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const BottomPanel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	gap: 2px;
	background-color: #f3f3f3;
	border-top: 2px solid #f3f3f3;
`;

const Sales = styled.div`
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

const SalesText = styled.span`
	color: #9b9898;
`;

const Bold = styled.span`
	color: #5d5d5d;
	font-weight: 600;
`;

const AccountOverviewMain: React.FC<{ account: Account }> = ({ account }) => {
	const uploadSuccess = (account.salesOverview.successfulUploads / account.salesOverview.uploads) * 100;
	const linesSaved = (account.salesOverview.linesSaved / account.salesOverview.linesAttempted) * 100;

	return (
		<Main>
			<Sales>
				<TopBar>
					<h2>
						<FontAwesomeIcon fontSize="20px" color="#3eb1eb" icon={faUpload} /> Sales
					</h2>

					<span>
						<FontAwesomeIcon fontSize="20px" color="#bfbbbb" icon={faCircleInfo} />
					</span>
				</TopBar>

				<SalesText>
					You had <Bold>{account.salesOverview.uploads} uploads</Bold> and{' '}
					<Bold>{account.salesOverview.linesAttempted}</Bold> lines added.
				</SalesText>
			</Sales>

			<BottomPanel>
				<DataDisplay percentage={uploadSuccess} text={'Upload Success'} />

				<DataDisplay percentage={linesSaved} text={'Lines Saved'} />
			</BottomPanel>
		</Main>
	);
};

export default AccountOverviewMain;
