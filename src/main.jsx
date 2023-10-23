import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./style/theme.css";
import { AppProvider } from "./shared/GlobalAppNameContext.jsx";
import { APIMovieProvider } from "./shared/apiHandlerMovieContext";
import { APIShowProvider } from "./shared/apiHandlerShowContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <APIShowProvider>
      <APIMovieProvider>
        <AppProvider>
          <div className="theme">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </AppProvider>
      </APIMovieProvider>
    </APIShowProvider>
  </React.StrictMode>
);
