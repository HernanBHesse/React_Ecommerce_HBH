import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/ItemList/ItemList";
import filtrarPorCategoria from "../funciones/getCategoria";

const Categorias = () => {
  const [productCategoria, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    setProducts([]);
    filtrarPorCategoria(categoria).then((res) => {
      setProducts(res);
    });
  }, [categoria]);

  return (
    <>
      <div className="App-main contenedor-Inicio">
        <ItemList
          tituloSeccion={`Señuelos de ${
            categoria.charAt(0).toUpperCase() + categoria.slice(1)
          }`}
          products={productCategoria}
        />
      </div>
    </>
  );
};

export default Categorias;
