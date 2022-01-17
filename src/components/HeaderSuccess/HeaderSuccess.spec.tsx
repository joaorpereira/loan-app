import React from "react";
import { screen } from "@testing-library/react";
import HeaderSuccess from "./";
import { renderProvider } from "tests/helpers";

describe("<HeaderSuccess/>", () => {
	it("should have image value as 'Check image with white color'", () => {
		renderProvider(<HeaderSuccess />);
		expect(
			screen.getByRole("img", { name: /Check image with white color/i })
		).toBeInTheDocument();
	});
});
