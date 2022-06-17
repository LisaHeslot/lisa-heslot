import styled from "styled-components";
import BackgroundImage from "../images/footer_background.png";
import { footerLinks } from "../router/links.js";
import Button from "@mui/material/Button";
import { theme } from "../theme";

export default styled(function Footer({ className, children }) {
  return (
    <div className={className}>
      {children}
      {footerLinks.map(({ name, url, label }) => (
        <a href={url} key={name} target="_blank" rel="noreferrer">
          <Button
            style={{ fontSize: "0.6em", padding: "0px 6px" }}
            color="black"
          >
            {label}
          </Button>
        </a>
      ))}
    </div>
  );
})`
  padding: 24px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(70px - 48px);
  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    left: calc(180px + 164px + 24px + 6px);
    @media only screen and (max-height: 620px) {
      left: calc(180px + 80px + 24px + 8px);
      height: calc(180px - 48px);
    }
  }
  @media only screen and (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
  background: no-repeat bottom 50px right 100px/100% url(${BackgroundImage});
`;
