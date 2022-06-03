import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Home from "./pages/Home";
import Productos from "./pages/ListadoDeProductos";
import Categorias from "./pages/Categorias";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<h2>404 - Pagina no encontrada</h2>} />
        <Route path="/" element={<Home />} />
        <Route path="/listadoproductos" element={<Productos />} />
        <Route path="/category/:categoria" element={<Categorias />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
