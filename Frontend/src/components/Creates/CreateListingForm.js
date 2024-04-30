import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Cookies } from "react-cookie";
import axios from 'axios';
import ComicTitle from '../ComicTitle';
let cookies;


const LoginStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    padding: 50px;
`;

const LoginHeader = styled.h1`
 font-family: 'Comic Sans MS', cursive; /* Use Comic Sans MS font or any other comic-style font */
  font-size: 36px; /* Adjust font size as needed */
  text-align: center; /* Center align the text */
  color: #61C1BF; /* Set text color to orange or any other desired color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a slight shadow for depth */
  margin-top: 20px; /* Add margin as needed */
`;

const LoginDiv = styled.div`
    display:flex;
    position: relative;
    width: 30%;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const LoginInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  justify-content: center;
  position: relative;
  right:0;

  /* Add any additional styles you want here */

  &:focus {
    border-color: #007bff; /* Change border color when input is focused */
  }
`;

const LoginHidden = styled.input`
  display: none;

`;



const LoginSelect = styled.select`
  padding: 10px;
  margin: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  justify-content: center;
  position: relative;
  right:0;

  /* Add any additional styles you want here */


  &:focus {
    border-color: #007bff; /* Change border color when input is focused */
  }
`;

const SubmitLogin = styled.button`
  background-color: #0a6bff;
  border-radius: 4px;
  border: 0;
  box-shadow: rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inherit;
  font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 10;
  min-height: 56px;
  min-width: 120px;
  padding: 16px 20px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);

&::hover {
  background-color: #065dd8;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
    {
    padding: 16px 44px;
    min-width: 150px;
  }
}
`;



function CreateListingForm({listingData}) {
  //Check for login cookie, if not, then redirect to the homepage
    //Grab cookies from browser
    //Check for login cookie, if not, then redirect to the homepage
    //Grab cookies from browser
    cookies = new Cookies();

    //Now get the ID cookie for USER ID
    let capesListCookie = cookies.get('CapesListID');
    const [comicName, updateComicName] =  useState("");
    const [post, updatePost] =  useState(["Hello"]);
    useEffect(() => {
      axios.get(`http://localhost:80/Comics/${comicName}` )
        .then(({ data }) => {
              updatePost(data); 
              console.log(data);
        })
    },[comicName])
    console.log("This is the post after update post: ", post);
  

    return (
        <form action="http://localhost:80/Create/Listing" method="POST">
        <LoginStack>
        <LoginDiv>
        <LoginHeader>ADD LISTING</LoginHeader>
        </LoginDiv>
            <LoginDiv>
            <LoginSelect type="text" placeholder="Comic" name='listing[COMIC_ID]'required onChange={(e) => {updateComicName(e.target.value)}} >
              <option value="" disabled selected>Comic Name</option>
              
              {post.map((comic) => (
              <ComicTitle key={comic.id} comic={comic} />
                ))}
            </LoginSelect>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="Price" type="text" value={listingData.price}  name='listing[PRICE]'required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginSelect defaultValue="Sale type" value={listingData.sale_type} name='listing[POSTING_TYPE]' required>
                <option value="" disabled selected>Sale Type</option>
                <option value="buy">Buy</option>
                <option value="trade">Trade</option>
            </LoginSelect>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="Listing Date" type="text" value={listingData.date} name='listing[LISTING_DATE]'required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginHidden placeholder="Seller_ID" type="text" value={listingData.seller_id} defaultValue={capesListCookie} name='listing[SELLER_USER_ID]' ></LoginHidden>
            </LoginDiv>
            <LoginDiv>
            <LoginHidden placeholder="Buyer_ID" type="text" value={listingData.buyer_ID} defaultValue={0} name='listing[BUYER_USER_ID]'></LoginHidden>
            </LoginDiv>
            <LoginDiv>
            <LoginHidden placeholder="Listing_status" type="text" defaultValue={"Available"} value={listingData.status} name='listing[STATUS]' required></LoginHidden>
            </LoginDiv>



            <LoginDiv>
            <SubmitLogin type="submit">Create Listing</SubmitLogin>
            </LoginDiv>


        </LoginStack>
        </form>
    );
}

export default CreateListingForm;