import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./layouts";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Routes>
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
  );
}

export default App;
