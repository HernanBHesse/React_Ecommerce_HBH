//CSS
import "./App.css";
//Componentes
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
//Paginas
import Home from "./pages/Home";
import Productos from "./pages/ListadoDeProductos";
import Categorias from "./pages/Categorias";
//DOM
import { Routes, Route } from "react-router-dom";
//Context
import { CartProvider } from "./componentes/context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="*" element={<h2>404 - Pagina no encontrada</h2>} />
          <Route path="/" element={<Home />} />
          <Route path="/listadoproductos" element={<Productos />} />
          <Route path="/category/:categoria" element={<Categorias />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<h1>Compra finalizada</h1>} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
