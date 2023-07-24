import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

import { ThemeProvider } from "./utils/context/DarkMode";

import GlobalStyle from "./utils/style/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
