import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout.jsx";

import { home, projects, error } from "./routes.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={home.path} element={<home.Element />} />
          <Route path={projects.path} element={<projects.Element />} />
          <Route path={error.path} element={<error.Element />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
