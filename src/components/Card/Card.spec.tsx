import React from "react";
import { screen } from "@testing-library/react";
import Card from "./";
import { renderProvider } from "tests/helpers";
import { data } from "./Card.stories";

describe("<Card/>", () => {
	it("should display button element with 'Start Saving' text'", () => {
		renderProvider(<Card data={data} />);
		expect(
			screen.getByRole("button", { name: /Start Saving/i })
		).toBeInTheDocument();
	});

	it("should display image element with 'HONDA ACCORD 2019' name'", () => {
		renderProvider(<Card data={data} />);
		expect(
			screen.getByRole("img", { name: /HONDA ACCORD 2019/i })
		).toBeInTheDocument();
	});

	it("should render correspondent values for the card", () => {
		renderProvider(<Card data={data} />);
		expect(screen.getByText("SANTANDER CONSUMER USA"));
		expect(screen.getByText("$157/month"));
		expect(screen.getByText("$157/month"));
		expect(screen.getByText(/6850 mi/i));
		expect(screen.getByText(/2019 honda accord/i));
		expect(screen.getByText(/18.3%/i));
		expect(screen.getByText(/66 mo/i));
	});
});
