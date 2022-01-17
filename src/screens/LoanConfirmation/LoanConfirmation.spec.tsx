import React from "react";
import { screen, waitFor } from "@testing-library/react";
import LoanConfirmation from ".";
import { renderProvider } from "tests/helpers";
import { useStore } from "store/store";
import { server } from "__mocks__/server";
import { rest } from "msw";

const originalState = useStore.getState();

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedNavigate
}));

beforeEach(() => {
	useStore.setState(originalState);
});

describe("<LoanConfirmation/>", () => {
	it("should have 'Check' image", () => {
		renderProvider(<LoanConfirmation />);

		expect(
			screen.getByRole("img", { name: /Check image with white color/i })
		).toBeInTheDocument();
	});

	it("should have success messages", () => {
		renderProvider(<LoanConfirmation />);

		expect(
			screen.getByRole("heading", { name: /Thank you/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /You could be saving money/i })
		).toBeInTheDocument();
	});

	it("should render list of cards received from an api call", async () => {
		useStore.setState({
			offerId: "offerId"
		});
		renderProvider(<LoanConfirmation />);

		const licenseExpirationWrapper = await screen.findAllByTestId(
			"custom-card"
		);
		expect(licenseExpirationWrapper).toHaveLength(3);
	});

	it("should navigate to '/' path when there isn't a value for 'offerId' property", async () => {
		renderProvider(<LoanConfirmation />);
		await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith("/"));
	});

	it("should display error message when request failed with status 500", async () => {
		useStore.setState({
			offerId: "offerId"
		});

		server.resetHandlers(
			rest.get(
				`https://clutch-interview-service.herokuapp.com/loans`,
				(req, res, ctx) => {
					return res(ctx.status(500));
				}
			)
		);

		renderProvider(<LoanConfirmation />);
		await waitFor(() => screen.getByText("Something went wrong"));
	});
});
