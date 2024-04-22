import styled from 'styled-components';
import { Cookies } from 'react-cookie';


const NavDiv = styled.div`
    width:100%;
    height:50px;
    justify-content: center;
`

const NavUL = styled.ul`
    display: flex;
    align_item:center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`

const NavItem = styled.li`
    display: inline;
    padding: 10px 50px 10px 50px;
`

const NavLink = styled.a`
    font-size: 50px;
    font-family:Impact;
    text-decoration:none;
    color:gray;
    
    &:hover {
        color: red;
    
    }
`

//Displays different button based on if logged in or not
function LoginOrAccountButton() {
    let cookie = new Cookies();
    let CapesListID = cookie.get("CapesListID");

    //Check if the cookie is defined
    if (typeof CapesListID !== 'undefined') {
        return (<NavItem><NavLink href='/user/account'>Account</NavLink></NavItem>);
    } else {
        return (<NavItem><NavLink href='/user/login'>Login</NavLink></NavItem>);
    }
}

function NavBar() {
  return (
   <NavDiv>
      <NavUL>
        <NavItem><NavLink href='/view/buy'>Buy</NavLink></NavItem>
        <NavItem><NavLink href='/sell'>Sell</NavLink></NavItem>
        <NavItem><NavLink href='/view/buy'>Trade</NavLink></NavItem>
        <LoginOrAccountButton />
      </NavUL>
   </NavDiv>
  );
}

export default NavBar;
