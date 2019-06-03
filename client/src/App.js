import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LOGIN/Login";
import AdminCards from "./components/ADMINCARDS/AdminCards";
import "./App.css";
import UserCards from "./components/USERCARDS/UserCards";
import Register from "./components/REGISTER/Register";
import NewCard from './components/NEWCARD/NewCard';
import { PrivateRoute } from './components/PrivateRoute';


class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App">
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/all" component={AdminCards} />
          <PrivateRoute exact path="/mycards" component={UserCards} />
          <PrivateRoute exact path="/register" component={Register} />
          <PrivateRoute exact path="/add" component={NewCard} />
        </div>
      </Switch>
    );
  }
}

export default App;
