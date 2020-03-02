import React from "react";
import { Route, NavLink } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import Browse from './components/Browse';

function App() {
  return (
    <div className="App">
      <NavigationBar>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </NavigationBar>
      
      <Route path="/register">
        <Register />
      </Route>
      <Route path="login">
        <Login />
      </Route>
      <Route path="/browse">
        <Browse />
      </Route>
    </div>
  );
}

export default App;