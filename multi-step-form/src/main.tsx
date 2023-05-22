import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./main.css";
import Plan from "./routes/Plan";
import Info from "./routes/Info";
import Addons from "./routes/Addons";
import Summary from "./routes/Summary";
import Thankyou from "./routes/Thankyou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Info />,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
      {
        path: "/addons",
        element: <Addons />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
      {
        path: '/thankyou', 
        element: <Thankyou/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
