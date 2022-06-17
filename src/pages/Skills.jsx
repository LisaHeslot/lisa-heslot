import Page from "../components/Page";
import Content from "../components/Content";
import Chart from "../components/charts/Chart";

const options = {
  chart: {
    height: 350,
    type: "treemap",
  },
};

const series = {
  name: "Skills",
  data: [
    {
      x: "nodeJs",
      y: 218,
    },
    {
      x: "React",
      y: 149,
    },
    {
      x: "VueJs",
      y: 184,
    },
    {
      x: "PHP",
      y: 55,
    },
    {
      x: "Symfony",
      y: 44,
    },
    {
      x: "Java",
      y: 31,
    },
    {
      x: "SQL",
      y: 70,
    },
  ],
};

export default function Skills() {
  return (
    <Page>
      <Content>
        <h2>Skills</h2>
        Compétence professionnelles
        {/* <Chart options={options} series={series} /> */}
      </Content>
    </Page>
  );
}
