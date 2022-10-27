import './App.css';
import Test from './pages/Test';
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarComp from './components/NavbarComp';
import UncontrolledExample from './components/UncontrolledExample';
import PicShow from './components/PicShow';

// from manara app 
// ADDITIONAL IMPORTS
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import Navbar from "./components/Navbar";
import { getUser } from "./utilities/users-service";


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <NavbarComp />

      {/* manara app components */}
      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new/:id" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
      {/* ^ manara app components */}

      <h1>Dropdown, slides, Card, footer</h1>
      <UncontrolledExample />
      <a href='#'> <h1>MEN</h1></a>
      <a href='#'> <h1>WOMEN</h1></a>
      <a href='#'> <h1>KIDS</h1></a>
      <a href='#'> <h1>GIFT</h1></a>
      <a href='#'> <h1>SALE</h1></a>
      <br />
      <h1>WHAT ARE YOU SHOPPING FOR?</h1>
      <a href='#'> <h1>MEN</h1></a>
      <a href='#'> <h1>WOMEN</h1></a>
      <a href='#'> <h1>KIDS</h1></a>
      <a href='#'> <h1>GIFT</h1></a>
      <a href='#'> <h1>SALE</h1></a>

      <PicShow />
      <PicShow />
      <PicShow />
      {/* </header> */}
    </div>
  );
}

export default App;
