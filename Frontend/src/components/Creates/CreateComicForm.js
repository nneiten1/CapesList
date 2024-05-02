import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Cookies } from "react-cookie";
import axios from 'axios';
import PublisherName from '../PublisherName';
import AuthorName from '../AuthorName';

const ComicStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    padding: 50px;
`;

const ComicHeader = styled.h1`
 font-family: 'Comic Sans MS', cursive; /* Use Comic Sans MS font or any other comic-style font */
  font-size: 36px; /* Adjust font size as needed */
  text-align: center; /* Center align the text */
  color: #61C1BF; /* Set text color to orange or any other desired color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a slight shadow for depth */
  margin-top: 20px; /* Add margin as needed */
`;

const ComicDiv = styled.div`
    display:flex;
    position: relative;
    width: 30%;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const ComicInput = styled.input`
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

const ComicHidden = styled.input`
  display: none;

`;



const ComicSelect = styled.select`
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

const SubmitComic = styled.button`
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



function CreateComicForm({comicData}) {
//   //Check for login cookie, if not, then redirect to the homepage
//     //Grab cookies from browser
    let cookies = new Cookies();

//     //Now get the ID cookie for USER ID
    let capesListCookie = cookies.get('CapesListID');

  //Grabs all of the AUTHORS
  const [authors, updateAuthors] =  useState(["Hello"]);
  useEffect(() => {
    axios.get(`http://localhost:80/Authors/all`)
      .then(({ data }) => {
            updateAuthors(data); 
            console.log(data);
      })
  },[])

  //Grabs all of the PUBLISHERS
  const [publishers, updatePublishers] =  useState(["Hello"]);
  useEffect(() => {
    axios.get(`http://localhost:80/Publishers/all`)
      .then(({ data }) => {
            updatePublishers(data); 
            console.log(data);
      })
  },[])
  

    return (
        <form action="http://localhost:80/Create/Comic" method="POST">
        <ComicStack>
        <ComicDiv>
        <ComicHeader>ADD COMIC</ComicHeader>
        </ComicDiv>
            <ComicDiv>
              <ComicInput placeholder="Price" type="text" value={comicData.price} required></ComicInput>
            </ComicDiv>
            <ComicDiv>
              <ComicInput placeholder="Date Added" type="text" value={comicData.date_added} required></ComicInput>
            </ComicDiv>
            <ComicDiv>
              <ComicInput placeholder="Release Date" type="text" value={comicData.release_date} required></ComicInput>
            </ComicDiv>
            <ComicDiv>
              <ComicInput placeholder="Title" type="text" value={comicData.title} required></ComicInput>
            </ComicDiv>
            <ComicDiv>
              <ComicInput placeholder="Issue Number" type="text" value={comicData.issue_number} required></ComicInput>
            </ComicDiv>
            <ComicDiv>
              <ComicInput placeholder="Cover URL" type="text" value={comicData.front_cover_photo_url} required></ComicInput>
            </ComicDiv>
            
            <ComicDiv>
                <ComicSelect defaultValue="Author" required>
                  <option value="" disabled selected>Author</option>

                  {authors.map((author) => (
                    <AuthorName key={author.id} author={author} />
                  ))}
                </ComicSelect>
            </ComicDiv>
            <ComicDiv>
                <ComicSelect defaultValue="Publisher" required>
                  <option value="" disabled selected>Publisher</option>

                  {publishers.map((publisher) => (
                    <PublisherName key={publisher.id} publisher={publisher} />
                  ))}
                </ComicSelect>
            </ComicDiv>
            
            <ComicDiv>
              <ComicHidden placeholder="User" type="text" value={0} defaultValue={0}></ComicHidden>
            </ComicDiv>



            <ComicDiv>
              <SubmitComic type="submit">Create Comic</SubmitComic>
            </ComicDiv>


        </ComicStack>
        </form>
    );
}

export default CreateComicForm;