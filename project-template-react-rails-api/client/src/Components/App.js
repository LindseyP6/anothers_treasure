import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Header from "./Header"
import '../style.css';
import MapContainer from './MapContainer'
import OrganizationContainer from "./OrganizationContainer";
import ItemForm from './ItemForm'
import ItemContainer from './ItemContainer'
import OrganizationPage from "./OrganizationPage";
import OrgCard from "./OrgCard";

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const [orgArray, setOrgArray] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(setItemsArray)
  }, [])

  useEffect(() => {
    fetch("/authorized_user")
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              setIsAuthenticated(true);
              setUser(user);
            })
        }
      });
  }, []);

  useEffect(() => {
    fetch('/organizations')
      .then(res => res.json())
      .then(setOrgArray)
  }, [])

  // function handleDelete(deletedId) {
  //   const updatedItems = itemsArray.filter(item => item.id !== deletedId);
  //   setItemsArray(updatedItems);
  // }

//   function handleDelete(id) {
//     fetch(`/items/${id}`, {
//       method: "DELETE",
//     }).then((r) => r.json())
//     .then(() => {
//       handleDelete(item);
//     });
// }
//   }
function handleDelete(itemToDelete) {
  const updatedItems = itemsArray.filter((item) => item.id !== itemToDelete.id);
  setItemsArray(updatedItems);
}

  function onFormSubmit(newItem) {
    setItemsArray([newItem, ...itemsArray])
  }
  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    <div >
      <Header />

      <Switch>
        <Route path="/items">
        
          <ItemContainer onHandleDelete={handleDelete} itemsArray={itemsArray} orgArray={orgArray} />
        </Route>

        <Route path="/signup">
          <Signup setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
        </Route>

        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route exact path="/organizations/:id">
          <OrgCard items={itemsArray} orgArray={orgArray} />
          <ItemForm items={itemsArray} onFormSubmit={onFormSubmit} />
        </Route>

        <Route path='/organizations'>
          <OrganizationPage orgArray={orgArray} />
        </Route>

        <div id="MapAndMenu">
        <Route exact path="/">
          <MapContainer orgArray={orgArray} />
          <OrganizationContainer orgArray={orgArray} />
        </Route>
        </div>

      </Switch>
    </div>

  );
}
export default App;
