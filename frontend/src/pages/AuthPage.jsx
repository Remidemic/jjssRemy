// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

// CREATE COMPONENT
const AuthPage = ({ setUser }) => {
  return (
    <div>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <br />
      <LoginForm setUser={setUser} />
    </div>
  );
};

// EXPORT COMPONENT
export default AuthPage;