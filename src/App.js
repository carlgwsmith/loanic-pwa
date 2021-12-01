import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react';
import Home from './Pages/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
