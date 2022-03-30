import React, {useState, useEffect } from "react";
import { Route, Switch} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Header from "./Header"
import '../style.css';
import MapContainer from './MapContainer'
import ItemForm from './ItemForm'
import ItemContainer from './ItemContainer'

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const [orgArray, setOrgArray] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(setItemsArray)
  },[] )

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if(res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        })
        .then(()=> {
          fetch('/organizations')
          .then(res => res.json())
          .then(orgArray => {
            setOrgArray(orgArray)
          });
        })
      }
    });
  },[]);

  useEffect(() => {
    fetch('/organizations')
    .then(res => res.json())
    .then(setOrgArray)
  },[] )


  function onFormSubmit(newItem){
    setItemsArray([newItem, ...itemsArray])
  }

  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    <div >
     <Header />

     <Route path="/items">
        <ItemContainer items={itemsArray}/>
      </Route>

     <Switch>
      <Route path="/signup">
        <Signup setIsAuthenticated= {setIsAuthenticated} setUser = {setUser} />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/">
        <MapContainer orgArray={orgArray} />
        <ItemForm items={itemsArray} onFormSubmit={onFormSubmit}/>
      </Route>

     </Switch>
     </div>

  );
}
export default App;
