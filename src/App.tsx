import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			App
		</ThemeProvider>
	);
}

export default App;
