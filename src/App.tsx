import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
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
