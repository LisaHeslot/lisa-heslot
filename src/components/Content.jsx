import styled from "styled-components";
import { theme } from "../theme";

export default styled(function Content({ className, children }) {
  return <div className={className}>{children}</div>;
})`
  height: calc(100% - 240px - 48px);
  background-color: #ffffff;
  padding: 24px;
  overflow: auto;
  height: calc(100% - 48px - 48px);
  width: 60%;
  padding-left: 118px;
  @media only screen and (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    height: calc(100% - 180px);
    padding-left: 0;
  }
`;
