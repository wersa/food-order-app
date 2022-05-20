import React, { Fragment } from "react";
import ReactDom from "react-dom";

import styles from "./PortalModal.module.css";
// import { Fragment } from "react/cjs/react.production.min";

const Background = (props) => {
  const handleClick = () => {
    props.onBlur()
  }
  return <div onClick={handleClick} className={styles.background}></div>;
};

const Overlay = (props) => {
  return (
    <div>
      <div className={styles.overlay}>
        {props.children}
      </div>
    </div>
  );
};

const portalTo = document.getElementById("overlays");

const PortalModal = (props) => {
  // const [isClicked, setIsClicked] = useState(false);


  return (
    <Fragment>
      {ReactDom.createPortal(<Background onBlur={props.onBlur} />, portalTo)}
      {ReactDom.createPortal(<Overlay >{props.children}</Overlay>, portalTo)}
    </Fragment>
  );
};

export default PortalModal;
