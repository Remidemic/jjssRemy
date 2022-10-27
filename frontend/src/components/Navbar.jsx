// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";
import * as userService from "./../utilities/users-service";

// CREATE COMPONENT
const Navbar = ({ user, setUser }) => {
  // console.log(user);
  // Create a function responsible for loggin the user out
  const handleLogOut = () => {
    // Call the logout function
    userService.logOut();

    // Set the user back to null
    setUser(null);
  };
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new/:id">New Order</Link>
      <span style={{ paddingLeft: "10px" }}>
        Welcome {user.newUser?.name || user.currentUser?.name}
      </span>
      &nbsp;&nbsp;
      <Link
        to=""
        onClick={() => {
          return handleLogOut();
        }}
      >
        Log Out
      </Link>
    </nav>
  );
};

// EXPORT COMPONENT
export default Navbar;
