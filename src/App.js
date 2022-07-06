import Header from "./components/Header";
import Accueil from "./pages/home/Accueil";
import Apropos from "./pages/about/apropos";
import Services from "./pages/services/Services";
import Produits from "./pages/produits/Produits";
import {Routes, Route} from "react-router-dom";
import "./styles/App.css"
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/apropos" element={<Apropos />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/produits" element={<Produits />}/>
        </Routes>
    </div>
  );
}

export default App;
