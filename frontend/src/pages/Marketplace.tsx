import React from "react";
import Card from "../components/Card";
import Grid from "@mui/material/Grid";

const Marketplace = () => {
  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} md={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
};

export default Marketplace;
