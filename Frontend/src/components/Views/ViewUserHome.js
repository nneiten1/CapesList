import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useCookies } from "react-cookie";




function ViewUserHome() {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const navigate = useNavigate();

    //When user clicks add Listing
    const addListingClick = () => {
        navigate("/create/listing");
    }

    const deleteAccountClick = () => {
        console.log("Deleting Account :(");
    }

    const updateAccountClick = () => {
        navigate("/user/updateAccount")
    }

    //When user clicks add Listing
    const userAccountLogout = () => {
        console.log("Loging out!");

        //Removing the cookies with JS to make it easier
        removeCookie("CapesListID", {path: '/'});
        removeCookie("CapesList", {path: '/'});

        //Now go back to the homepage after logging out
        navigate("/");
    }


    return (
        <>
            <button onClick={updateAccountClick}>Update Account</button>
            <button onClick={deleteAccountClick}>Delete Account</button>
            <button onClick={addListingClick}>Add listing</button>
            <button onClick={userAccountLogout}>Logout</button>
        </>
    );
  }
  
  
  export default ViewUserHome;