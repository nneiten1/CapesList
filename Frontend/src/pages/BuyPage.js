import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../components/ListingItem";

//Holds the JSX elements
let results = [];

let temp;
let flag = false;


// function Listing() {}

  

// const SetListings = () => {
//   const [listings, useListings] = useState([]);
//   useEffect(() => {
//       const FetchData = async () => {
//          const res = await axios.get("http://localhost:80/Comics/all");
//           useListings(res);
//       }
//       FetchData();}, []);
//   return (
//       <div>
//         {listings.map((listing) => (
//           <Listing key={listing.id} listing={listing} />
//         ))}
//       </div>
//     );

// };



const BuyPage = () => {
  const [post, updatePost] =  useState(["Hello"]);
  useEffect(() => {
      axios.get("http://localhost:80/Comics/all")
        .then(({ data }) => {
              updatePost(data[0]); 
              console.log(data[0]);
        })
    },[])
  console.log("This is the post after update post: ", Object.entries(post));
  
  return (
          <div>
              <Listing key={post.COMIC_ID} listing={post} />
          </div>
        );
    
};



export default BuyPage;
