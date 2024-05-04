import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "../components/Reviewitem"
import NavBar from "../components/NavBar";
  

function Reviews() {
  const { userID } = useParams();

  console.log(userID);
  const [post, updatePost] =  useState(["Hello"]);
  axios.get(`http://localhost:80/Reviews/${userID}` )
  .then ((response) => {
    updatePost(response.data);
  });

  console.log(post);

  return (
    
    <>
    <NavBar></NavBar>
    {post.map((review) => (
                <Review key={review.id}  review={review} />
             ))}
    
    </>
  )
    
};


export default Reviews;