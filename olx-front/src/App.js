import logo from "./logo.svg";
import "./App.css";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

function App() {
  // const [registration, setRegistration] = useState(false);

  // const [user, setUser] = useState();

  // const updateUser = (userObj) => {
  //   setUser(userObj);
  // };

  // const gotoLogin = (param) => {
  //   setRegistration(param);
  // };

  return (
    <>
      <Router>
        <div>
          <Box>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" color='success' ml={5}>
                  <Link style={{textDecoration: "none", color:'white'}} to="/">Signup</Link>
                </Typography>
                <Typography variant="h6" component="div" color='#e8eaf6' ml={5}>
                  <Link style={{textDecoration: "none", color:'white'}} to="/login">Login</Link>
                </Typography>
                <Typography variant="h6" component="div" color='primary' ml={5}>
                  <Link style={{textDecoration: "none", color:'white'}} to="/dashboard">Dashboard</Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
