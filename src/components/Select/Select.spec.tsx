import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render, within } from "@testing-library/react";
import { OptionsProps } from "./Select";
import Select from ".";

const options: OptionsProps[] = [
	{ value: "Debt Consolidation", label: "Debt Consolidation" },
	{ value: "Personal", label: "Personal" },
	{ value: "API error", label: "API error" }
];

describe("<Select/>", () => {
	const onChangeMock = jest.fn();
	it("should open select and select 'Personal' value in the list", async () => {
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
