import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <Grid
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#a0a0a0",
        justifyContent: "center",
        position: "absolute",
      }}
    >
      <Card />
    </Grid>
  );
};

export default Main;
