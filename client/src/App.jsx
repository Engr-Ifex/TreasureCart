import React from "react";
import Login from "./Pages/User/LogIn/LogIn";
import Register from './Pages/User/Register/Register';
import {Route, Routes } from "react-router"
import Home from "./Pages/Home/Home";
import Forgot from "./Pages/User/Forget/Forget";
import ResetPassword from "./Pages/User/Reset/Reset";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="/password" element={<Forgot />}></Route>
          <Route path="/resetpassword/:userId/:token" element={<ResetPassword />} />
        </Routes>
      </div>
    </>
  );

}

export default App;
