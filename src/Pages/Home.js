import React from 'react';
import { Header, Logo, Wordmark, Subtitle, WelcomeText, SectionBtn, NavMenu, NavTopMenu, HomeBtn } from '../Shared/SharedElements';
import {AiOutlineHome, AiOutlineLogout} from 'react-icons/ai'
import {signOut} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("../", { replace: true });
  };
  return (
    <div>
     <Header className="wave-container">
     <Logo>
        <Wordmark>
          Loanic
        </Wordmark>
        <Subtitle>Mortgage Tools</Subtitle>
      </Logo>
     <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 350" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 112.85714285714286,210.10714285714286 225.71428571428572,170.21428571428572 346,193 C 466.2857142857143,215.78571428571428 594,301.25 732,327 C 870,352.75 1018.2857142857144,318.78571428571433 1138,296 C 1257.7142857142856,273.21428571428567 1348.8571428571427,261.60714285714283 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#00d084ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
     </Header>
     <NavTopMenu>
       <HomeBtn href="/"><AiOutlineHome size="1.4em"/> User Profile</HomeBtn>
       <HomeBtn onClick={logout}><AiOutlineLogout size="1em"/> Sign Out</HomeBtn>
     </NavTopMenu>
     <WelcomeText>
     How can we help your with your mortgage?
     </WelcomeText>
     <NavMenu>
     <SectionBtn to="/monthlypayment">
       <p style={{margin:'0px', lineHeight:'0', textAlign:'center'}}>Monthly Mortgage Payment</p>
      </SectionBtn>
     <SectionBtn to="/payoff">Mortgage Payoff</SectionBtn>
     {/* <SectionBtn to="/affordability">What can I afford?</SectionBtn> */}
     <SectionBtn to="/glossary">Homebuyers Glossary</SectionBtn>
     </NavMenu>
    </div>
  );
}

export default Home;
