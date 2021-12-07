import React, {useState} from 'react';
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';

const Glossary = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Header name="Glossary" toggle={toggle} back="/"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
    </div>
  );
}

export default Glossary;
