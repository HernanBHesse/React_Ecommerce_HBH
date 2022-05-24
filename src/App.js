import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/CardList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <NavBar />
      <div className="App-main contenedor-Inicio">
        <ItemListContainer tituloSeccion={"Ofertas del"} />
      </div>
      <div className="App-footer">
        <h3>Footer</h3>
      </div>
    </div>
  );
}

export default App;
