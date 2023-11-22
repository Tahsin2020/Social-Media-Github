import "../CSS/main.css";
import Display from "../components/Display";
import { Link, useLocation } from "react-router-dom";
import Earth from "../assets/Earth.png";
import { useState, useEffect } from "react";
import { getUserProfile } from "../helpers/api-communicator";
import toast from "react-hot-toast";

const Home = () => {
  const [data, setData] = useState<any>({});
  const [experience, setExperience] = useState<any>([]);
  const [projects, setProjects] = useState<any>([]);
  const [education, setEducation] = useState<any>([{}]);
  const location = useLocation();
  // console.log(location.pathname);

  useEffect(() => {
    // let username = "Tahsin Hasan";
    if (data.username == undefined) {
      let username = location.pathname;
      username.replace("/", "");
      getUserProfile(username)
        .then((data) => {
          setData(data.publicprofile);
          if (data.publicprofile) {
            setExperience(data.publicprofile.experience);
            setProjects(data.publicprofile.projects);
            setEducation(data.publicprofile.education);
          }
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Loading Failed", { id: "loadchats" });
        });
    }
  }, []);
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
        <>
          <Display
            Heading={"Experience"}
            Data={experience}
            Type={"Experience"}
          />
          <Display
            Heading={"Completed Projects"}
            Data={projects}
            Type={"Completed Projects"}
          />
          <Display
            Heading={"Ongoing Projects"}
            Data={projects}
            Type={"Ongoing Projects"}
          />
          <Display Heading={"Education"} Data={education} Type={"Education"} />
        </>
      </div>
    </>
  );
};

export default Home;
