import React from 'react'
import { NavLink, Route } from "react-router-dom"

function Header() {
  return (
    <div className="header">
        <h1>One Person's Trash is Another's Treasure</h1>
        <Route >
        <NavLink exact to="/signup">Sign Up | </NavLink>
        <NavLink exact to="/login">Login | </NavLink>
        <NavLink exact to='/items'> Items </NavLink>
        <NavLink exact to="/">Main</NavLink>
        </Route>
    </div>
  )
}

export default Header