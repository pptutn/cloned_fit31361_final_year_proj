import "./Banner.css";
import { Avatar } from '@material-ui/core';

function Banner() {
  return (
      <div className = 'result__banner'>
          <div className='banner__left'>
            <h1 className="app-title"> StuCom.</h1>
          </div>

          <div className='banner__right'>
            <Avatar />
          </div>
        </div>
  );
}

export default Banner;