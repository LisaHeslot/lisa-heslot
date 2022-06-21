import Page from "../components/Page";
import Content from "../components/Content";
import { data } from "./data/projects";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Projects() {
  return (
    <Page>
      <Content>
        <h2>Projets réalisés</h2>
        <CardsContainer>
          {data.map((el) => (
            <ProjectCard data={el} />
          ))}
        </CardsContainer>
      </Content>
    </Page>
  );
}
