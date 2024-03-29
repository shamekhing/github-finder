import React,{Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'
import User from './components/users/User'

import GithubState from './context/gihub/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css';

const App = () => {
  return (
    <GithubState><AlertState>
      <Router>
      <div className="App">
        <Navbar/>
          <dev className="container"> 
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' component={User}/>
              <Route component={NotFound}/>
            </Switch>
          </dev>
      </div>
    </Router>
    </AlertState></GithubState>
  );
}

export default App;
