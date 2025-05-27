import { useKeycloak } from "@react-keycloak/web";
import { JSX } from "react";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return null;
  }
  return children;
};

export default PrivateRoute;
