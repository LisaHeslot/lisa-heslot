import Index from "../pages/Index.jsx";
import Who from "../pages/Who.jsx";
import { Home, AccountCircle } from "@mui/icons-material";

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
];
