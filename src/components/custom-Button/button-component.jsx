import React from "react";
import "./button-style.scss";

const CostumButton = ({ children, isGoogleSigned, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${isGoogleSigned ? "google-signed-in" : ""} custom-button`}
    >
      {children}
    </button>
  );
};
export default CostumButton;
