
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home" // Página inicial
import Explore from "./pages/Explore/Explore";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;
