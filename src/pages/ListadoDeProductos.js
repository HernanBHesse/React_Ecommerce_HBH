//React
import { useState, useEffect } from "react";
//Componentes
import getItem from "../funciones/getItem";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItem().then((res) => {
      setProducts(res);
    });
  }, []);
    return (
        <>
        <ItemListContainer tituloSeccion={"Catalogo completo del "} products={products} />
      </>
    )
}

export default Productos;