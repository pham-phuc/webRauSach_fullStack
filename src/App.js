import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent.jsx";
import { routes } from "./routes/index.js";
import "./App.css"
export function App() {

  return (
    <div>
    <HeaderComponent/>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
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
      </Router>

    </div>
  );
}
export default App;
