import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

  

function Reviews() {
  const { userID } = useParams();

  console.log(userID);

  axios.get(`http://localhost:80/Reviews/${userID}` )
  .then ((response) => {
    console.log(response.data)
  });


  return (
    <a>Users Reviews</a>
  )
    
};


export default Reviews;