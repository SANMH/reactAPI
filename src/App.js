import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Subasta from "./Subasta";
import Oferta from "./Oferta";
import Header from "./Header";

 
import Home from "./Home";

function App() {
  return (
        
<Router>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Subasta">Subasta</Link>
          </li>
          <li>
            <Link to="/Oferta">Oferta</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Subasta">
            <Subasta />
          </Route>
          <Route path="/Oferta">
            <Oferta />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
