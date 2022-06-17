import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

export default function TooltipHoverTouch({ content, children }) {
  return (
    <Tooltip disableFocusListener title={content}>
      {children}
    </Tooltip>
  );
}
