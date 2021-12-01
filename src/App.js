import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react';
import Home from './Pages/Home';
import Affordability from './Pages/Affordability';
import Glossary from './Pages/Glossary';
import Monthlypayment from './Pages/MonthlyPayment';
import Payoff from './Pages/Payoff';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/glossary" exact element={<Glossary />}/>
        <Route path="/affordability" exact element={<Affordability />}/>
        <Route path="/monthlypayment" exact element={<Monthlypayment />}/>
        <Route path="/payoff" exact element={<Payoff />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
