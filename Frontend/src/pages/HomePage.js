import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../components/HomePage";

const HomePageRender = () => {
    return (
        <>
            <NavBar></NavBar>
            <About></About>
        
        
        
            <Outlet />
        </>
    );




};


export default HomePageRender;