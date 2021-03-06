import React, {useState, useEffect} from 'react';
import Header from '../../Shared/Header';
import Sidebar from '../../Nav/Sidebar';

const Affordability = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      <Header name="Affordability Results" toggle={toggle} back="/affordability"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <p style={label}>Home Price</p>
    </div>
  );
}

export default Affordability;