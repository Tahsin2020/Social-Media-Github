import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import Grid from "@mui/material/Grid";
import { getProfiles } from "../helpers/api-communicator";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const [profiles, setProfiles] = useState<any[]>([]);
  useEffect(() => {
    getProfiles().then((data) => {
      console.log(data.publicprofiles);
      setProfiles(data.publicprofiles);
    });
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ marginLeft: "1vw" }}
      >
        {profiles.map((profile) => {
          return (
            <Grid item xs={6} md={4}>
              <Link to={profile.username}>
                <Profile
                  About={profile.about}
                  Name={profile.username}
                  Title={profile.title}
                />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Marketplace;
