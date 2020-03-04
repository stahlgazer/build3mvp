import React from "react";
import { Route, NavLink } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
<<<<<<< Updated upstream
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Browse from './components/Browse/Browse';

function App() {
  return (
    <div className="App" style={{ width: '100%' }}>
      <NavigationBar />
      <Route path='/'>
        {/* <img src='https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
         style={{ width: '100%' }} /> */}
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/browse">
        <Browse />
      </Route>
=======
import Browse from "./components/Browse";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      {/* <Link to="/register">register</Link>
      <Link to="/login">login</Link>
      <Link to="/browse">browse</Link>
      <Link to="/contact">contact</Link>
      <Link to="/dashboard">dashboard</Link> */}
      <Route path="/" component={NavigationBar} />
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contact} />

      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/browse" component={Browse} />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
