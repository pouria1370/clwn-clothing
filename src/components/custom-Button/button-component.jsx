import React from "react";
import "./button-style.scss";
import {CustomButtonContainer} from './button.style'
const CostumButton = ({ children,...otherProps }) => {
  return (
    <CustomButtonContainer
      {...otherProps}
    >
      {children}
    </CustomButtonContainer>
  );
};
export default CostumButton;
