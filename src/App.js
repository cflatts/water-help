import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Home from './components/home'
import Graph from './components/graph'
import Login from './components/login'
import Navigation from './components/navigation'
import './App.css';



class App extends Component {
  render() {
    return (
        <Router history = {browserHistory}>
            <Route path = '/' component = {Navigation}>
                <Route path = '/home' component = {Home} />
                <Route path = '/graph' component = {Graph} />
                <Route path = 'login' component = {Login} />
            </Route>
        </Router>
    )
  }
}

export default App;
