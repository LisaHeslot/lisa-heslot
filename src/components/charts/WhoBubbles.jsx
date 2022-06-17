import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import styled from "styled-components";
import React, { useState } from "react";
import BubbleModal from "./BubbleModal";

const BubbleTitle = styled.h4`
  font-size: 1em;
  margin-bottom: 6px;
`;

const Bubble = styled(function ({ className, data, key }) {
  const style = {
    backgroundColor: data.backgroundColor,
    color: data.color,
    ...(data.clickable ? { cursor: "pointer" } : {}),
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={className} style={style} onClick={handleOpen}>
        <BubbleTitle>{data.title}</BubbleTitle>
        {data.icon}
      </div>
      <BubbleModal data={data} open={open} handleClose={handleClose} />
    </>
  );
})`
  width: 100%; /* width expands to fit bubble */
  height: 100%; /* width expands to fit bubble */
  border-radius: 50%; /* rounded border forms a circle */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default styled(function WhoBubbles({ className, data, props }) {
  const options = {
    size: 180,
    minSize: 180,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  const children = data?.map((data, i) => {
    return <Bubble data={data} key={i} />;
  });

  return (
    <>
      <h2>Me connaître</h2>
      <BubbleUI options={options} className={className}>
        {children}
      </BubbleUI>
    </>
  );
})`
  width: 100%; /* width expands to fit bubble */
  height: 80%; /* width expands to fit bubble */
  border-radius: 50%; /* rounded border forms a circle */
`;
