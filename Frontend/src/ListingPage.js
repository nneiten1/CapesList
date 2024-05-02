import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import Listing from "./components/ListingItem";
  

function ListingPage() {
  const { ListingID } = useParams();

  console.log(ListingID);
  const [post, updatePost] =  useState(["Hello"]);
  axios.get(`http://localhost:80/Listings/${ListingID}` )
  .then ((response) => {
    updatePost(response);
  });


  return (
    
    <>
    <NavBar></NavBar>
        <Listing key={post.id}  listing={post} />
        <a href={`/user/reviews/${post.SELLER_USER_ID}`}>Reviews</a>
    </>
  )
    
};


export default ListingPage;