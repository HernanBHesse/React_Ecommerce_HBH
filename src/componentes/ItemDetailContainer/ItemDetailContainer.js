import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import getItem from "../../funciones/getItem";

const ItemDetailContainer = ({ tituloSeccion}) => {
  const [prod, setProducto] = useState([]);

  useEffect(() => {
    getItem().then((res) => {
      setProducto(res.find((product) => product.id === 3));
    });
  }, []);

  return (
    <>
      <ItemDetail
        tituloSeccion={`${tituloSeccion}`}
        product={prod}
        key={prod.id}
      />
    </>
  );
};

export default ItemDetailContainer;
