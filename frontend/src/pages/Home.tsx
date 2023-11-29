import "../CSS/main.css";
import Display from "../components/Display";
import { Link, redirect, useLocation } from "react-router-dom";
import Earth from "../assets/Earth.png";
import { useState, useEffect } from "react";
import { getUserProfile } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import Notfound from "./Notfound";
import { Grid, Box } from "@mui/material";

const Home = () => {
  const [access, setAccess] = useState<boolean>(false);
  const [publicProfile, setPublicProfile] = useState<any>({});

  const location = useLocation();
  // console.log(location.pathname);
  // Issue why is there a /: in my link?
  useEffect(() => {
    // let username = "Tahsin Hasan";
    if (!access) {
      let username = location.pathname;
      username.replace("/", "");
      getUserProfile(username)
        .then((data) => {
          if (data.publicprofile) {
            console.log(data);
            setPublicProfile(data.publicprofile);
            setAccess(true);
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
      {!access ? (
        <Notfound />
      ) : (
        <>
          <div>
            <div className="Bio">
              <img
                src="https://thumbs.dreamstime.com/b/real-normal-person-portrait-22299703.jpg"
                alt="Profile pic"
                style={{ width: "50vh", height: "70vh" }}
              />
              <div style={{ display: "block" }}>
                <div style={{ display: "flex" }}>
                  <div>Name</div>
                  <div>Pronouns</div>
                </div>
                <div>Title</div>
              </div>
            </div>
            <div className="Portfolio">
              <div style={{ display: "block" }}>
                <img
                  src="https://www.shutterstock.com/image-vector/blue-horizontal-lens-flares-pack-260nw-2202148279.jpg"
                  alt="Banner"
                  style={{ width: "80vh", height: "40vh" }}
                />
                <div style={{ display: "flex" }}>
                  <div>About</div>
                  <div>
                    <div>
                      Email <br />
                      Phone Number <br /> Location
                    </div>
                    <div>Skills</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Main">
            <div className="flex-wrap" id="Portfolio">
              <div className="w-[528px] h-[528px]">
                <img src={Earth} />
              </div>
              <div className="PortfolioText px-5 md:px-0">
                <div id="PortfolioTitle">{publicProfile.username}</div>
                <br />
                <div id="PortfolioName">{publicProfile.name}</div>
                <br />
                <br />
                <div id="PortfolioBio">
                  {publicProfile.bio} {publicProfile.pronouns}
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
                Data={publicProfile.experience}
                Type={"Experience"}
              />
              <Display
                Heading={"Completed Projects"}
                Data={publicProfile.projects}
                Type={"Completed Projects"}
              />
              <Display
                Heading={"Ongoing Projects"}
                Data={publicProfile.projects}
                Type={"Ongoing Projects"}
              />
              <Display
                Heading={"Education"}
                Data={publicProfile.education}
                Type={"Education"}
              />
            </>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
