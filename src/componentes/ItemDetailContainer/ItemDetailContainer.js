import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../../utils/productos";

const ItemDetailContainer = () => {
  const [prod, setProducto] = useState([]);
  const { id } = useParams();

  const filtrarProducto = productos.find((producto) => {
    return producto.id == id;
  });

  useEffect(() => {
    setProducto(filtrarProducto);
  }, []);

  return (
    <>
      <ItemDetail tituloSeccion={prod.titulo} product={prod} key={prod.id} />
    </>
  );
};

export default ItemDetailContainer;
