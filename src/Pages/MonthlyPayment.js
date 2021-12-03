import React, {useState} from 'react';
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';

const Monthlypayment = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Header name="Monthly Payment Calculator" toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
    </div>
  );
}

export default Monthlypayment;
