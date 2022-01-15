import React from "react";
import { screen } from "@testing-library/react";
import Header from "./";
import { renderWithTheme } from "tests/helpers";

describe("<Header/>", () => {
	it("should have title value as 'Loan Information'", () => {
		renderWithTheme(<Header title="Loan Information" />);
		expect(
			screen.getByRole("heading", { name: /Loan Information/i })
		).toBeInTheDocument();
	});
});
