import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { routes, routesSecondary } from "./router/routes";
import "normalize.css";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        {routesSecondary.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
