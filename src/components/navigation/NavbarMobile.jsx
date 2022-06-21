import styled from "styled-components";
import { routes } from "../../router/routes";
import { contactIconsLinks } from "../../router/links";
import Button from "@mui/material/Button";
import QRCodeLinkedIn from "../../images/qr-code.svg";
import Profile from "../../images/profile.jpg";
import BackgroundImage from "../../images/horizontal_navbar_background.png";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../../theme";

const HorizontalSeparation = styled.div`
  height: 32px;
  position: relative;
  margin-top: 90px;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
  margin-left: -24px;
  background-image: url(${BackgroundImage});
  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const SignatureSquare = styled.div`
  z-index: 2;
  width: 160px;
  height: 160px;
  position: absolute;
  bottom: -60px;
  right: 0px;
  background-color: #000000;
`;

const Name = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 0px;
  font-size: 1.3em;
`;
const JobName = styled.h3`
  color: #ffffff;
  text-align: right;
  font-style: italic;
  margin-top: -6px;
  margin-right: 18px;
  font-size: 1em;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 6px;
  right: 6px;
`;

const QRCode = styled(ProfileImage)`
  transition-property: opacity;
  transition-duration: 0.5s;
  &:hover {
    opacity: 0;
  }
`;

const QRCodeLabel = styled.h5`
  color: #ffffff;
  writing-mode: sideways-lr;
  text-orientation: mixed;
  position: absolute;
  right: 84px;
  bottom: 6px;
  font-size: 0.8em;
`;

const ContactLinks = styled.div`
  color: #ffffff;
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  left: 12px;
`;

const HandleNavButton = styled(Button)`
  position: relative;
  left: 48px;
`;

const Nav = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s;
`;

export default styled(function NavbarMobile({ className, children }) {
  const [display, setDisplay] = useState(false);
  const [opacity, setOpacity] = useState(false);

  function open() {
    setDisplay(true);
    setOpacity(true);
  }

  function close() {
    setOpacity(false);
    setTimeout(setDisplay(false), 500);
  }

  return (
    <>
      <Nav
        style={{
          opacity: opacity ? 1 : 0,
          display: display ? "flex" : "none",
        }}
      >
        <Button
          color="black"
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
          }}
          onClick={close}
        >
          <CloseIcon />
        </Button>
        {routes.map(({ path, name, ...props }) => (
          <Button color="black" href={path} key={path} {...props}>
            {name}
          </Button>
        ))}
      </Nav>
      <div className={className}>
        <HorizontalSeparation>
          <HandleNavButton
            variant="contained"
            color="white"
            size="small"
            onClick={() => (display ? close() : open())}
          >
            <MenuIcon />
          </HandleNavButton>
          <SignatureSquare>
            <Name>Lisa Heslot</Name>
            <JobName>Développeuse</JobName>
            <ContactLinks>
              {contactIconsLinks.map(({ url, name, startIcon, ...props }) => (
                <a
                  style={{ color: "#ffffff" }}
                  href={url}
                  key={name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {startIcon}
                </a>
              ))}
            </ContactLinks>
            <QRCodeLabel>LinkedIn</QRCodeLabel>
            <ProfileImage src={Profile} alt={"Heslot Lisa profile picture"} />
            <QRCode src={QRCodeLinkedIn} alt={"Heslot Lisa LinkedIn qr code"} />
          </SignatureSquare>
        </HorizontalSeparation>
      </div>
    </>
  );
})`
  z-index: 1;
  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;
