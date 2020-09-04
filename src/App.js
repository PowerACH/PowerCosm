import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Register from './components/Register';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Register />
    

      <BrowserRouter>
        <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/LogIn">
                <LogIn />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
      </BrowserRouter>
  </div>
  )
}

export default App;
