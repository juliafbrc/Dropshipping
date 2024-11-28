
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home" // Página inicial
import Explore from "./pages/Explore/Explore";
import Carrinho from "./pages/Carrinho/Carrinho";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
};

export default App;
