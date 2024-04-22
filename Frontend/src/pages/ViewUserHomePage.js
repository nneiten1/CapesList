import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import ViewUserHome from '../components/Views/ViewUserHome';
import NavBar from '../components/NavBar';
import { Cookies } from "react-cookie";
  
let cookies;

function Listings() {

  axios.get("http://localhost:80/Comics/all")
  .then ((response) => {
    console.log(response.data)
  });
    
};


const ViewUserHomePage = () =>{
  //Listings();

  //Check for login cookie, if not, then redirect to the homepage
  //Grab cookies from browser
  cookies = new Cookies();

  //Now get the ID cookie for USER ID
  let capesListCookie = cookies.get('CapesListID');

  //Check if the cookie is defined, if so then logged in, if not go to homepage
  if (typeof capesListCookie !== 'undefined') {
    console.log("USER HOME PAGE: LOGGED IN");
  } else {
    console.log("USER HOME PAGE: LOGGED OUT");

    return(<Navigate to="/"/>);
  }

  return (
    <>
      <NavBar></NavBar>

      <ViewUserHome />
    
      <Outlet />
    </>
    
    
  );
}


export default ViewUserHomePage;