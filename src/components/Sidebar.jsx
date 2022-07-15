import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import {
  Home,
  About,
  Registration_Details,
  Committee,
  Schedule,
  Speaker,
  Call_for_Papers,
} from "../pages";

function Sidebar() {
  return (
    <Router>
      <div className="wrapper">
        <div className="wrapper_inner">
          <div className="vertical_wrap">
            <div className="backdrop"></div>
            <div className="flex flex-col justify-between vertical_bar">
              <div className="flex flex-col profile_info">
                <div className="m-auto">
                  <img
                    src="https://ltce.in/img_ltce/logo.png"
                    alt="profile_pic"
                  />
                </div>
                <p className="title">Lokmanya Tilak College of Engineering</p>
                <p className="sub_title mt-4">Credits to NRSA Devs</p>
              </div>
              <ul className="menu">
                <NavLink name="Home" route="" />
                <NavLink name="Call for Papers" route="call-for-papers" />
                <NavLink name="Schedule" route="schedule" />
                <NavLink
                  name="Registration Details "
                  route="registration-details"
                />
                <NavLink name="Committee" route="committee" />
                <NavLink name="Key Speakers" route="speaker" />
                <NavLink name="About the Institution" route="about" />
              </ul>
              <ul className="social pb-8">
                <SocialLink
                  link="https://www.facebook.com/LTCEOfficial"
                  icon="fab fa-facebook-f"
                />
                <SocialLink
                  link="https://twitter.com/LTCE_Official"
                  icon="fab fa-twitter"
                />
                <SocialLink
                  link="https://www.instagram.com/ltce_official"
                  icon="fab fa-instagram"
                />
              </ul>
            </div>
          </div>

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
                <Route
                  path="/call-for-papers"
                  exact
                  element={<Call_for_Papers />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function NavLink({ name, route }) {
  return (
    <li>
      <Link to={"/" + route}>
        <span className="text">{name}</span>
      </Link>
    </li>
  );
}

function SocialLink({ link, icon }) {
  return (
    <li>
      <a href={link} target="blank">
        <i className={icon}></i>
      </a>
    </li>
  );
}

export default Sidebar;
