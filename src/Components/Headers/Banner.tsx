import React from "react";
import "./Banner.css";
import { Button, Avatar } from "@mui/material";
import { auth } from "../../firebase";
import { ThemeProvider } from "@emotion/react";
import theme from "../../colourScheme";
import { signOut } from "firebase/auth";
import { AuthProvider } from "../../AuthProvider";


function Banner() {

  const { isLoggedIn, currentUser } = AuthProvider();

  const handleLogOut = () => {
    signOut(auth).then(r => console.log(r))
    .catch();
  }


  return (
    <ThemeProvider theme={theme}>
    <div className="result__banner">
      <div className="banner__left">
        <h1>
          {" "}
          <a href="/">StuCom.</a>
        </h1>
        {/* <h1>{currentUser? currentUser.email : "no user"}</h1> */}
      </div>
      <div className="banner__links">
        <Button color="primary" variant="contained" onClick={handleLogOut}>
          {isLoggedIn? "Log Out": "Log In"}
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
