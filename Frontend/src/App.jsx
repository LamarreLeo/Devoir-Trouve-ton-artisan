import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

export default function App() {
    return (
        <>
            <Header />
            <main className="flex items-center justify-center w-full max-w-[1280px] mx-auto gap-40">
                <Outlet />
            </main>
        </>
    );
}
