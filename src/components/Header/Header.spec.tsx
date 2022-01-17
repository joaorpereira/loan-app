import React from "react";
import { screen } from "@testing-library/react";
import Header from "./";
import { renderProvider } from "tests/helpers";

describe("<Header/>", () => {
	it("should have title value as 'Loan Information'", () => {
		renderProvider(<Header title="Loan Information" />);
		expect(
			screen.getByRole("heading", { name: /Loan Information/i })
		).toBeInTheDocument();
	});
});
