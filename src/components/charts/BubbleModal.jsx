import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { theme } from "../../theme.js";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default styled(function BubbleModal({
  data,
  handleClose,
  open,
  className,
}) {
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      style={{ border: 0 }}
    >
      <Box className={className}>
        <Button
          color="black"
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </Button>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </Box>
    </Modal>
  );
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 80%;
  height: 350px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  background-color: #ffffff;
  border-radius: 18px;
  padding: 18px;
  outline: none;
`;
