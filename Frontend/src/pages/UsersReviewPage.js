import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "../components/Reviewitem"

  

function Reviews() {
  const { userID } = useParams();

  console.log(userID);
  const [post, updatePost] =  useState(["Hello"]);
  axios.get(`http://localhost:80/Reviews/${userID}` )
  .then ((response) => {
    updatePost(response);
  });


  return (
    
    <>
    <NavBar></NavBar>
    {post.map((listing) => (
                <Review key={listing.id}  listing={listing} />
             ))}
    
    </>
  )
    
};


export default Reviews;