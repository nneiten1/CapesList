import {Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import NavBar from '../components/NavBar';
import axios from "axios";
import React, { useState } from "react";
import { Cookies } from "react-cookie";
import CreateComicForm from "../components/Creates/CreateComicForm";

let cookies;


let comicFormData;

const handleSubmit = (e) => {
    e.preventDefault(); //Keeps from page reload

    const data = {
        
    };

    axios.post("http://localhost:80/Create/Comic", data).then((response) => {
            //Now go to the next page
            //window.location.replace("http://localhost:3000/");
    });
}





const CreateComicPage = () => {
    comicFormData = useState({
        price: "",
        postingType: "",
        listingDate: "",
        seller_id: "",
        buyer_id: "",
        listing_status: ""
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
                <CreateComicForm comicData={comicFormData}/>
    
    
                <Outlet />
            
            </>
            
        );
    // } else {
    //     return (<Navigate to="/"/>);
    
        
    // }

    
}


export default CreateComicPage;