import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AuthProviders from "./Providers/AuthProviders";
// import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProviders>
            <RouterProvider router={router}></RouterProvider>
        </AuthProviders>
    </React.StrictMode>
);
