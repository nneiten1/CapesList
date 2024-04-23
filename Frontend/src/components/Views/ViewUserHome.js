import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";
import styled from 'styled-components';

const UserActionStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    padding: 50px;
`;

const UserActionDiv = styled.div`
    display:flex;
    position: relative;
    width: 30%;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const StyledButton = styled.button`
  background-color: #0a6bff;
  border-radius: 4px;
  border: 0;
  box-shadow: rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inherit;
  font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 10;
  min-height: 56px;
  min-width: 120px;
  padding: 16px 20px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);

&::hover {
  background-color: #065dd8;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
    {
    padding: 16px 44px;
    min-width: 150px;
  }
}
`;

function getUserID() {
    let cookie = new Cookies();
    let userID = cookie.get("CapesListID");

    return userID;
}


function ViewUserHome() {
    const [cookies, setCookie, removeCookie, getCookie] = useCookies(['cookie-name']);
    const navigate = useNavigate();

    //When user clicks add Listing
    const addListingClick = () => {
        navigate("/create/listing");
    }

    const deleteAccountClick = () => {
        console.log("Deleting Account :(");

        //Grab the cookie with user ID
        let cookie = new Cookies();
        let userID = cookie.get("CapesListID", {path: '/'});
        //console.log(userID);

        //Make an array for posting
        let data = {
            ID: userID
        };

        axios.post("http://localhost:80/User/Delete", data);
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
            <UserActionStack>
                <UserActionDiv></UserActionDiv>
                <UserActionDiv>
                    <StyledButton onClick={updateAccountClick}>Update Account</StyledButton>
                </UserActionDiv>
                <UserActionDiv></UserActionDiv>
                
                <UserActionDiv></UserActionDiv>
                <UserActionDiv>
                    <StyledButton onClick={addListingClick}>Add listing</StyledButton>
                </UserActionDiv>
                <UserActionDiv></UserActionDiv>
                <UserActionDiv>
                    <StyledButton onClick={userAccountLogout}>Logout</StyledButton>
                </UserActionDiv>

                <form action="https://localhost:80/User/Delete" method="POST">
                    <input style={{display: 'none'}}  defaultValue={getUserID()} name='delete[ID]'></input>

                    <UserActionDiv>
                        <StyledButton onClick={deleteAccountClick}>Delete Account</StyledButton>
                    </UserActionDiv>
                </form>
            </UserActionStack>
            
            
            
            
            
        </>
    );
  }
  
  
  export default ViewUserHome;