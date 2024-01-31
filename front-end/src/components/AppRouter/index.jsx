import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../layout/NavBar";
import "../../styles/index.css";
import Home from "../../pages/Home";
import Footer from "../layout/Footer";
import SignIn from "../../pages/SignIn";

function AppRouter() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default AppRouter;
