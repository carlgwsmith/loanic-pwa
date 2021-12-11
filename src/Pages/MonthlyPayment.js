import React, {useState, useEffect} from 'react';
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';
import { CalcButton } from '../Shared/SharedElements';
import { useNavigate } from 'react-router-dom';

const Monthlypayment = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [homePrice, setHomePrice] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [loanLength, setLoanLength] = useState(0)
  const [interestRate, setInterestRate] = useState(0)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  let navigate = useNavigate();
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

  function handleClick(e) {
    e.preventDefault()
    navigate('/monthlyresults', {
      state: {
        homePrice: homePrice,
        downPayment: downPayment,
        loanLength: loanLength,
        interestRate: interestRate
      }
    })
  }

  return (
    <div>
      <Header name="Monthly Payment Calculator" toggle={toggle} back="/home"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <p style={label}>Home Price</p>
      <input type="number" style={inputStyle} onChange={(val) => setHomePrice(val.target.value)}/>
      <p  style={label}>Down Payment</p>
      <input type="number" style={inputStyle} onChange={(val) => setDownPayment(val.target.value)}/>
      <p  style={label}>Mortgage Length (years)</p>
      <input type="number" style={inputStyle} onChange={(val) => setLoanLength(val.target.value)}/>
      <p  style={label}>Interest Rate (%)</p>
      <input type="number" style={inputStyle} onChange={(val) => setInterestRate(val.target.value)}/>
      <CalcButton onClick={handleClick}>Find Out Monthly Payment</CalcButton>
    </div>
  );
}

export default Monthlypayment;
