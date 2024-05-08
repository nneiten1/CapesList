import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../components/ListingItem";
import { BuyPageDiv } from "../components/BuyPageStyled";
import NavBar from "../components/NavBar";
import { Cookies } from "react-cookie";
import styled from "styled-components";

let post = [{
    id: 1,
    title: "Comic Title",
    price: 5.00,
    description: "This is a comic",
    publisher: "Marvel",
    condition: "New",
}];

const CreateNewComic = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: 'Comic Sans MS', cursive;
    color: #61C1BF;
`;



const SellPage = () => {

  
  return (
          <>
            <NavBar></NavBar>
            <h1 style={{color: 'White', textAlign: 'center'}}>Ensure you are logged in, you need an account to create a listing!</h1>
            <CreateNewComic href="/create/listing">Create New Listing</CreateNewComic>
          </>
          
        );
    
};



export default SellPage;
