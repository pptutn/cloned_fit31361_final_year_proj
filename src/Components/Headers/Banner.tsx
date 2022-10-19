import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import { auth } from "../../firebase";
import { ThemeProvider } from "@emotion/react";
import theme from "../../colourScheme";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import "./Banner.css";

function Banner() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  // state that holds the value for the user in the
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);

  const navigate = useNavigate();

  // get the route location of the page the user is on
  const location = useLocation();

  const showLogInPage = () => {
    let path = "/login";
    navigate(path);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then((r) => console.log(r))
      .catch();
    setCurrentUser(null);
  };

  const logInLogOutClick = () => {
    // there is a user logged in, so log them out
    if (isLoggedIn) {
      // then log the user out
      // change the state of loggedIn
      setLoggedIn(!isLoggedIn);
      // change the state of the user and sign them out
      handleLogOut();
    }
    // if the user is not logged in
    else {
      setLoggedIn(!isLoggedIn);
      // take the user to the login page
      if (location.pathname !== "/login") {
        showLogInPage();
      }
    }
  };

  const giveUsername = () => {
    if (isLoggedIn && currentUser !== null) {
      return "Welcome, " + currentUser.email;
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        // console.log(auth.currentUser);
        setCurrentUser(user);
      } else {
        setLoggedIn(false);

        setCurrentUser(null);
      }
    });
  }, []);

  // if the user is on the home page
  if (location.pathname === "/") {
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
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={logInLogOutClick}
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </Button>
            {/* <div className="banner__right">
              <h2 color="white">{giveUsername()}</h2>
            </div> */}
          </div>
        </div>
      </ThemeProvider>
    );
  }

  // if the page is not the home page, that means it is the sign up or log in page.
  // thus do not show the log in/log out button
  else {
    return (
      <ThemeProvider theme={theme}>
        <div className="result__banner">
          <div className="banner__left">
            <h1>
              {" "}
              <a href="/">StuCom.</a>
            </h1>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Banner;
