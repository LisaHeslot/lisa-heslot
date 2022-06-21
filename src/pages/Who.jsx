import Page from "../components/Page";
import Content from "../components/Content";
import WhoBubbles from "../components/charts/WhoBubbles";
import { data } from "./data/who";

export default function Who() {
  return (
    <Page>
      <Content>
        <WhoBubbles data={data} />
      </Content>
    </Page>
  );
}
