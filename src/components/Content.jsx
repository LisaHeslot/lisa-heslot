import styled from "styled-components";

export default styled(function Content({ className, children }) {
  return <div className={className}>{children}</div>;
})`
  display: flex;
  height: calc(100% - 240px - 48px);
  width: 100%;
  background-color: #ffffff;
  padding: 24px;
  overflow: auto;
  @media only screen and (max-height: 620px) {
    height: calc(100% - 180px - 48px);
  }
  @media only screen and (max-height: 400px) {
    height: calc(100% - 60px - 48px);
  }
`;
