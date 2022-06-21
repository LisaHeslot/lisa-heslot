export const dataMapping = {
  nodeJs: {
    title: "Javascript - nodeJs",
    description: "Développement côté serveur d'applications web, api...",
    tags: [
      { name: "ExpressJS", url: "https://expressjs.com/fr/" },
      { name: ".mjs", url: "https://nodejs.org/" },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
      },
    ],
  },
  Javascript: {
    title: "JavaScript",
    description: "Développement frontend web et mobile.",
    tags: [
      { name: "React", url: "https://fr.reactjs.org/" },
      {
        name: "Vue.js",
        url: "https://vuejs.org/",
      },
      {
        name: "jQuery",
        url: "https://jquery.com/",
      },
    ],
  },
  MongoDB: {
    title: "MongoDB",
    description: "Utilisation de bases de données MongoDB.",
    tags: [
      {
        name: "Mongoose",
        url: "https://mongoosejs.com/",
      },
      {
        name: "Compass",
        url: "https://www.mongodb.com/fr-fr/products/compass",
      },
    ],
  },
  SQL: {
    title: "SQL",
    description: "Utilisation de bases de données relationnelles, langage SQL.",
    tags: [
      { name: "mySQL", url: "https://www.mysql.com/fr/" },
      { name: "PostGreSQL", url: "https://www.postgresql.org/" },
      {
        name: "SQL Server",
        url: "https://www.microsoft.com/fr-fr/sql-server/sql-server-2019",
      },
    ],
  },
  GraphQL: {
    title: "GraphQL",
    description: "Utilisation de GraphQL côté serveur et côté client.",
    tags: [{ name: "GraphQL", url: "https://graphql.org/" }],
  },
  PHP: {
    title: "PHP",
    description: "Développement de sites, applications web, api.",
    tags: [
      { name: "PHP", url: "https://www.php.net/" },
      { name: "Symfony", url: "https://symfony.com/" },
    ],
  },
  Java: {
    title: "Java",
    description: "Développement d'applications web.",
    tags: [
      { name: "Java SE", url: "https://www.java.com/fr/" },
      { name: "Java EE", url: "https://www.java.com/fr/" },
      { name: "Spring", url: "https://spring.io/" },
      { name: "Hibernate", url: "https://hibernate.org/" },
    ],
  },
};

export const series = [
  {
    data: [
      {
        x: "nodeJs",
        y: 250,
      },
      {
        x: "Javascript",
        y: 200,
      },
      {
        x: "SQL",
        y: 160,
      },
      {
        x: "MongoDB",
        y: 180,
      },
      {
        x: "GraphQL",
        y: 170,
      },
      {
        x: "PHP",
        y: 100,
      },
      {
        x: "Java",
        y: 50,
      },
    ],
  },
];

export const dataSecondary = [
  { name: "Docker", url: "https://www.docker.com/" },
  { name: "webpack", url: "https://webpack.js.org/" },
  { name: "Visual Studio Code", url: "" },
  { name: "Eclipse", url: "" },
  { name: "IntelliJ", url: "" },
  { name: "Wamp64", url: "" },
  { name: "Mamp", url: "" },
  { name: "Git", url: "" },
  { name: "GitHub", url: "" },
  { name: "BitBucket", url: "" },
  { name: "Jenkins", url: "" },
];
