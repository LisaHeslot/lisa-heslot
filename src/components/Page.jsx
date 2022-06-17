import styled from "styled-components";
import NavbarDesktop from "./navigation/NavbarDesktop.jsx";
import NavbarMobile from "./navigation/NavbarMobile.jsx";
import Footer from "./Footer.jsx";
import { theme } from "../theme";

export default styled(function Page({ className, children }) {
  return (
    <div className={className}>
      <NavbarDesktop />
      {children}
      <NavbarMobile />
      <Footer />
    </div>
  );
})`
  display: flex;
  position: relative;
  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
  @media only screen and (max-width: ${theme.breakpoints.desktop}) {
    flex-direction: column;
  }
  height: 100%;
`;
