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
font-weight: 500;
text-decoration: none;
color:#1F9D61;
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
  export const NavTopMenu = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px;
  margin-bottom:20px;
  text-align:center;
  border-bottom:1px solid #c9c9c9;
  padding-bottom:20px;
    `
export const HeaderContainer = styled.div`
 display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 0.6fr 1.4fr; 
  gap: 0px 0px;
  background-color:#41CC89;
  padding:10px 5px 10px 5px; 
  grid-template-areas: 
    "Back Hamburger"
    "Title Title"; 
`
export const HeaderTitle = styled.div`
grid-area: Title;
font-family:'Poppins', sans-serif;
font-size:1.4rem;
padding:20px;
color:white;
font-weight:400;
`

export const HeaderBack = styled.div`
text-align:left;
padding-left:20px;
grid-area: Back;`

export const Hamburger = styled.div`
text-align:right;
color:white;
padding-right:10px;
grid-area: Hamburger;
`

export const CalcButton = styled.button`
padding:20px 30px;
display:block;
margin-left:auto;
margin-right:auto;
`
export const HomeBtn = styled.a`
padding: 10px 20px;
display: block;
margin-left: auto;
margin-right: auto;
border: 2px solid #cccaca;
background-color: #f9f9f9;
color: #444;
border-radius: 30px;
`