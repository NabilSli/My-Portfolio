import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import Layout from "./components/layout.jsx";
import { home, projects, error, cv } from "./routes.jsx";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fafafa",
          colorText: "#fafafa",
        },
        components: {
          Modal: {
            contentBg: "#1a1a1a",
            footerBg: "#1a1a1a",
            headerBg: "#1a1a1a",
          },
        },
      }}
    >
      <Router>
        <Layout>
          <Routes>
            <Route path={home.path} element={<home.Element />} />
            <Route path={projects.path} element={<projects.Element />} />
            <Route path={error.path} element={<error.Element />} />
            <Route path={cv.path} element={<cv.Element />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
