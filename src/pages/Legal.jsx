import Page from "../components/Page";
import Content from "../components/Content";
import styled from "styled-components";
import { theme } from "../theme";
import { credits } from "./data/legal.js";

const Subtitle = styled.h4`
  margin-bottom: 0;
`;

export default function Legal() {
  return (
    <Page>
      <Content>
        <h2>Mentions légales</h2>
        <p>
          Cette page contient les informations légales concernant ce site
          internet, ci-après nommé "site".
        </p>
        <Subtitle>Éditrice</Subtitle>
        <p>
          Heslot Lisa
          <br />
          <a href="mailto:heslot.lisa@outlook.fr">heslot.lisa@outlook.fr</a>
          <br />
          Particulier
          <br />
          Ci-après nommée "l'éditrice".
        </p>
        <Subtitle>Hébergement</Subtitle>
        <p></p>
        <Subtitle>Propriété intellectuelle</Subtitle>
        <p>
          Le contenu du site relèvent de la propriété intellectuelle de
          l'éditrice, à l'exception des logos et contenus citant d'autres
          sociétés et clairement indiqués. Les librairies et contenus
          open-source utilisés sur ce site sont spécifiés à la suite.
          <br />
          conformément aux dispositions des articles L.122-4 et L.335.2 du Code
          de la propriété intellectuelle, la représentation partielle ou totale
          du site ou de son contenu est interdite sans autorisation écrite et
          préalable de l'éditrice.
        </p>
        <Subtitle>Cookies et données</Subtitle>
        <p>
          Le site n'utilise pas de cookies ni de services collectant les données
          des utilisateurs.
        </p>
        <Subtitle>Crédits, librairies...</Subtitle>
        <ul>
          {credits.map(({ title, url }) => (
            <li>
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </Content>
    </Page>
  );
}
