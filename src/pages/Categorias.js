import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getItem from "../../src/funciones/getItem";
import ItemList from "../componentes/ItemList/ItemList";

const Categorias = () => {
  const [productCategoria, setProducts] = useState([]);
  const { categoria } = useParams();
 

  useEffect(() => {
    setProducts([]);
    getItem().then((res) => {
      filtrarPorCategoria(res);
    });
  }, [categoria]);

  const filtrarPorCategoria = (array) => {
    return array.map((item) => {
      if (item.categoria === categoria) {
        return setProducts((products) => [...products, item]);
      }
    });
  };

  return (
    <>
      <div className="App-main contenedor-Inicio">
        <ItemList
          tituloSeccion={`Señuelo de ${categoria}`}
          products={productCategoria}
        />
      </div>
    </>
  );
};

export default Categorias;
