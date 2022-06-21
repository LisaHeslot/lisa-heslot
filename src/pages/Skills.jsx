import Page from "../components/Page";
import Content from "../components/Content";
import Chart from "../components/charts/Chart";
import ChartTooltip from "../components/charts/ChartTooltip";
import { theme } from "../theme";
import { useState } from "react";
import { dataMapping, series, dataSecondary } from "./data/skills";
import styled from "styled-components";
import TagsMap from "../components/LinkedChips";

const ChartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Skills() {
  const [selectedData, setSelectedData] = useState(null);
  function handleClose() {
    setSelectedData(null);
  }

  const options = {
    chart: {
      type: "treemap",
      events: {
        dataPointSelection: function (e, __, { seriesIndex, dataPointIndex }) {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const index = series[seriesIndex]?.data[dataPointIndex]?.x;
          setSelectedData(dataMapping[index]);
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: true,
        shadeIntensity: 0.7,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 300,
              color: "#76825b",
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return dataMapping[val]?.title;
      },
      textAnchor: "middle",
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "14px",
        fontFamily: "Noto Sans, sans-serif",
        fontWeight: "bold",
        color: theme.palette.white.main,
      },
    },
  };

  return (
    <Page>
      <Content>
        <h2>Skills</h2>
        <h4 style={{ marginBottom: 0 }}>
          Langages, frameworks, bases de données...
        </h4>
        <ChartContainer>
          <Chart options={options} series={series} type="treemap" />
          <ChartTooltip selectedData={selectedData} handleClose={handleClose} />
        </ChartContainer>
        <h4>Outils utilisés, environnements, connaissances annexes...</h4>
        <TagsMap tags={dataSecondary} />
      </Content>
    </Page>
  );
}
