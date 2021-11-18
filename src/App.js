import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Favorites from './components/Favorites';


function App() {


  return (
    <Router>
          <Navbar/>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
       
        </Switch>

          
    </Router>

 
  );
}

export default App;
