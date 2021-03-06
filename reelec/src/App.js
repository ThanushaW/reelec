import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={
            <div>
              <Home />
            </div>
          } />
          <Route path='/checkout' element={
            <div>
              <Checkout />
            </div>} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
