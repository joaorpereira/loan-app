import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Routes />
			</Router>
		</ThemeProvider>
	);
}

export default App;
