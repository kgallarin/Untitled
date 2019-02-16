import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "containers/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme();

const Review = () => (
  <MuiThemeProvider>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
);
ReactDOM.render(<Review />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
