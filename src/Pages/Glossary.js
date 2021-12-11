import React, {useState, useEffect} from 'react';
import Header from '../Shared/Header';
import Sidebar from '../Nav/Sidebar';
import Alphalist from './Alphalist';

const Glossary = () => {
  const [selectedLetter, setLetter] = useState('');
  const [letterpull, setLetterPull] = useState('');
  const pull_data = (data) => {
    let pulled = data;
    setLetterPull(pulled);
  }

  useEffect(() => {
    setLetter(letterpull)
  }, [letterpull]);
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Header name="Glossary" toggle={toggle} back="/home"/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Alphalist/>
      
    </div>
  );
}

export default Glossary;
