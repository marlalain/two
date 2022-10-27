import './App.css';
import AccountOverview, { Account } from './components/account-overview/account-overview';

function App() {
	const account: Account = {
		supportContact: {
			name: 'Support',
			email: 'support@feefo.com',
			phone: '020 3362 4208',
		},
		salesOverview: {
			uploads: 8,
			successfulUploads: 3,
			linesAttempted: 20,
			linesSaved: 4,
			lastUploadDate: 1605001226079,
		},
	};

	return <AccountOverview account={account} />;
}

export default App;
