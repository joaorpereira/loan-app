import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "styles/theme";

export const renderProvider = (children: React.ReactNode): RenderResult =>
	render(
		<BrowserRouter>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</BrowserRouter>
	);
