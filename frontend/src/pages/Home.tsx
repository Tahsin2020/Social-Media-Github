import "../CSS/main.css";
import Display from "../components/Display";
import { Link, redirect, useLocation } from "react-router-dom";
import Earth from "../assets/Earth.png";
import { useState, useEffect } from "react";
import { getUserProfile } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import Notfound from "./Notfound";
import { Grid, Box } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

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
          <div></div>
          <div className="Main">
            <div className="flex-wrap" id="Portfolio">
              <div className="w-[528px] h-[528px]">
                <img src={Earth} />
              </div>
              <div className="PortfolioText px-5 md:px-0">
                <div id="PortfolioTitle">Software Engineer</div>
                <div id="PortfolioName">{publicProfile.name}</div>
                <div id="PortfolioTitle">
                  {publicProfile.pronouns.map((item: String, id: Number) => {
                    if (id == 0) {
                      return item;
                    } else {
                      return "/" + item;
                    }
                  })}{" "}
                  - Main Organization.
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    to={"/modify"}
                    style={{
                      backgroundColor: "blue",
                      width: "fit-content",
                      marginTop: "5vh",
                      padding: "20px",
                    }}
                  >
                    Modify Profile
                  </Link>
                </div>
              </div>
              <div
                className="Portfolio"
                style={{
                  border: "3px solid black",
                  marginTop: "5vh",
                }}
              >
                <div
                  style={{
                    border: "3px solid black",
                    display: "block",
                  }}
                >
                  <img
                    src="https://marketplace.canva.com/EAE2cQaUHVA/1/0/1600w/canva-black-minimal-motivation-quote-linkedin-banner-HoRi-2buBWk.jpg"
                    alt="Banner"
                    style={{
                      width: "80vw",
                      marginRight: "5vw",
                      marginLeft: "5vw",
                    }}
                  />
                  <div
                    id="PortfolioBio"
                    className="Bio"
                    style={{
                      marginTop: "5vh",
                    }}
                  >
                    <div
                      style={{
                        border: "3px solid black",
                        marginRight: "5vw",
                        width: "50vw",
                        height: "50vh",
                        marginLeft: "0vw",
                      }}
                    >
                      {publicProfile.about} More than 100 stealth egg attacks
                      baffle one Euclid homeowner and police (photos and video)
                      EUCLID, Ohio -- An 85-year-old Euclid man's home has
                      become the target of mysterious egging attacks that began
                      in March 2014 and haven't stopped. The continuous
                      onslaught of eggs has baffled police, neighbors and local
                      government officials who have tried and failed to identify
                      the source of the attacks that have ruined the man's home
                      and kept his family on edge. "The accuracy is phenomenal,"
                      Albert Clemens, Sr. said. "Because almost every time when
                    </div>
                    <div
                      style={{
                        border: "3px solid black",
                        width: "25vw",
                        height: "50vh",
                      }}
                    >
                      <div
                        style={{
                          border: "3px solid black",
                          height: "22.5vh",
                        }}
                      >
                        {publicProfile.email} - {publicProfile.phone_number} -{" "}
                        {publicProfile.location}
                      </div>
                      <div
                        style={{
                          border: "3px solid black",
                          height: "22.5vh",
                          marginTop: "5vh",
                        }}
                      >
                        {publicProfile.skills}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
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
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
