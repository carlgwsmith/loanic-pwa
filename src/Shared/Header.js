import React from 'react';
import { HeaderBack, HeaderContainer, Hamburger, HeaderTitle } from './SharedElements';
import {BiArrowBack} from 'react-icons/bi';
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderBack><Link to={props.back}><BiArrowBack size="45px" style={{color:'#fff', padding: '10px', borderRadius:'30px', backgroundColor:'#1F9D61'}}/></Link></HeaderBack>
      <Hamburger><FaBars size="32px" onClick={ props.toggle }/></Hamburger>
      <HeaderTitle>{props.name}</HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;
