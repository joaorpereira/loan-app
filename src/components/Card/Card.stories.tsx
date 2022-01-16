import { Meta, Story } from "@storybook/react";
import { LoansAvailableProps } from "screens/LoanConfirmation/LoanConfirmation";
import Card from ".";

export default {
	title: "Card",
	component: Card,
	argTypes: {
		title: {
			control: { type: "text" }
		}
	}
} as Meta;

export const data: LoansAvailableProps = {
	id: "b53d2b7d-febc-4f19-8633-7be9b0af02d1",
	lender: "SANTANDER CONSUMER USA",
	apr: "18.3",
	balance: 6509,
	issueDate: "08/19",
	monthlyPayments: 157,
	originalAmount: 6850,
	originalMonths: 72,
	remainingMonths: 66,
	automobile: {
		isRefinanceable: true,
		id: "da5c3b17-2e96-4b73-b652-415b3685302b",
		vin: "JT3HN86R0W0135727",
		year: "2019",
		make: "HONDA",
		model: "ACCORD",
		trim: null,
		mileage: 41855,
		estimatedListPrice: null,
		registrationDate: "10/2019",
		state: null,
		imageSource:
			"https://media.chromedata.com/autoBuilderData/stockPhotos/26404.jpg"
	}
};

export const Default: Story = (args) => <Card data={data} {...args} />;
