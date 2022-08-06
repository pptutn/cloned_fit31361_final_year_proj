import React, { MouseEventHandler } from "react";

interface Props {
  content?: JSX.Element | JSX.Element[];
  handleClose?: MouseEventHandler;
}

const Popup = (props: Props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
