import styled from "styled-components";
import NavbarDesktop from "./navigation/NavbarDesktop.jsx";
import NavbarMobile from "./navigation/NavbarMobile.jsx";
import Footer from "./Footer.jsx";

export default styled(function Page({ className, children }) {
  return (
    <div className={className}>
      <NavbarDesktop />
      <NavbarMobile />
      {children}
      <Footer />
    </div>
  );
})`
  display: flex;
  position: relative;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  height: 100%;
`;
