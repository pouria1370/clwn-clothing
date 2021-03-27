import React from "react";
import "./button-style.scss";

const CostumButton = ({ children, isGoogleSigned,inverted, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${inverted ? "inverted" : ""} ${isGoogleSigned ? "google-signed-in" : ""} custom-button`}
    >
      {children}
    </button>
  );
};
export default CostumButton;
