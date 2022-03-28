import React, {useState} from "react";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div >
      <Signup setIsAuthenticated= {setIsAuthenticated} setUser = {setUser} />
     <Login/>
    </div>
  );
}

export default App;
