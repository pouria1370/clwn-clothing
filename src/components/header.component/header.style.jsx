import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Option = css`
  padding: 10px 15px;
  cursor: pointer;
`;
export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  height: 70px;
  width: 100%;
  justify-content: space-between;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const LinkOption = styled(Link)`
  ${Option}
`;
export const DivOption = styled.div`
  ${Option}
`;
