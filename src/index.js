import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "containers/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const Review = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
);
ReactDOM.render(<Review />, document.getElementById("root"));
