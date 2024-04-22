import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../components/HomePage";
import { Cookies } from "react-cookie";

let cookies;

const HomePageRender = () => {
    //Get the cookies from the browser with an object
    cookies = new Cookies();
    console.log(cookies.getAll());

    let capesListCookie = cookies.get('CapesListID');

    //Now look for the specific cookie
   
    if(typeof capesListCookie !== 'undefined') {
        //LoggedIn
        console.log("Logged IN!");
    } else {
        console.log("Not Logged in!");
    }

    return (
        <>
            <NavBar></NavBar>
            <About></About>
        
        
        
            <Outlet />
        </>
    );




};


export default HomePageRender;