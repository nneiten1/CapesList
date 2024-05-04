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
        author_id: comicFormData.author_id,
        publisher_id: comicFormData.publisher_id,
        price: comicFormData.price,
        date_added: comicFormData.date_added,
        release_date: comicFormData.release_date,
        title: comicFormData.title,
        issue_number: comicFormData.issue_number,
        front_cover_url: comicFormData.front_cover_photo_url
    };

    console.log(data);

    axios.post("http://localhost:80/Create/Comic", data).then((response) => {

    });
}





const CreateComicPage = () => {
    comicFormData = useState({
        author_id: "",
        publisher_id: "",
        price: "",
        date_added: "",
        release_date: "",
        title: "",
        issue_number: "",
        front_cover_url: ""
    });

    console.log(comicFormData);

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
                <CreateComicForm comicData={comicFormData}/>
    
    
                <Outlet />
            
            </>
            
        );
     } else {
         return (<Navigate to="/"/>);
    
        
    }

}


export default CreateComicPage;