import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
