import { useRoutes } from "react-router-dom";
import { routes } from "./config";

const Routes = () => {
  const allRoutes = useRoutes(routes);
  return allRoutes;
};

export default Routes;
