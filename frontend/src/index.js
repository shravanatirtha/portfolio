import { CSSReset, extendTheme, ThemeProvider } from "@chakra-ui/react";
import { default as React } from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const colors = {
  brand: {
    100: "#CFD1FD",
    200: "#A7ABFB",
    300: "#8388F9",
    400: "#6268F8",
    500: "#444BF7",
    600: "#262EF6",
    700: "#0B14F5",
    800: "#0911DD",
    900: "#080FC7",
  },
};

const theme = extendTheme({ colors });

ReactDOM.render(
  // 2. Wrap ThemeProvider at the root of your app
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
