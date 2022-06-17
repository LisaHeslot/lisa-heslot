import Page from "../components/Page";
import Content from "../components/Content";
import styled from "styled-components";
import { theme } from "../theme";
import avatar from "../images/avatar.png";

const AvatarContainer = styled.div`
  width: 240px;
  height: 240px;
  background-color: ${theme?.palette?.green?.main};
  border-radius: 120px;
  margin: 48px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 120px;
`;

export default function Index() {
  return (
    <Page>
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AvatarContainer>
            <Avatar src={avatar} alt="Avatar Lisa Heslot" />
          </AvatarContainer>
        </div>
        <h2>Ravie de vous renconter !</h2>
        <p>
          Je m'appelle Lisa et je suis développeuse.
          <br />
          Passionnée par l'informatique et diverses nouvelles technologies, je
          suis derrière un ordinateur depuis mon enfance. Après un diplôme de{" "}
          <strong>développeuse web et web-mobile</strong>, je suis actuellement
          en alternance afin de valider un bac+4 de{" "}
          <strong>conceptrice-développeuse d'applications</strong>.
          <br />
          Curieuse de nature, je saurais vous surprendre par mes centres
          d'intérêts variés !
        </p>
      </Content>
    </Page>
  );
}
