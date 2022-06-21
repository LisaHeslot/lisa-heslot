import Page from "../components/Page";
import Content from "../components/Content";
import Accordion from "../components/Accordion";
import { data, dataSecondary } from "./data/experiences";

export default function Experiences() {
  return (
    <Page>
      <Content>
        <h2>Expériences professionnelles</h2>
        <h4>Développement</h4>
        <Accordion data={data} />
        <h4>Autres</h4>
        <Accordion data={dataSecondary} />
      </Content>
    </Page>
  );
}
