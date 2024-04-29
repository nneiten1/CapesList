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
//   const [post, updatePost] =  useState(["Hello"]);
//let cookies = new Cookies();

//Now get the ID cookie for USER ID
//let capesListCookie = cookies.get('CapesListID');
//   useEffect(() => {
//       axios.get("http://localhost:80/listing/${capesListCookie}"))
//         .then(({ data }) => {
//               updatePost(data); 
//               console.log(data);
//         })
//     },[])
  
  return (
          <>
            <NavBar></NavBar>     
            <BuyPageDiv>
              {
                post.map((listing) => (
                <Listing key={listing.id}  listing={listing} />
             ))}
            </BuyPageDiv>
            <CreateNewComic href="/create/listing">Create New Listing</CreateNewComic>
          </>
          
        );
    
};



export default SellPage;
