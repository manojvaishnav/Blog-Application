import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  </>
);
