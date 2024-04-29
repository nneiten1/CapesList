import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../components/ListingItem";
import { BuyPageDiv } from "../components/BuyPageStyled";
import NavBar from "../components/NavBar";



const BuyPage = () => {
  const [post, updatePost] =  useState(["Hello"]);
  useEffect(() => {
      axios.get("http://localhost:80/Comics/all")
        .then(({ data }) => {
              updatePost(data); 
              console.log(data);
        })
    },[])
  
  return (
          <>
            <NavBar></NavBar>     
            <BuyPageDiv>
              {post.map((listing) => (
                <Listing key={listing.id}  listing={listing} />
             ))}
            </BuyPageDiv>
          
          </>
          
        );
    
};



export default BuyPage;
