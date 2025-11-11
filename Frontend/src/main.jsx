import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Artisan from "./pages/Artisan";
import Construction from "./pages/Construction";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/artisan/:id_artisan",
                element: <Artisan />,
            },
            {
                path: "/page-en-construction",
                element: <Construction />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </React.StrictMode>
);
