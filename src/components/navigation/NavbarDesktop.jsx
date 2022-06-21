import styled from "styled-components";
import { routes } from "../../router/routes";
import { contactIconsLinks } from "../../router/links";
import Button from "@mui/material/Button";
import QRCodeLinkedIn from "../../images/qr-code.svg";
import Profile from "../../images/profile.jpg";
import BackgroundImage from "../../images/vertical_navbar_background.png";
import { theme } from "../../theme";

const VerticalSeparation = styled.div`
  width: 32px;
  position: relative;
  border-right: 3px solid #000000;
  border-left: 3px solid #000000;
  background-image: url(${BackgroundImage});
  @media only screen and (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const SignatureSquare = styled.div`
  width: 240px;
  height: 240px;
  position: absolute;
  bottom: 0px;
  left: -110px;
  background-color: #000000;
  z-index: 2;
`;

const Name = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 0px;
`;
const JobName = styled.h3`
  color: #ffffff;
  text-align: right;
  font-style: italic;
  margin-top: -6px;
  margin-right: 18px;
  font-size: 1.2em;
`;

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
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
  right: 142px;
  bottom: 6px;
  font-size: 1em;
`;

const ContactLinks = styled.div`
  color: #ffffff;
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  left: 12px;
`;

export default styled(function NavbarDesktop({ className, children }) {
  return (
    <>
      <nav className={className}>
        {routes.map(({ path, name, ...props }) => (
          <Button color="black" href={path} key={path} {...props}>
            {name}
          </Button>
        ))}
      </nav>
      <VerticalSeparation>
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
          <QRCode src={QRCodeLinkedIn} alt={"Heslot Lisa LinkedIn QR code"} />
        </SignatureSquare>
      </VerticalSeparation>
    </>
  );
})`
  background-color: #ffffff;
  @media only screen and (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
  display: flex;
  z-index: 1;
  flex-direction: column;
  width: 240px;
  height: calc(100% - 240px);
  justify-content: center;
  align-items: start;
  border-radius: 24px 0px 0px 24px;
`;
