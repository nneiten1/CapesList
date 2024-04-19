import { useState } from 'react';
import styled from 'styled-components';

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
function CreateAccountForm({createAccount}) {
    return (
        <form action="http://localhost:80/Signup" method="POST">
        <LoginStack>
        <LoginDiv>
        <LoginHeader>CAPESLIST</LoginHeader>
        </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="First Name" type="text" name='account[fname]' value={createAccount.fname} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="Last Name" type="text" name='account[lname]' value={createAccount.lname} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="Street" type="text" name='account[street]' value={createAccount.street} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="City" type="text" name='account[city]' value={createAccount.city} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="State" type="text" name='account[state]' value={createAccount.state} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="Zip" type="text" name='account[zip]' value={createAccount.zip} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="Phone Number" type="text" name='account[phone]' value={createAccount.phone} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="Email" type="text" name='account[email]' value={createAccount.email} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <LoginInput placeholder="Password" type="password" name='account[password]' value={createAccount.password} required></LoginInput>
            </LoginDiv>
            <LoginDiv>
            <SubmitLogin type="submit">Create Account</SubmitLogin>
            </LoginDiv>


        </LoginStack>
        </form>
    );
}

export default CreateAccountForm;