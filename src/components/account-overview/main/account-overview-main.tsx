import { SalesOverview } from '../account-overview';
import styled from 'styled-components';
import React from 'react';
import DataDisplay from './data-display';
import Sales from './sales';

const Main = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 1em 0.05em #e1e1e1; // TODO needs to be whiter
	width: 45%;
	border-radius: 0.3rem;
	overflow: hidden;

	@media (max-width: 1350px) {
		width: 70%;
	}

	@media (max-width: 1024px) {
		width: 90%;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const BottomPanel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	gap: 2px;
	background-color: #f3f3f3;
	border-top: 2px solid #f3f3f3;

	@media (max-width: 400px) {
		flex-direction: column;
		background-color: #fff;
	}
`;

const AccountOverviewMain: React.FC<{ overview: SalesOverview }> = ({ overview }) => {
	const uploadSuccess = (overview.successfulUploads / overview.uploads) * 100; // TODO: sanitize
	const linesSaved = (overview.linesSaved / overview.linesAttempted) * 100;

	return (
		<Main>
			<Sales uploads={overview.uploads} linesAttempted={overview.linesAttempted} />

			<BottomPanel>
				<DataDisplay percentage={uploadSuccess} text={'Upload Success'} />

				<DataDisplay percentage={linesSaved} text={'Lines Saved'} />
			</BottomPanel>
		</Main>
	);
};

export default AccountOverviewMain;
