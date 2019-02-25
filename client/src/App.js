import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Login from './components/LOGIN/Login'
import AdminCards from './components/ADMINCARDS/AdminCards'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/admincards" component={AdminCards} />
      </div>
      </Router>
    );
  }
}

export default App;
