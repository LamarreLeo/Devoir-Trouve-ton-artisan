import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

export default function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full max-w-[1280px] mx-auto gap-20 lg:gap-40">
                <Outlet />
            </main>
        </>
    );
}
