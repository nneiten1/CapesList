import React, { useState, useEffect } from "react";


const Listing = ({ listing }) => {
    var altText = "Image of the comic" + listing.title
    return (
      <div>
        <h2>{listing.title}</h2>
        <p>{listing.description}</p>
        <p>{listing.price}</p>
        <p>{listing.location}</p>
        <img alt={altText} src={listing.img}></img>
      </div>
    );
  
}

const setListings = () => {
    const [listings, useListings] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/listings")
        .then((res) => res.json())
        .then((data) => {
            useListings(data);
        });
    }, []);
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
        <div>
        <h1>Buy Page</h1>
        </div>
    );
    }

export default BuyPage