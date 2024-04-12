import {Outlet, Link} from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <>
            <LoginForm></LoginForm>
    
            <Outlet />
        </>
    );
}


export default LoginPage;