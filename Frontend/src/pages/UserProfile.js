import React, { useState, useEffect } from "react";
import axios from "axios";



function Listings() {

  axios.get("http://localhost:80/Comics/all")
  .then ((response) => {
    console.log(response.data)
  });
    
};


const listing = () =>{
  Listings();

    return (
      <a>Test</a>
    )
}


export default listing;