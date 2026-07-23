import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { CursorProvider } from "./context/CursorContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <CursorProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CursorProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
