import React from "react";
import "./main.css";
import Navbar from "./Navbar.JS";

const Webpage = () => {
  return (
    <>
      {/* <nav className="navbar">
        <a href="/" className="logo">
          <img
            src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"
            alt="freeCodeCamp logo"
          />
        </a>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="MarketPlace">MarketPlace</a>
          </li>
          <li className="nav-item">
            <a href="Direct-Messages">Direct Messages</a>
          </li>
        </ul>
      </nav> */}
      <Navbar />

      <div className="Main">
        <div class="flex-wrap" id="Portfolio">
          <div class="w-[528px] h-[528px]">Hi</div>
          <div class="PortfolioText px-5 md:px-0">
            <div id="PortfolioTitle">Full Stack Developer</div>
            <br />
            <div id="PortfolioName">Tahsin Hasan</div>
            <br />
            <br />
            <div id="PortfolioBio">
              I'm a Full Stack Software Engineer for 2 years building and
              designing software, in all areas starting from web development to
              embedded software. If you wish to know what technologies I can
              work with and experience I have just look around my portfolio, and
              contact me for any positions on the contact page.
            </div>
            <br />
            <div>
              <router-link to="/Projects" id="button">
                Projects
              </router-link>
              <router-link to="/Contact" id="button">
                Contact
              </router-link>
            </div>
          </div>
        </div>
        <section>Personal Info</section>
        <section>Personal Projects</section>
        <section>Ongoing Projects</section>
        <section>Organizations</section>
      </div>
    </>
  );
};

export default Webpage;
