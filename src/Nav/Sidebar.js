import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu,  Behance, Dribble, Linkedin } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/monthlypayment" onClick={toggle}>
            Monthly Mortgage Payment 
          </SidebarLink>
          <SidebarLink to="/payoff" onClick={toggle}>
            Mortgage Payoff 
          </SidebarLink>
          <SidebarLink to="/affordability" onClick={toggle}>
            How much can you afford?
          </SidebarLink>
          <SidebarLink to="/glossary" onClick={toggle}>
            Homebuyer's Glossary
          </SidebarLink>
        </SidebarMenu>
          <a href="https://www.behance.net/carlvskansas" target="_blank"><Behance/></a>
          <a href="https://dribbble.com/carlvskansas" target="_blank"><Dribble/></a>
          <a href="https://www.linkedin.com/in/carl-gw-smith/" target="_blank"><Linkedin/></a>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
