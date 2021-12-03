import React, {useState} from 'react';
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';

const Payoff = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Header name="Mortgage Payoff" toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
    </div>
  );
}

export default Payoff;
