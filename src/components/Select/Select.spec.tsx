import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render, within } from "@testing-library/react";
import Select from ".";
import { options } from "./Select.stories";

describe("<Select/>", () => {
	const onChangeMock = jest.fn();
	it("should have value 'Home'", async () => {
		render(
			<Select
				label="Loan purpose"
				value=""
				options={options}
				onChange={onChangeMock}
			/>
		);

		const selectEl = await screen.findByLabelText(/Loan purpose/i);
		expect(selectEl).toBeInTheDocument();

		userEvent.click(selectEl);

		const optionsPopupEl = await screen.findByRole("listbox", {
			name: /Loan purpose/i
		});

		userEvent.click(within(optionsPopupEl).getByText(/Personal/i));
		expect(onChangeMock).toHaveBeenCalledTimes(1);
	});
});
