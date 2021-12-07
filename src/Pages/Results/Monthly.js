import React, {useState, useEffect} from 'react';
import Header from '../../Shared/Header';
import Sidebar from '../../Nav/Sidebar';

const Monthly = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
<div>
      <Header name="Payoff Results" toggle={toggle} back="/monthlypayment"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <p >Home Price</p>
    </div>
  );
}

export default Monthly;