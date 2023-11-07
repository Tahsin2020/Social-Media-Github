import React from "react";
import "../CSS/main.css";
import Navbar from "./Navbar";
import Display from "./Display";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Webpage = () => {
  var Experience = [{ Hello: "" }, { Hello: "" }, { Hello: "" }, { Hello: "" }];
  var Personal_Projects = [{ Hello: "" }, { Hello: "" }];
  var Ongoing_Projects = [{ Hello: "" }, { Hello: "" }];
  var Organizations = [{ Hello: "" }, { Hello: "" }];

  const [data, setData] = useState({});
  const [loading, setError] = useState(true);
  const [error, setLoading] = useState(false);
  useEffect(() => {
    /*  fetch("https://api.github.com/users/Tahsin2020/repos")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });*/
      
  }, []);
  return (
    <>
      <Navbar />
      <div className="Main">
        <div className="flex-wrap" id="Portfolio">
          <div className="w-[528px] h-[528px]">
            <div id="PortfolioTitle">
              <br />
              <br />
              <br />
              Email: tahsinhasan2@gmail.com <br />
              <br />
              Email: tahsinhasan2@gmail.com <br />
              <br />
              Email: tahsinhasan2@gmail.com <br />
              <br />
              Email: tahsinhasan2@gmail.com <br />
              <br />
              Email: tahsinhasan2@gmail.com
            </div>
          </div>
          <div className="PortfolioText px-5 md:px-0">
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
              <Link to="/Projects" id="button">
                Projects
              </Link>
              <Link to="/Contact" id="button">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <Display Heading={"Experience"} Data={Experience} />
        <Display Heading={"Personal Projects"} Data={Personal_Projects} />
        <Display Heading={"Ongoing Projects"} Data={Ongoing_Projects} />
        <Display Heading={"Organizations"} Data={Organizations} />
      </div>
    </>
  );
};

export default Webpage;
