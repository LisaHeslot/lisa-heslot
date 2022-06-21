import Page from "../components/Page";
import Content from "../components/Content";
import Accordion from "../components/Accordion";
import { data } from "./data/formations";

export default function Formations() {
  return (
    <Page>
      <Content>
        <h2>Formations</h2>
        <Accordion data={data} />
      </Content>
    </Page>
  );
}
