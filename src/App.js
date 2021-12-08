import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Affordability from './Pages/Affordability';
import AffordabilityResults from './Pages/Results/Affordability';
import Glossary from './Pages/Glossary';
import Monthlypayment from './Pages/MonthlyPayment';
import MonthlyResults from './Pages/Results/Monthly'
import Payoff from './Pages/Payoff';
import PayoffResults from './Pages/Results/Payoff'
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/home" exact element={<Home />}/>
        <Route path="/glossary" exact element={<Glossary />}/>
        <Route path="/affordability" exact element={<Affordability />}/>
        <Route path="/affordabilityresults" exact element={<AffordabilityResults />}/>
        <Route path="/monthlypayment" exact element={<Monthlypayment />}/>
        <Route path="/monthlyresults" exact element={<MonthlyResults />}/>
        <Route path="/payoff" exact element={<Payoff />}/>
        <Route path="/payoffresults" exact element={<PayoffResults />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
