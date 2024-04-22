import {Outlet, Link} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import NavBar from '../components/NavBar';
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let navigate;
let loginData;

const handleSubmit = (e) => {

    e.preventDefault(); //Keeps from page reload

    const userData = {
        email: loginData.email,
        password: loginData.password
    };

    axios.post("http://localhost:80/Login", userData).then((response) => {
    });
}

const LoginPage = () => {
    navigate = useNavigate();

    loginData = useState({
        email: "",
        password: ""
    });

    return (
        <>
            <NavBar></NavBar>
            <LoginForm loginState={ loginData }></LoginForm>
    
            <Outlet />
        </>
    );
}


export default LoginPage;