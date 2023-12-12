import "./App.css";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Homepage from "./components/Home/Homepage";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div className="root">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/Dashboard" component={Dashboard}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
