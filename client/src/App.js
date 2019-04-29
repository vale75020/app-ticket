import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LOGIN/Login";
import AdminCards from "./components/ADMINCARDS/AdminCards";
import "./App.css";
import UserCards from "./components/USERCARDS/UserCards";
import Register from "./components/REGISTER/Register"
import AdminNewCard from './components/ADMINNEWCARD/AdminNewCard'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/admincards" component={AdminCards} />
          <Route exact path="/usercards" component={UserCards} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/adminnewcard" component={AdminNewCard} />

        </div>
      </Router>
    );
  }
}

export default App;
