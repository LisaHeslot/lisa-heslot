import Index from "../pages/Index.jsx";
import Who from "../pages/Who.jsx";
import Formations from "../pages/Formations.jsx";
import Skills from "../pages/Skills.jsx";
import { Home, AccountCircle, School, Build } from "@mui/icons-material";

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
];
