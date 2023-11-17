import "../CSS/main.css";
import Display from "../components/Display";
import { Link } from "react-router-dom";
import Earth from "../assets/Earth.png";

const Home = () => {
  return (
    <>
      <div className="Main">
        <div className="flex-wrap" id="Portfolio">
          <div className="w-[528px] h-[528px]">
            <img src={Earth} />
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
                Chat
              </Link>
              <Link to="/Contact" id="button">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <Display Heading={"Experience"} Data={"Experience"} />
        <Display Heading={"Personal Projects"} Data={"Personal_Projects"} />
        <Display Heading={"Ongoing Projects"} Data={"Ongoing_Projects"} />
        <Display Heading={"Organizations"} Data={"Organizations"} />
      </div>
    </>
  );
};

export default Home;
