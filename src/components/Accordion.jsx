import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function ControlledAccordions({ data, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {data.map((el, index) => (
        <Accordion expanded={expanded === index} onChange={handleChange(index)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
          >
            <Typography sx={{ width: "70%", flexShrink: 0 }}>
              {el.title}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>{el.intro}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <a href={el.url} target="_blank" rel="noreferrer">
              {el.school || el.job}
            </a>
            <br />
            {el.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
