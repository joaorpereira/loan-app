import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import Input from "./";

describe("<Input/>", () => {
	const onChangeMock = jest.fn();
	it("should have value 'Home'", () => {
		render(<Input label="Loan purpose" onChange={onChangeMock} />);

		const input: HTMLInputElement = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();

		userEvent.type(input, "Home");
		expect(input).toHaveValue("Home");
		expect(onChangeMock).toHaveBeenCalledTimes(4);
	});

	it("should have placeholderr value 'Type here...'", () => {
		render(<Input label="Loan purpose" placeholder="Type here..." />);

		const input: HTMLInputElement =
			screen.getByPlaceholderText(/Type here.../i);
		expect(input).toBeInTheDocument();
	});
});
