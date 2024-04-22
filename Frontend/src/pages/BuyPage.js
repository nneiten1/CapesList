import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../components/ListingItem";

  

const SetListings = () => {
  const [listings, useListings] = useState([]);
  useEffect(() => {
      const FetchData = async () => {
         const res = await axios.get("http://localhost:5000/listings")
          useListings(res);
      }
      FetchData();}, []);
  return (
      <div>
        {listings.map((listing) => (
          <Listing key={listing.id} listing={listing} />
        ))}
      </div>
    );

}



const BuyPage = () => {
  return (
      <SetListings />
  );
  }



export default BuyPage;