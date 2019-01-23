import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Fib Calculater version 2</h1>
              <Link to="/" className="App-link">Home</Link>
              <Link to="/otherPage" className="App-link">Other Page</Link>
            </header>
            <div>
                <Route exact path="/" component={Fib} />
                <Route exact path="/otherPage" component={OtherPage} />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
