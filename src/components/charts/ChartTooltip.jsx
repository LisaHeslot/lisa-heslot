import * as React from "react";
import styled from "styled-components";
import { theme } from "../../theme.js";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";

const Title = styled.h4`
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.8em;
`;

export default styled(function ChartTooltip({
  selectedData,
  handleClose,
  className,
}) {
  if (!selectedData) return null;
  const { title, description, tags } = selectedData;
  return (
    <div className={className}>
      <IconButton
        onClick={handleClose}
        size="small"
        style={{ position: "absolute", right: "6px", top: "6px" }}
      >
        <CloseIcon />
      </IconButton>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {tags.map(({ name, url }) => (
        <a href={url} target="_blank" rel="noreferrer">
          <Chip label={name} clickable style={{ margin: "3px" }} />
        </a>
      ))}
    </div>
  );
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  max-width: 70%;
  background-color: ${theme.palette.white.main};
  padding: 12px;
  border-radius: 18px;
`;
