import Page from "../components/Page";
import Content from "../components/Content";
import Chart from "../components/charts/Chart";
import ChartTooltip from "../components/charts/ChartTooltip";
import { theme } from "../theme";
import { useState } from "react";
import { dataMapping, series } from "./data/skills";

export default function Skills() {
  const [selectedData, setSelectedData] = useState(null);
  function handleClose() {
    setSelectedData(null);
  }

  const options = {
    chart: {
      height: 350,
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
        <h4>Langages, frameworks, bases de données...</h4>
        <div style={{ position: "relative" }}>
          <Chart options={options} series={series} type="treemap" />
          <ChartTooltip selectedData={selectedData} handleClose={handleClose} />
        </div>
      </Content>
    </Page>
  );
}
