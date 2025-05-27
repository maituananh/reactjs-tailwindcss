const configApp = (): {
  API_URL: string;
  KEYCLOAK_REALM: string;
  KEYCLOAK_URL: string;
  KEYCLOAK_CLIENT: string;
} => {
  return {
    API_URL: process.env.REACT_APP_API_URL!,
    KEYCLOAK_REALM: process.env.REACT_APP_KEYCLOAK_REALM!,
    KEYCLOAK_URL: process.env.REACT_APP_KEYCLOAK_URL!,
    KEYCLOAK_CLIENT: process.env.REACT_APP_KEYCLOAK_CLIENT!,
  };
};

export default configApp();
