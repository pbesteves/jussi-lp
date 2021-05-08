import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { client } from "./ApolloClient";
import App from "./components/App";
import GlobalStyles from "./globalStyles";
import reportWebVitals from "./reportWebVitals";
import DefaultTheme from "./themes/defaultTheme";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <ThemeProvider theme={DefaultTheme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
