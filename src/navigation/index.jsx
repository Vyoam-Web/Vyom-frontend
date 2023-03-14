import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingComp from "../components/Landing/Landing";


function Navigation() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingComp />} />
      </Routes>
    </Router>

  );
}

export default Navigation;
