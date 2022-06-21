import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import styled from "styled-components";

export default styled(function ProjectCard({ data, className }) {
  const { title, url, source, description, preview } = data;
  return (
    <Card className={className} style={{ overflow: "auto" }}>
      <CardActionArea
        onClick={() => {
          url && window.open(url, "_blank");
        }}
      >
        <CardMedia
          component="img"
          style={{ maxHeight: 100 }}
          image={preview}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {source && (
        <Button
          size="small"
          color="green"
          onClick={() => {
            window.open(source, "_blank");
          }}
        >
          GitHub
        </Button>
      )}
    </Card>
  );
})`
  width: 240px;
  height: 300px;
  padding: 6px;
  margin: 6px;
`;
