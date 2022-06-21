import Chip from "@mui/material/Chip";
import { theme } from "../theme";

export default function TagsMap({ tags }) {
  return tags.map(({ name, url }) => (
    <a href={url} target="_blank" rel="noreferrer">
      <Chip
        label={name}
        clickable
        style={{
          margin: "3px",
          backgroundColor: theme.palette.green.main,
          fontFamily: "Noto Sans, sans-serif",
          fontWeight: "bold",
          color: theme.palette.white.main,
        }}
      />
    </a>
  ));
}
