import React from "react";
import ReactDOM from "react-dom/client";
import './global.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {Home} from "./routes/Home";
import {Dashboard} from "./routes/Dashboard";
import {Contato} from "./routes/Contato";


const router = createBrowserRouter([
  { path: "/", element: <Home />, },    
  { path: "dashboard", element: <Dashboard /> },
  { path: "contato", element: <Contato /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
