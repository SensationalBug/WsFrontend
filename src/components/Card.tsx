import { Grid } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <Grid
      container
      xs={10}
      md={7}
      lg={6}
      xl={5}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid blue",
        backgroundColor: "#f1f1f1",
        height: { xs: "80%", md: "300px" },
        overflow: "hidden",
      }}
    >
      <Grid
        sx={{
          backgroundColor: "red",
          transform: {
            md: "translate(-25%, -25%)",
            xs: "translate(0%, -25%)",
          },
          width: { xs: "100%", md: "600px" },
          height: { xs: "100%", md: "600px" },
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          flexDirection: "column",
        }}
      >
        <Grid
          sx={{
            backgroundColor: "blue",
            // transform: {
            //   md: "translate(-25%, -25%)",
            //   xs: "translate(0%, -25%)",
            // },
            width: { md: "50px" },
            height: { md: "50px" },
            borderRadius: "50%",
          }}
        ></Grid>
        <Grid
          sx={{
            backgroundColor: "blue",
            // transform: {
            //   md: "translate(-25%, -25%)",
            //   xs: "translate(0%, -25%)",
            // },
            width: { md: "50px" },
            height: { md: "50px" },
            borderRadius: "50%",
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default Card;
