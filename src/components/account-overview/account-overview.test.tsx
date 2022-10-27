import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountOverview, { Account } from './account-overview';

// There's no point to test this component, it just uses `zod` to validate the account data.
test('smoke test', () => {
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

	render(<AccountOverview account={account} />);
	const linkElement = screen.getByText('Support');
	expect(linkElement).toBeInTheDocument();
});

test('smoke test 2', () => {
	const account: Account = {
		supportContact: {
			name: 'Support',
			email: 'supportfeefo.com', // <- invalid email
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

	render(<AccountOverview account={account} />);
	const linkElement = screen.getByText('Invalid email');
	expect(linkElement).toBeInTheDocument();
});
