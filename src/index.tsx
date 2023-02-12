import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Custom
import store from "./app/store";
import App from "./App";
import AuthSuscriber from "./components/AuthSuscriber";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

// CSS
import "./index.css";

// Font imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthSuscriber />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
