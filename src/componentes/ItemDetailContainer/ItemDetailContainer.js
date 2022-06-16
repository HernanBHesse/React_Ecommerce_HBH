import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/FirebaseConfig";

const ItemDetailContainer = () => {
  const [prod, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItemDetail(id).then((res) => {
      setProducto(res);
    });
  }, [id]);

  const getItemDetail = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnaptshop = await getDoc(docRef);
    let producto = docSnaptshop.data();
    producto.id = docSnaptshop.id;
    return producto;
  };

  return (
    <>
      <ItemDetail product={prod} key={prod.id} />
    </>
  );
};

export default ItemDetailContainer;
