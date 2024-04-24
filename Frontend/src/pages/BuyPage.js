import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../components/ListingItem";
<<<<<<< HEAD
=======
import { BuyPageDiv } from "../components/BuyPageStyled";

>>>>>>> 49d36bbb29942e2e0e86f07d2b36ef1af310fd2a


const BuyPage = () => {
  const [post, updatePost] =  useState(["Hello"]);
  useEffect(() => {
      axios.get("http://localhost:80/Comics/all")
        .then(({ data }) => {
              updatePost(data); 
              console.log(data);
        })
    },[])
  console.log("This is the post after update post: ", post);
  
  return (
          <BuyPageDiv>
            {post.map((listing) => (
              <Listing key={listing.id} listing={listing} />
            ))}
          </BuyPageDiv>
        );
    
};



export default BuyPage;
