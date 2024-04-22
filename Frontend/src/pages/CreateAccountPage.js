import {Outlet, Link} from "react-router-dom";
import CreateAccountForm from "../components/Creates/CreateAccountForm";
import NavBar from '../components/NavBar';
import axios from "axios";
import React, { useState } from "react";


let accountFormData;

const handleSubmit = (e) => {
    e.preventDefault(); //Keeps from page reload

    const userData = {
        fname: accountFormData.fname,
        lname: accountFormData.lname,
        street: accountFormData.street,
        city: accountFormData.city,
        zip: accountFormData.zip,
        phone:  accountFormData.phone,
        email: accountFormData.email,
        password: accountFormData.password
    };

    axios.post("http://localhost:80/Signup", userData).then((response) => {
            //Now go to the next page
            window.location.replace("http://localhost:3000/");
    });
}

const CreateAccountPage = () => {
    accountFormData = useState({
        fname: "",
        lname: "",
        street: "",
        city: "",
        zip: "",
        phone: "",
        email: "",
        password: ""
    });

    
    return (
        <>
            <NavBar></NavBar>
            <CreateAccountForm createAccount={accountFormData}></CreateAccountForm>
    
            <Outlet />
        </>
    );
}


export default CreateAccountPage;