import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import getItem from "../../funciones/getItem";

const ItemListContainer = ({ tituloSeccion }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItem().then((res) => {
      console.log("Respuesta GetItem: ", res);
      setProducts(res);
    });
  }, []);

  let dia = new Date();
  let ofertasDelDia = `${dia.toLocaleDateString()}`;

  return (
    <>
      <ItemList
        tituloSeccion={`${tituloSeccion} ${ofertasDelDia}`}
        products={products}
      />
    </>
  );
};

export default ItemListContainer;
