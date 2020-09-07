import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Home from './components/Home'
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
              <Route exact path="/" component = {Home} />
              <Route path="/LogIn" component = {LogIn} />
              <Route path="/register" component = {Register} />w
            </Switch>
      </BrowserRouter>
  </div>
  )
}

export default App;
