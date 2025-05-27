import PrivateRoute from "@components/Auth/Private";
import keycloak from "@configs/keycloak";
import { DefaultLayout } from "@layouts/index";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { privateRountes, publicRoutes } from "@routes/index";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: "login-required",
        checkLoginIframe: false,
        enableLogging: true,
      }}
    >
      <Routes>
        {privateRountes.map((route, index) => {
          const Layout = route.layout ?? DefaultLayout;
          const Page = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute>
                  <Layout>
                    <Page />
                  </Layout>
                </PrivateRoute>
              }
            />
          );
        })}
        {publicRoutes.map((route, index) => {
          const Layout = route.layout ?? DefaultLayout;
          const Page = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </ReactKeycloakProvider>
  );
}

export default App;
