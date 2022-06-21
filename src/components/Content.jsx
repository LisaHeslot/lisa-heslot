import styled from "styled-components";
import { theme } from "../theme";
import React, { useState, useEffect } from "react";

export default styled(function Content({ className, children }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle({ height: "calc(100% - 48px - 48px)" });
    return () => {
      setStyle({ height: 0 });
    };
  }, []);

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
})`
  height: calc(100% - 240px - 48px);
  background-color: #ffffff;
  padding: 24px;
  overflow: auto;
  height: 0;
  width: 60%;
  padding-left: 118px;
  @media only screen and (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    height: calc(100% - 180px);
    padding-left: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  transition-property: height;
  transition-duration: 1.5s;
  transition-timing-function: linear;
  transition-delay: 0s;
`;
