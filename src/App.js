import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./Components/Global/Navbar";
import Account from './Views/Accounts';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Account />
    </Router>
  );
}

export default App;
