import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "state";
import App from "App";
import { theme } from "theme";
import "./style.css";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
