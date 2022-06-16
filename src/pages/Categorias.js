import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../utils/FirebaseConfig";

const Categorias = () => {
  const [productCategoria, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    setProducts([]);
    filtrarPorCategoria(categoria).then((res) => {
      setProducts(res);
    });
  }, [categoria]);

  const filtrarPorCategoria = async (categoria) => {
    const q = query(
      collection(db, "productos"),
      where("categoria", "==", categoria)
    );

    const querySnapshot = await getDocs(q);
    const querytList = querySnapshot.docs.map((doc) => {
      let producto = doc.data();
      producto.id = doc.id;
      return producto;
    });
    return querytList;
  };

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
