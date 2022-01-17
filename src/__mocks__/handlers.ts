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
	)
];
