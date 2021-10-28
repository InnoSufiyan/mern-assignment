import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";




function Signup() {


  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    
}

  return (
    <div id="container">
      <div className="form-wrap">
        <h1>Sign Up</h1>

        <p>It's free and take a minute only</p>
        <div className="form-group">
          <label for="fullName">Full Name</label>
          <input
            onChange={e => setFullName(e.target.value)}
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Inno Sufiyan"
          />
        </div>
        <div className="form-group">
          <label for="age">Age</label>
          <input onChange={e => setAge(e.target.value)} type="text" name="age" id="age" placeholder="30" />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="Email"
            id="email"
            placeholder="abc@gmail.com"
          />
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="e.g:Hard One"
          />
        </div>
        <button type="submit" className="btn" onClick={submitHandler}>
            <Link to="/login">Sign Up</Link>
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
            <Link to="/login">Login</Link>
          </button>
        </p>
      </footer>
    </div>
  );
}

export default Signup;
