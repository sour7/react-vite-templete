import { Router } from "./routes";
import { MantineProvider, createTheme } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";

const MantineTheme = createTheme({
  fontFamily: "Raleway, sans-serif", // Updated font-family to Raleway
  primaryColor: "red",
}); // Ref: https://mantine.dev/theming/theme-object/#store-theme-override-object-in-a-variable

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <StrictMode>
    <MantineProvider theme={MantineTheme}>
      <RouterProvider router={Router} />
    </MantineProvider>
  </StrictMode>,
);
