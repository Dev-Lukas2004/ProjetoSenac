import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particle from "./components/Particle.jsx";
import LandingPage from "./components/LandingPage.jsx";
import QuizPage from '../src/components/QuizPage.jsx';
import DetalhesProfissao from "./components/DetalheProfissao.jsx";
import "./index.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Particle className="particle" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
