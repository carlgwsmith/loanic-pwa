import React, {useState, useEffect} from 'react';
import Header from '../../Shared/Header';
import Sidebar from '../../Nav/Sidebar';
import { useLocation } from 'react-router-dom';
import {amortize} from 'amortize'

const Monthly = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {state} = useLocation();
  const {interestRate, loanLength, downPayment, homePrice} = state;
  const [mort, setMort] = useState(0)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const label={
    fontSize:'15px',
    fontFamily:'"Poppins", sans-serif',
    paddingTop:'10px',
    margin:'0px'
  }
  useEffect(() => {
    var loanAmount = state.homePrice - state.downPayment 
    var monthlyrate = ((state.interestRate/100)/12);
    var payments = (state.loanLength*12);
    var mortgage = loanAmount * (( monthlyrate*( Math.pow(1+monthlyrate, payments))) / (Math.pow(1+monthlyrate, payments)-1));
    setMort(mortgage.toFixed(2))

  }, [])

  
  return (
<div>
      <Header name="Monthly Payment Results" toggle={toggle} back="/monthlypayment"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <p style={label}>Home Price: {state.homePrice}</p>
      <p style={label}>interest Rate: {state.interestRate}</p>
      <p style={label}>Down Payment: {state.downPayment}</p>
      <p style={label}>Length: {state.loanLength}</p>
      <div style={{borderTop:'1px solid', paddingTop:'20px'}}>
        <h2>Monthly Payment is: ${mort}</h2>
      </div>
    </div>
  );
}

export default Monthly;