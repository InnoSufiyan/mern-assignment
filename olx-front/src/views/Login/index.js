import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { useState } from "react";
import "./App.css";

const Login = ({ title, updateUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    
  };

  return (
    <div id="container">
      <div className="form-wrap">
        <h1>Login</h1>

        <p>It's free and take a minute only</p>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="Email"
            id="email"
            placeholder="abc@gmail.com"
          />
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="e.g:Hard One"
          />
        </div>
        <button type="submit" className="btn" onClick={signIn}>
          <Link to="/dashboard">Login</Link>
        </button>
        <p className="bottom-text">
          By clicking the Sign Up button, you agree to our{" "}
          <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
      <footer>
        <p>
          Don't have an account?
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
        </p>
      </footer>
    </div>
  );
};

export default Login;
