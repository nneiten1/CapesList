import styled from 'styled-components';
import logo from '../assets/logos/Capeslist-Logo-(Stolen-has-to-be-changed).png';
const AboutImg = styled.img`
    width:100%;
    height:90%;
`



function About() {
  
  return (
    <AboutImg src={logo}>
    </AboutImg>
  );
}


export default About;