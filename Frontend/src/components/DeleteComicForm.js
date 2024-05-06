import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Cookies } from "react-cookie";
import axios from 'axios';
import DeleteComicTitle from './DeleteComicTitle';

const ComicDeleteStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    padding: 50px;
`;

const ComicDelteHeader = styled.h1`
 font-family: 'Comic Sans MS', cursive; /* Use Comic Sans MS font or any other comic-style font */
  font-size: 36px; /* Adjust font size as needed */
  text-align: center; /* Center align the text */
  color: #61C1BF; /* Set text color to orange or any other desired color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a slight shadow for depth */
  margin-top: 20px; /* Add margin as needed */
`;

const ComicDeleteDiv = styled.div`
    display:flex;
    position: relative;
    width: 30%;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;


const ComicDeleteHidden = styled.input`
  display: none;

`;



const ComicDeleteSelect = styled.select`
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

const ComicDeleteSubmit = styled.button`
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



function ComicDeleteForm({comicData}) {
      //Check for login cookie, if not, then redirect to the homepage
        //Grab cookies from browser
        let cookies = new Cookies();
    
        //Now get the ID cookie for USER ID
        let capesListCookie = cookies.get('CapesListID');
    
      //Grabs all of the COMICS by USERID
      const [comics, updateComics] =  useState(["Hello"]);
      useEffect(() => {
        axios.get(`http://localhost:80/Listings/UserID/${capesListCookie}`)
          .then(({ data }) => {
                updateComics(data); 
                console.log(data);
          })
      },[])
    
      
    
        return (
            <form action="http://localhost:80/Delete/Listing" method="POST">
            <ComicDeleteStack>
                <ComicDeleteDiv>
                    <ComicDelteHeader>DELETE LISTING</ComicDelteHeader>
                </ComicDeleteDiv>
                <ComicDeleteDiv>
                    <ComicDeleteSelect defaultValue="Comic Title" name="comicDelete[id]"required>
                        <option value="" disabled selected>Comic Title</option>
    
                        {comics.map((comic) => (
                            <DeleteComicTitle key={comic.id} comic={comic} />
                        ))}
                    </ComicDeleteSelect>
                </ComicDeleteDiv>
                
                <ComicDeleteDiv>
                  <ComicDeleteHidden placeholder="User" type="text" value={capesListCookie} ></ComicDeleteHidden>
                </ComicDeleteDiv>
    
    
    
                <ComicDeleteDiv>
                  <ComicDeleteSubmit type="submit">Delete Comic</ComicDeleteSubmit>
                </ComicDeleteDiv>
    
    
            </ComicDeleteStack>
            </form>
        );
    }
    
    export default ComicDeleteForm;