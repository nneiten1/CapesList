import {Outlet, Link} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import NavBar from '../components/NavBar';

const LoginPage = () => {
    return (
        <>
            <NavBar></NavBar>
            <LoginForm></LoginForm>
    
            <Outlet />
        </>
    );
}


export default LoginPage;