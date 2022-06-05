import styled from "styled-components";
import NavButton from "./NavButton";
import { routes } from "../../router/routes";

export default styled(function NavbarMobile({ className, children }) {
  return (
    <nav className={className}>
      {routes.map(({ path, name, ...props }) => (
        <NavButton href={path} key={path} {...props} />
      ))}
    </nav>
  );
})`
  background-color: bisque;
  display: flex;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  width: 100%;
`;
