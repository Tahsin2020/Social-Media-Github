import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../CSS/settings.css";

const Settings = () => {
  return (
    <Grid
      className="Buttongrid"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      columnGap={{ xs: 4, sm: 8, md: 12 }}
    >
      <Button variant="contained" size="large" color="primary">
        Change Password
      </Button>
      <Button variant="contained" size="large" color="secondary">
        Change Username
      </Button>
      <Button variant="contained" size="large" color="error">
        Change Email
      </Button>
    </Grid>
  );
};

export default Settings;
