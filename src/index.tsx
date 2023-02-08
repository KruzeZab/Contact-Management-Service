import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import store from "./app/store";

// Custom
import App from "./App";
import AuthHandler from "./components/AuthHandler";
import reportWebVitals from "./reportWebVitals";

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
      <AuthHandler />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
