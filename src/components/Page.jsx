import React from "react";
import { Link } from "react-router-dom";
import { Content } from "./index";
import "../App.css";

function Page() {
  return (
    <div className="wrapper">
      <div className="wrapper_inner">
        <div className="vertical_wrap abs">
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
        <Content />
      </div>
    </div>
  );
}

function NavLink({ name, route }) {
  function BackDropListener() {
    document.querySelector(".wrapper").classList.remove("active");
    document.querySelector(".vertical_wrap").classList.add("abs");
    console.log("backdrop");
  }
  return (
    <li onClick={BackDropListener}>
      <Link to={"/" + route}>
        <span className="text">{name}</span>
      </Link>
    </li>
  );
}

function SocialLink({ link, icon }) {
  return (
    <li>
      <Link to={link} target="_blank">
        <i className={icon}></i>
      </Link>
    </li>
  );
}

export default Page;
