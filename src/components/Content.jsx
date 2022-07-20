import React from "react";
import {
  Home,
  About,
  Registration_Details,
  Committee,
  Schedule,
  Speaker,
  Call_for_Papers,
} from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";

function Content() {
  return (
    <div className="main_container">
      <div className="top_bar">
        <div className="hamburger">
          <i className="fas fa-bars"></i>
        </div>
        <div className="logo">
          ICRMIR - <span>23</span>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route
            path="/registration-details"
            exact
            element={<Registration_Details />}
          />
          <Route path="/schedule" exact element={<Schedule />} />
          <Route path="/speaker" exact element={<Speaker />} />
          <Route path="/committee" exact element={<Committee />} />
          <Route path="/call-for-papers" exact element={<Call_for_Papers />} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
