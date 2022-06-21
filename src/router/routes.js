import Index from "../pages/Index.jsx";
import Who from "../pages/Who.jsx";
import Formations from "../pages/Formations.jsx";
import Skills from "../pages/Skills.jsx";
import Experiences from "../pages/Experiences.jsx";
import Projects from "../pages/Projects.jsx";
import Legal from "../pages/Legal.jsx";
import {
  Home,
  AccountCircle,
  School,
  Build,
  Work,
  WorkOutline,
  Policy,
} from "@mui/icons-material";

export const routes = [
  {
    path: "/",
    element: <Index />,
    name: "Index",
    startIcon: <Home />,
  },
  {
    path: "/who-i-am",
    element: <Who />,
    name: "Me connaître",
    startIcon: <AccountCircle />,
  },
  {
    path: "/formations",
    element: <Formations />,
    name: "Formations",
    startIcon: <School />,
  },
  {
    path: "/skills",
    element: <Skills />,
    name: "Skills",
    startIcon: <Build />,
  },
  {
    path: "/experiences",
    element: <Experiences />,
    name: "Expériences",
    startIcon: <Work />,
  },
  {
    path: "/projects",
    element: <Projects />,
    name: "Projets",
    startIcon: <WorkOutline />,
  },
];

export const routesSecondary = [
  {
    path: "/legal",
    element: <Legal />,
    name: "Mentions légales",
    startIcon: <Policy />,
  },
];
