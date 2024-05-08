import {Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import NavBar from '../components/NavBar';
import axios from "axios";
import React, { useState } from "react";
import { Cookies } from "react-cookie";
import CreateReviewForm from "../components/Creates/CreateReviewForm";

let cookies;


let reviewFormData;

const handleSubmit = (e) => {
    e.preventDefault(); //Keeps from page reload

    const data = {
       DETAILS: reviewFormData.DETAILS,
       DATE: reviewFormData.DATE,
       REVIEWER_USER_ID: reviewFormData.REVIEWER_USER_ID,
       REVIEWIE_USER_ID: reviewFormData.REVIEWIE_USER_ID
    };

    axios.post("http://localhost:80/Create/Review", data).then((response) => {
            //Now go to the next page
            //window.location.replace("http://localhost:3000/");
    });
}





const CreateReviewPage = () => {
    reviewFormData = useState({
       DETAILS: "",
       DATE: "",
       REVIEWER_USER_ID: "",
       REVIEWIE_USER_ID: ""
    });

    //Check for login cookie, if not, then redirect to the homepage
    //Grab cookies from browser
    cookies = new Cookies();

    //Now get the ID cookie for USER ID
    let capesListCookie = cookies.get('CapesListID');

    //Now check if you are logged in, if not, redirect to homepage
    if (typeof capesListCookie !== 'undefined') {
        return (
            <>
                <NavBar></NavBar>
                <CreateReviewForm reviewData={reviewFormData}/>
    
    
                <Outlet />
            
            </>
            
        );
    } else {
        return (<Navigate to="/"/>);
    
        
    }

    
}


export default CreateReviewPage;