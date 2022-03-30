import React, {useState } from "react";
import Signup from './Signup'
// import { useHistory } from "react-router-dom";

function Login({setUser,setIsAuthenticated}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false);

  // const [style, setStyle] = useState("none")
  // const [isShowing, setIsShowing] = useState(true)
 
  const [error, setError] = useState([])
  // let history = useHistory();

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
    .then(res => {
      if(res.ok){
        res.json()
        .then(user=>{
          setUser(user)
          setIsAuthenticated(true)
        })
        
      } else {
        res.json()
        .then(json => setError(json.error))
      }
    })
}
function toggleSignup() {
  setShowForm((showForm) => !showForm);
}

  return (
    <>
    <div className="loginForm">
      <form onSubmit={handleSubmit} >
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

      {/* <div className="card" style={{display: isShowing}}>
      <div className="modalCard" style={{ display: style }}> */}
      {/* <button className="closeModal" onClick={toggleSignup}> Signup
        </button> */}
      {/* </div> 
      </div> */}
        </div>
    <div className= "signupButton">
      <button onClick={toggleSignup}>Sign Up</button>
      {showForm ? <Signup/> : null}
    </div>

  
    </>
  );
}

export default Login;
