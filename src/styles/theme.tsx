import { createTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: purple[500]
		},
		secondary: {
			main: green[500]
		}
	},
	typography: {
		fontFamily: "Roboto"
	}
});

export { theme };
