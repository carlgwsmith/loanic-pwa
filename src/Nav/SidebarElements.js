import styled from "styled-components";
import {FaTimes, FaBehanceSquare, FaDribbbleSquare, FaLinkedin} from 'react-icons/fa'
import {NavLink as Link} from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #383838;
  display: grid;
  align-items: center;
  top: 0;
  left:0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
color:#fff;
`

export const Icon = styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
font-size:2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color:#fff;
`;
export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align:center;

@media screen and (max-width:480px){
  grid-template-rows: repeat(6, 60px);
  padding-inline-start: 0;
}
`;

export const SidebarLink = styled(Link)`
text-transform:uppercase;
font-family: 'Work Sans', sans-serif;
color:#fff;
display:flex;
align-items: center;
justify-content: center;
text-decoration: none;
font-size:1.5rem;
list-style:none;
cursor: pointer;
transition: 0.2s ease-in-out;
&.active{
  color:#fcd115;
}
&:hover{
  color:#fcd115;
  transition: 0.2s ease-in-out;
}
`

export const Behance = styled(FaBehanceSquare)`
font-size:32px;
color:#535353;
transition: all 0.2s ease-in-out;
&:hover{
  color:#ffb80b;
}
`
export const Dribble = styled(FaDribbbleSquare)`
font-size:32px;
color:#535353;
transition: all 0.2s ease-in-out;
&:hover{
  color:#ffb80b;
}
`
export const Linkedin = styled(FaLinkedin)`
font-size:32px;
color:#535353;
transition: all 0.2s ease-in-out;
&:hover{
  color:#ffb80b;
}
`