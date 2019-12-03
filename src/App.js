import React from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import Page1 from './Page1'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/'>
          <Home />
          <Link to="/page1">to page1</Link>
        </Route>
        <Route path='/page1'>
          <Page1 />
          <Link to="/">to home</Link>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
