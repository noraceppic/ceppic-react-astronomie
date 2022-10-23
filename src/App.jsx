import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Ajouter from "./pages/Ajouter";
import Articles from "./pages/Articles";
import Apropos from "./pages/Apropos";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Articles" element={<Articles />} />
        <Route path="Ajouter" element={<Ajouter />} />
        <Route path="Apropos" element={<Apropos />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
