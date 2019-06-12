import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Classone from './Task2/Classone';
import Signup from './Task1/Signup';
import Airthmetic from './Task3/Airthmetic';

  class App extends Component{
    render(){
  return (
      <Router>
      <Switch>
      <Route exact path='/task1' component={Signup}></Route>
      <Route exact path='/task2' component={Classone}></Route>
      <Route exact path='/task3' component={Airthmetic}></Route>
      </Switch>
      </Router>
   
  );
}
}


export default App;
