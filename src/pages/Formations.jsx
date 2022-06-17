import Page from "../components/Page";
import Content from "../components/Content";
import Accordion from "../components/Accordion";

const data = [
  {
    title: "Concepteur développeur d'applications",
    intro: "2021-2022",
    school: "ENI école informatique",
    description: "Titre certifié bac+4",
    url: "https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/",
  },
  {
    title: "Développeur web et web mobile",
    intro: "2020-2021",
    school: "ENI école informatique",
    description: "Titre certifié bac+2",
    url: "https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/",
  },
  {
    title: "Animateur d'équitation",
    intro: "2016-2017",
    school: "Fénicat, CFA du sport de Dinard",
    description:
      "BAPAAT loisirs du jeune et de l'enfant, mentions poney et randonnée équestre",
    url: "https://www.campus-sport-bretagne.fr/",
  },
];

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
