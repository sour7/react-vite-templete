import { createHashRouter } from "react-router-dom";
import { App } from "./App";

import { Home } from "./pages/Home";

export const Router = createHashRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
