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
import Userinfo from './Pages/UserInfo';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './Pages/Signup';
import SignIn from './Pages/SignIn';
import { AuthProvider } from './context/AuthContext';
import Profile from './Pages/Profile';
import ForgotPassword from './Pages/ForgotPassword'
import UpdateProfile from './Pages/UpdateProfile';

function App() {
  return (
    <AuthProvider>
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Routes>
        <Route path="/home" exact element={<Home />}/>
        <Route path="/glossary" exact element={<Glossary />}/>
        <Route path="/affordability" exact element={<Affordability />}/>
        <Route path="/affordabilityresults" exact element={<AffordabilityResults />}/>
        <Route path="/monthlypayment" exact element={<Monthlypayment />}/>
        <Route path="/monthlyresults" exact element={<MonthlyResults />}/>
        <Route path="/payoff" exact element={<Payoff />}/>
        <Route path="/payoffresults" exact element={<PayoffResults />}/>
        <Route path="/userinfo" exact element={<Userinfo />}/>
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/" exact element={<SignIn/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
        <Route path="/passwordreset" exact element={<ForgotPassword/>}/>
        <Route path="/update" exact element={<UpdateProfile/>}/>
      </Routes>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
