import config from "@configs/env";
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: config.KEYCLOAK_URL,
  realm: config.KEYCLOAK_REALM,
  clientId: config.KEYCLOAK_CLIENT,
});

export default keycloak;
