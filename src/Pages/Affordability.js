import React, {useState} from 'react';
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';
import { CalcButton } from '../Shared/SharedElements';
import { useNavigate } from 'react-router-dom';

const Affordability = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  let navigate = useNavigate()

  function handleClick(e) {
    e.preventDefault()
    navigate('/affordabilityresults', {
      state: {
        homePrice: 'hi'
      }
    })
  }
  return (
    <div>
      <Header name="What can I afford?" toggle={toggle} back="/"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <CalcButton onClick={handleClick}>How much can I afford?</CalcButton>
    </div>
  );
}

export default Affordability;
