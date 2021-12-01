import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const Header = styled.div`
/* background-image: url('../waves.svg');
height:290px;
background-repeat: no-repeat;
background-size: auto;
background-position:bottom;
background-color:#00d084; */
`
export const Logo = styled.div`
background-color:#00d084;
height:100px;
padding-top:20px;
/* margin: 7rem 1.25rem 2.5rem 1.25rem; */
`
export const Wordmark = styled.p`
font-family:'Poppins', sans-serif;
font-size:4em;
margin: 0 1.25rem .25rem 1.25rem;
color:white;
line-height: 1;
`
export const Subtitle = styled.p`
font-family:'Poppins', sans-serif;
margin:0px;
color:white;
font-weight: 400;
letter-spacing: 3px;
`
export const WelcomeText = styled.p`
font-size:1.2em;
color:#6C6B6B;
font-family:'Manrope', sans-serif;
margin:0px 0px 20px 0px;
`

export const SectionBtn = styled(Link)`
border: 3px solid #1F9D61;
border-radius:14px;
cursor: pointer;
font-size:1em;
font-weight: 500;;
transition: 0.2s ease-in-out;
display:flex;
align-items: center;
justify-content: center;
margin: 0px 20px 20px 20px;
padding:30px;
&.active{
  color:#1F9D61;
  text-decoration: none;;
}
&:hover{
  background-color: #1F9D61;
  color:white;
  transition: 0.2s ease-in-out;
}
`
export const NavMenu = styled.div`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align:center;
  `