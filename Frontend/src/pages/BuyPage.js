import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../components/ListingItem";
import { BuyPageDiv } from "../components/BuyPageStyled";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";



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
                <Link to={`listing/${listing.id}`}>
                <Listing key={listing.id}  listing={listing} />
                </Link>
             ))}
            </BuyPageDiv>
          
          </>
          
        );
    
};



export default BuyPage;
