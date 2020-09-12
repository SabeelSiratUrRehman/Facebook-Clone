import React from 'react';
import {Route , Switch } from 'react-router-dom'
import './App.css';
import Login from './LoginPage/Login'
import HomePage from './HomePage/HomePage'
function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/Facebook"exact component={Login}/>
    <Route path="/HomePage"component={HomePage}/>
    </Switch>  
    </div>
  );
}

export default App;
