import styled from 'styled-components';


const NavDiv = styled.div`
    width:100%;
    height:100px;
    background-color: cornflowerblue;
    justify-content: center;
`

const NavUL = styled.ul`
    display: flex;
    align_item:center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
`

const NavItem = styled.li`
    display: inline;
    padding: 10px;

`
function NavBar() {
  return (
   <NavDiv>
      <NavUL>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Buy</NavItem>
        <NavItem>Sell</NavItem>
        <NavItem>Trade</NavItem>
      </NavUL>
   </NavDiv>
  );
}

export default NavBar;
