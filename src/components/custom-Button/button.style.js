import styled, { css } from "styled-components";

const GoogleSignedInStyle = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
const InvertedStyle = css`
  background-color: white;
  color: black;
  border: none black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const TypicalStyle = css`
  color: white;
  background-color: black;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const styleImporter = (props) => {
  if (props.isGoogleSigned) {
    return GoogleSignedInStyle;
  }
  return props.inverted ? InvertedStyle : TypicalStyle;
};
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 10px 10px 10px 5px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Inter";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${styleImporter}
`;
