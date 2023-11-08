import { Main, ProjectDisplay } from "./components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
