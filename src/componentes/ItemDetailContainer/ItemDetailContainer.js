//React
import { useState, useEffect } from "react";
//DOM
import { useParams } from "react-router-dom";
//Componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import getItemDetail from "../../funciones/getItemDetail";

const ItemDetailContainer = () => {
  const [prod, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItemDetail(id).then((res) => {
      setProducto(res);
    });
  }, [id]);

  return (
    <>
      <ItemDetail product={prod} key={prod.id} />
    </>
  );
};

export default ItemDetailContainer;
