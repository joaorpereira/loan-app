import { rest } from "msw";

export const handlers = [
	rest.post(
		`https://clutch-interview-service.herokuapp.com/offers`,
		(req, res, ctx) => {
			return res(
				ctx.status(201),
				ctx.json({
					id: "string",
					monthlyPayments: 85.61,
					apr: 0.05
				})
			);
		}
	),

	rest.post(
		`https://clutch-interview-service.herokuapp.com/submissions`,
		(req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json({
					userId: "userId"
				})
			);
		}
	),

	rest.get(
		`https://clutch-interview-service.herokuapp.com/loans`,
		(req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json({
					loansAvailable: [
						{
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
						},
						{
							id: "3b64dad5-8066-40f1-9d42-5f9445018003",
							lender: "EXETER FINANCE LLC",
							apr: "17.64",
							balance: 25038,
							issueDate: "03/20",
							monthlyPayments: 600,
							originalAmount: 26477,
							originalMonths: 72,
							remainingMonths: 60,
							automobile: {
								isRefinanceable: true,
								id: "1fabbfc2-61d6-4467-bd66-157a51f4e85b",
								vin: "5XYKU4A22BG040985",
								year: "2018",
								make: "MERCEDES BENZ",
								model: "GLA CLASS 4D 4WD 250",
								trim: null,
								mileage: 46381,
								estimatedListPrice: null,
								registrationDate: "03/2020",
								state: null,
								imageSource:
									"https://media.chromedata.com/autoBuilderData/stockPhotos/26524.jpg"
							}
						},
						{
							id: "b8cc35ae-4c8b-4fae-bffe-0fae0ab54930",
							lender: "CAPITAL ONE AUTO FINAN",
							apr: "14.64",
							balance: 23320,
							issueDate: "06/19",
							monthlyPayments: 533,
							originalAmount: 26636,
							originalMonths: 78,
							remainingMonths: 58,
							automobile: {
								isRefinanceable: true,
								id: "0fc914fa-4d16-4274-970f-7710c4a6ef4b",
								vin: "WDBHA29G5XA724359",
								year: "2018",
								make: "CHEVROLET",
								model: "CAMARO 2D 2LT",
								mileage: 39649,
								estimatedListPrice: null,
								registrationDate: "04/2019",
								state: null,
								imageSource:
									"https://media.chromedata.com/autoBuilderData/stockPhotos/22443.jpg"
							}
						}
					]
				})
			);
		}
	)
];
