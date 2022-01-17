import React from "react";

import userEvent from "@testing-library/user-event";
import { screen, within, waitFor } from "@testing-library/react";
import LoanInformation from ".";
import { renderProvider } from "tests/helpers";

import { rest } from "msw";
import { server } from "__mocks__/server";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedNavigate
}));

describe("<LoanInformation/>", () => {
	it("should have header component 'Submit'", () => {
		renderProvider(<LoanInformation />);
		expect(screen.getByText("Loan Information")).toBeInTheDocument();
	});

	it("should have button 'Submit Application'", () => {
		renderProvider(<LoanInformation />);
		expect(
			screen.getByRole("button", { name: /Submit Application/i })
		).toBeInTheDocument();
	});

	it("should render content information after filled loan purpose, total loan amount and loan term fields", async () => {
		renderProvider(<LoanInformation />);

		const selects = await screen.findAllByLabelText(/Loan purpose/i);
		expect(selects[0]).toBeInTheDocument();
		expect(selects[1]).toBeInTheDocument();

		userEvent.click(selects[0]);
		const popupSelectOne = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectOne).getByText(/Debt Consolidation/i));

		const input: HTMLInputElement = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
		userEvent.type(input, "1000");
		expect(input).toHaveValue("$1,000");

		userEvent.click(selects[1]);
		const popupSelectTwo = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectTwo).getByText(/12 months/i));

		await waitFor(() =>
			expect(screen.getByText(/Monthly payment/i)).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByText(/APR/i)).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText(/85.61/i)).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText(/0.05%/i)).toBeInTheDocument());
	});

	it("should render content information after filled loan purpose, total loan amount and loan term fields", async () => {
		renderProvider(<LoanInformation />);

		const selects = await screen.findAllByLabelText(/Loan purpose/i);
		expect(selects[0]).toBeInTheDocument();
		expect(selects[1]).toBeInTheDocument();

		userEvent.click(selects[0]);
		const popupSelectOne = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectOne).getByText(/Debt Consolidation/i));

		const input: HTMLInputElement = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
		userEvent.type(input, "1000");
		expect(input).toHaveValue("$1,000");

		userEvent.click(selects[1]);
		const popupSelectTwo = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectTwo).getByText(/12 months/i));

		await waitFor(() =>
			expect(screen.getByText(/Monthly payment/i)).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByText(/APR/i)).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText(/85.61/i)).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText(/0.05%/i)).toBeInTheDocument());
	});

	it("should display error message when 'loan purpose' field is not filled", async () => {
		renderProvider(<LoanInformation />);

		const selects = await screen.findAllByLabelText(/Loan purpose/i);
		expect(selects[0]).toBeInTheDocument();
		expect(selects[1]).toBeInTheDocument();

		userEvent.click(selects[0]);
		const popupSelectOne = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectOne).getByText(/Debt Consolidation/i));

		userEvent.click(selects[1]);
		const popupSelectTwo = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectTwo).getByText(/12 months/i));

		const button = screen.getByRole("button", { name: /Submit Application/i });
		userEvent.click(button);
		expect(screen.getByText(/Please review your fields/i)).toBeInTheDocument();
	});

	it("should display error message when 'loan term' field is not filled", async () => {
		renderProvider(<LoanInformation />);

		const input: HTMLInputElement = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
		userEvent.type(input, "1000");
		expect(input).toHaveValue("$1,000");

		const selects = await screen.findAllByLabelText(/Loan purpose/i);
		userEvent.click(selects[1]);
		const popupSelectTwo = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectTwo).getByText(/12 months/i));

		const button = screen.getByRole("button", { name: /Submit Application/i });
		userEvent.click(button);
		expect(screen.getByText(/Please review your fields/i)).toBeInTheDocument();
	});

	it("should display error message when 'total loan amount' field is not filled", async () => {
		renderProvider(<LoanInformation />);

		const input: HTMLInputElement = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
		userEvent.type(input, "1000");
		expect(input).toHaveValue("$1,000");

		const selects = await screen.findAllByLabelText(/Loan purpose/i);
		userEvent.click(selects[0]);
		const popupSelectOne = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectOne).getByText(/Debt Consolidation/i));

		const button = screen.getByRole("button", { name: /Submit Application/i });
		userEvent.click(button);
		expect(screen.getByText(/Please review your fields/i)).toBeInTheDocument();
	});

	it("should display error message when getting 500 status code when getting content data", async () => {
		server.resetHandlers(
			rest.post(
				`https://clutch-interview-service.herokuapp.com/offers`,
				(req, res, ctx) => {
					return res(ctx.status(500));
				}
			),
			rest.post(
				`https://clutch-interview-service.herokuapp.com/submissions`,
				(req, res, ctx) => {
					return res(ctx.status(500));
				}
			)
		);

		renderProvider(<LoanInformation />);

		const selects = await screen.findAllByLabelText(/Loan purpose/i);
		expect(selects[0]).toBeInTheDocument();
		expect(selects[1]).toBeInTheDocument();

		userEvent.click(selects[0]);
		const popupSelectOne = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectOne).getByText(/API error/i));

		const input: HTMLInputElement = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
		userEvent.type(input, "1000");
		expect(input).toHaveValue("$1,000");

		userEvent.click(selects[1]);
		const popupSelectTwo = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectTwo).getByText(/12 months/i));

		await waitFor(() =>
			expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument()
		);
	});

	it("should redirect the user to '/confirmation' path after filled all fields and click on 'Submit Application' button ", async () => {
		renderProvider(<LoanInformation />);

		const selects = await screen.findAllByLabelText(/Loan purpose/i);
		expect(selects[0]).toBeInTheDocument();
		expect(selects[1]).toBeInTheDocument();

		userEvent.click(selects[0]);
		const popupSelectOne = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectOne).getByText(/Debt Consolidation/i));

		const input: HTMLInputElement = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
		userEvent.type(input, "1000");
		expect(input).toHaveValue("$1,000");

		userEvent.click(selects[1]);
		const popupSelectTwo = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectTwo).getByText(/12 months/i));

		await waitFor(() =>
			expect(screen.getByText(/Monthly payment/i)).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByText(/APR/i)).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText(/85.61/i)).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText(/0.05%/i)).toBeInTheDocument());

		const button = screen.getByRole("button", { name: /Submit Application/i });
		userEvent.click(button);

		await waitFor(() =>
			expect(mockedNavigate).toHaveBeenCalledWith("/confirmation")
		);
	});

	it("should display error message when getting 500 status code when 'Submit Application'", async () => {
		server.resetHandlers(
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
					return res(ctx.status(500));
				}
			)
		);

		renderProvider(<LoanInformation />);

		const selects = await screen.findAllByLabelText(/Loan purpose/i);
		expect(selects[0]).toBeInTheDocument();
		expect(selects[1]).toBeInTheDocument();

		userEvent.click(selects[0]);
		const popupSelectOne = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectOne).getByText(/API error/i));

		const input: HTMLInputElement = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
		userEvent.type(input, "1000");
		expect(input).toHaveValue("$1,000");

		userEvent.click(selects[1]);
		const popupSelectTwo = await screen.findByRole("listbox");
		userEvent.click(within(popupSelectTwo).getByText(/12 months/i));

		await waitFor(() =>
			expect(screen.getByText(/Monthly payment/i)).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByText(/APR/i)).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText(/85.61/i)).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText(/0.05%/i)).toBeInTheDocument());

		const button = screen.getByRole("button", { name: /Submit Application/i });
		userEvent.click(button);

		await waitFor(() =>
			expect(
				screen.getByText(/Something went wrong. Please review your fields/i)
			).toBeInTheDocument()
		);
	});
});
