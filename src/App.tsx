import React from 'react';
import Navbar from './components/Navbar/navbar';
import Card from './components/Card/card';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/"></Route>
            <Route path=""></Route>
          </Routes>
          <Card />
        </Router>
  );
}

export default App;
