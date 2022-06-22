//React
import { useState, useEffect } from "react";
//Componentes
import ItemList from "../ItemList/ItemList";
import getItem from "../../funciones/getItem";

const ItemListContainer = ({ tituloSeccion }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItem().then((res) => {
      setProducts(res);
    });
  }, []);

  let dia = new Date();
  let ofertasDelDia = `${dia.toLocaleDateString()}`;

  return (
    <>
      <div className="App-main contenedor-Inicio">
        <ItemList
          tituloSeccion={`${tituloSeccion} ${ofertasDelDia}`}
          products={products}
        />
      </div>
    </>
  );
};

export default ItemListContainer;
