import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./style/theme.css";
import { AppProvider } from "./shared/GlobalAppNameContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <div className="theme">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AppProvider>
  </React.StrictMode>
);
