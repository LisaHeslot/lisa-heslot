import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  breakpoints: { desktop: "1024px" },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#ffffff",
    },
    green: {
      main: "#B8CAAB",
      dark: "#76825b",
      vivid: "#daedaf",
    },
  },
});
