import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../layout/NavBar";
import "../../styles/index.css";
import Home from "../../pages/Home";
import Footer from "../layout/Footer";
import SignIn from "../../pages/SignIn";
import Users from "../../pages/Users";

function AppRouter() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<Users />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default AppRouter;
