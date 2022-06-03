import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
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
