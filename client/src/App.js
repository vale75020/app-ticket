import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LOGIN/Login";
import AdminCards from "./components/ADMINCARDS/AdminCards";
import "./App.css";
import UserCards from "./components/USERCARDS/UserCards";
import Register from "./components/REGISTER/Register";
import NewCard from "./components/NEWCARD/NewCard";
import { PrivateRoute } from "./components/PrivateRoute";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/all" exact component={AdminCards} />
          <PrivateRoute path="/mycards" exact component={UserCards} />
          <PrivateRoute path="/register" exact component={Register} />
          <PrivateRoute path="/add" exact component={NewCard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
