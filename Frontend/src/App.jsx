import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full max-w-[1280px] mx-auto gap-20 mt-10 md:mt-20 mb-10 md:mb-20 lg:gap-30">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
