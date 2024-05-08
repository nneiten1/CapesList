import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import Listing from "./components/ListingItem";

function ListingPage() {
  const { listingID } = useParams();
  const [post, updatePost] =  useState(["Hello"]);

  useEffect(() => {
    axios.get(`http://localhost:80/Listings/${listingID}` )
      .then ((response) => {
        updatePost(response.data);
      });
  },[]);

  return (
    <>
      <NavBar />
      <div style={{ color: "white", margin: "20px auto", maxWidth: "800px" }}>
        <Listing key={post.id} listing={post[0]} />
      </div>
      <a href={`/user/reviews/${post[0].SELLER_USER_ID}`}> Seller Reviews</a>
    </>
  );
}

export default ListingPage;
