import TagsMap from "../../components/LinkedChips";

function MilleVolts({ tags }) {
  return (
    <p>
      En stage puis en apprentissage chez Mille Volts, au sein d'une équipe de 5
      personnes, j'y ai développé des outils internes, des applications web B2B,
      des apis et ai participé à la conception de certaines fonctionnalités en
      accord avec les besoins clients.
      <br />
      Travaillant principalement en NodeJs, React et Vue.js, j'ai également
      effectué quelques travaux en PHP.
      <br />
      <TagsMap tags={tags} />
    </p>
  );
}
function ENI({ tags }) {
  return (
    <p>
      En tant qu'étudiante au sein de l'ENI, j'ai réalisé en binôme des projets
      école en Java et PHP Symfony.
      <br />
      J'ai également pu m'exercer à d'autres technologies dans des exercices de
      moindre envergure.
      <br />
      <TagsMap tags={tags} />
    </p>
  );
}
function Faucheux({ tags }) {
  return (
    <p>
      J'ai assuré les cours aux enfants, adolescents et adultes durant deux ans
      aux écuries Faucheux et durant les vacances scolaires, encadré des stages.
      <br />
      De façon plus ponctuelle, j'y ai accueilli des publics handicapés.
      <br />
      <TagsMap tags={tags} />
    </p>
  );
}

function TyHaras({ tags }) {
  return (
    <p>
      Au Ty Haras, j'ai animé des cours enfant et adolescents et assuré des
      promenades.
      <br />
      <TagsMap tags={tags} />
    </p>
  );
}

function Neveu({ tags }) {
  return (
    <p>
      J'ai efectué des prestations de nettoyage au sein de laboratoires
      d'analyse médicales, cabinets médicaux, ESAT, bureaux...
      <br />
      <TagsMap tags={tags} />
    </p>
  );
}

export const data = [
  {
    title: "Développeuse web",
    intro: "2021-actuel",
    job: "Mille Volts",
    description: (
      <MilleVolts
        tags={[
          { name: "NodeJs", url: "https://nodejs.org/" },
          { name: "React", url: "https://fr.reactjs.org/" },
          {
            name: "Vue.js",
            url: "https://vuejs.org/",
          },
          {
            name: "MongoDB",
            url: "https://www.mongodb.com/",
          },
          { name: "PostGreSQL", url: "https://www.postgresql.org/" },
          { name: "GraphQL", url: "https://graphql.org/" },
          { name: "PHP", url: "https://www.php.net/" },
          { name: "Docker", url: "https://www.docker.com/" },
          { name: "webpack", url: "https://webpack.js.org/" },
        ]}
      />
    ),
    url: "https://www.millevolts.fr/",
  },
  {
    title: "Développeuse web",
    intro: "2020-2022",
    job: "ENI École informatique",
    description: (
      <ENI
        tags={[
          {
            name: "jQuery",
            url: "https://jquery.com/",
          },
          { name: "mySQL", url: "https://www.mysql.com/fr/" },
          {
            name: "SQL Server",
            url: "https://www.microsoft.com/fr-fr/sql-server/sql-server-2019",
          },
          { name: "PHP", url: "https://www.php.net/" },
          { name: "Symfony", url: "https://symfony.com/" },
          { name: "Java SE", url: "https://www.java.com/fr/" },
          { name: "Java EE", url: "https://www.java.com/fr/" },
          { name: "Spring", url: "https://spring.io/" },
          { name: "Hibernate", url: "https://hibernate.org/" },
        ]}
      />
    ),
    url: "https://www.eni-ecole.fr/",
  },
];
export const dataSecondary = [
  {
    title: "Monitrice animatrice d'équitation",
    intro: "2018-2020",
    job: "Ecurie Faucheux - Centre équestre de l'Hermitière",
    description: (
      <Faucheux
        tags={[
          { name: "Animation" },
          { name: "Instruction" },
          { name: "Entretien" },
          { name: "Soins" },
          { name: "Travail des chevaux" },
        ]}
      />
    ),
    url: "https://www.centreequestredelhermitiere.fr/",
  },
  {
    title: "Agent de services",
    intro: "2017-2020",
    job: "Neveu nettoyage",
    description: (
      <Neveu
        tags={[
          { name: "Bureaux" },
          { name: "Laboratoires" },
          { name: "Locaux" },
        ]}
      />
    ),
    url: "http://www.neveu-nettoyage.com/",
  },
  {
    title: "Animatrice d'équitation, tourisme équestre",
    intro: "2017-2018",
    job: "Le Ty Haras",
    description: (
      <TyHaras
        tags={[
          { name: "Animation" },
          { name: "Soins" },
          { name: "Travail des chevaux" },
        ]}
      />
    ),
    url: "https://www.letyharas.fr/",
  },
];
