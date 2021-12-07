import React, {useState, useEffect} from 'react';
import Header from '../../Shared/Header';
import Sidebar from '../../Nav/Sidebar';
import { useLocation } from 'react-router-dom';

const Payoff = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {state} = useLocation();
  const {interestRate, loanLength, downPayment, homePrice} = state;

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const label={
    fontSize:'15px',
    fontFamily:'"Poppins", sans-serif',
    paddingTop:'10px',
    margin:'0px'
  }
  return (
    <div>
      <Header name="Payoff Results" toggle={toggle} back="/payoff"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <p style={label}>Home Price: {state.homePrice}</p>
      <p style={label}>interest Rate: {state.interestRate}</p>
      <p style={label}>Home Price: {state.downPayment}</p>
      <p style={label}>Home Price: {state.loanLength}</p>
    </div>
  );
}

export default Payoff;
