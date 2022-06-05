import styled from "styled-components";

export default styled(function Footer({ className, children }) {
  return (
    <div className={className}>
      {children}
      Footer
      <br />
      Footer
    </div>
  );
})`
  padding: 24px;
  position: absolute;
  bottom: 0;
  @media only screen and (min-width: 768px) {
    left: calc(180px + 110px + 24px);
    @media only screen and (max-height: 620px) {
      left: calc(180px + 80px + 24px);
    }
  }
`;
