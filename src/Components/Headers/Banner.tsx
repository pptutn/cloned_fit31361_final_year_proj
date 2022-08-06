import "./Banner.css";
import { Button, Avatar } from "@material-ui/core";

function Banner() {
  return (
    <div className="result__banner">
      <div className="banner__left">
        <h1 className="app-title">
          {" "}
          <a href="/">StuCom.</a>
        </h1>
      </div>
      <div className="banner__links">
        <Button color="primary" variant="contained" href="/login">
          Log In
        </Button>
        <div className="banner__right">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Banner;
