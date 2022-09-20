import React from "react";
import "./Banner.css";
import { Button, Avatar } from "@mui/material";
import { auth } from "../../firebase";
import { ThemeProvider } from "@emotion/react";
import theme from "../../colourScheme";

function Banner() {

  return (
    <ThemeProvider theme={theme}>
    <div className="result__banner">
      <div className="banner__left">
        <h1>
          {" "}
          <a href="/">StuCom.</a>
        </h1>
      </div>
      <div className="banner__links">
        <Button color="primary" variant="contained" href="/login">
          {auth.currentUser==null? "Log In": "Log Out"}
        </Button>
        <div className="banner__right">
          <Avatar ></Avatar>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Banner;
