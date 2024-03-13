import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./index.css";
import UIShell from "./Components/UIShell"
import NewClient from "./Components/NewClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UIShell/>,
  },
  {
    path: "/new",
    element: <NewClient/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);