import React, {useState } from "react";
import Signup from './Signup'
import { useHistory } from "react-router-dom";

function Login({setUser, setIsAuthenticated}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false);

  const [error, setError] = useState([])
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email,
      password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })        
    .then(res =>  res.json())
    .then((user) => setUser(user))
    history.push("/");
    }
  

function toggleSignup() {
  setShowForm((showForm) => !showForm);
}

  return (
    <>
    <div className="loginForm">
      <form onSubmit={handleSubmit} >
        <h3>Welcome Back! </h3>
       <p> Login:</p>
      <label> Email:
        <input 
          className= "loginBox"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label> Password:
        <input
          className= "loginBox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Login!" />
      </form>
      {error?<div>{error}</div>:null}
        </div> 
    {/* <div className= "signupButton">
      <button onClick={toggleSignup}>Sign Up</button>
      {showForm ? <Signup/> : null}
    </div> */}

  
    </>
  );
    }

export default Login;
