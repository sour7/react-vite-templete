import { App } from "./App";

import { Home } from "./pages/Home";
import { createHashRouter } from "react-router-dom";

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
