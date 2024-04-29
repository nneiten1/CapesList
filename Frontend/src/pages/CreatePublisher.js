import {Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import NavBar from '../components/NavBar';
import axios from "axios";
import React, { useState } from "react";
import { Cookies } from "react-cookie";
import CreatePublisherForm from "../components/Creates/CreatePublisherForm";

let cookies;


let publisherFormData;

const handleSubmit = (e) => {
    e.preventDefault(); //Keeps from page reload

    //make a navigation variable

    const data = {
        
    };

    axios.post("http://localhost:80/Create/Review", data).then((response) => {
            //Now go to the next page
            return (
                <Navigate to="/" />
            )
    });
}





const CreatePublisherPage = () => {
    publisherFormData = useState({
       
    });

    // //Check for login cookie, if not, then redirect to the homepage
    // //Grab cookies from browser
    // cookies = new Cookies();

    // //Now get the ID cookie for USER ID
    // let capesListCookie = cookies.get('CapesListID');

    //Now check if you are logged in, if not, redirect to homepage
    // if (typeof capesListCookie !== 'undefined') {
        return (
            <>
                <NavBar></NavBar>
                <CreatePublisherForm publisherData={publisherFormData}/>
    
    
                <Outlet />
            
            </>
            
        );
    // } else {
    //     return (<Navigate to="/"/>);
    
        
    // }

    
}


export default CreatePublisherPage;