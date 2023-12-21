import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;