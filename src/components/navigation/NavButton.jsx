import Button from "@mui/material/Button";
import styled from "styled-components";

export default styled(function NavButton({ children, className, ...props }) {
  return (
    <Button style={{ color: "#000000" }} {...props}>
      {children}
    </Button>
  );
})``;
