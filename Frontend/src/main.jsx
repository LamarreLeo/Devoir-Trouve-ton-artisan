import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from "./App";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Artisan from "./pages/Artisan";
import Construction from "./pages/Construction";

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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);