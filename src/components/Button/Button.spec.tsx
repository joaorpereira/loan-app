import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import Button from "./";

describe("<Button/>", () => {
	const onChangeMock = jest.fn();
	it("should have value 'Submit'", () => {
		render(<Button onClick={onChangeMock}>Submit</Button>);

		const button = screen.getByRole("button", { name: /Submit/i });
		expect(button).toBeInTheDocument();

		userEvent.click(button);
		expect(onChangeMock).toHaveBeenCalledTimes(1);
	});
});
