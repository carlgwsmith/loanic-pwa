import React, {useState, useEffect} from 'react';
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';
import { CalcButton } from '../Shared/SharedElements';

const Monthlypayment = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [homePrice, setHomePrice] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [loanLength, setLoanLength] = useState(0)
  const [interestRate, setInterestRate] = useState(0)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const inputStyle={
    padding:'8px',
    fontSize:'20px',
    marginBottom:'10px',
    border:'1px solid #333 !important'
  }
  const label={
    fontSize:'15px',
    fontFamily:'"Poppins", sans-serif',
    paddingTop:'10px',
    margin:'0px'
  }

  return (
    <div>
      <Header name="Monthly Payment Calculator" toggle={toggle} back="/"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <p style={label}>Home Price</p>
      <input type="number" style={inputStyle} onChange={(val) => setHomePrice(val.target.value)}/>
      <p  style={label}>Down Payment</p>
      <input type="number" style={inputStyle} onChange={(val) => setDownPayment(val.target.value)}/>
      <p  style={label}>Mortgage Length</p>
      <input type="number" style={inputStyle} onChange={(val) => setLoanLength(val.target.value)}/>
      <p  style={label}>Interest Rate</p>
      <input type="number" style={inputStyle} onChange={(val) => setInterestRate(val.target.value)}/>
      <CalcButton>Find Out Monthly Payment</CalcButton>
    </div>
  );
}

export default Monthlypayment;
