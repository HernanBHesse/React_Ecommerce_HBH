//Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../utils/FirebaseConfig";

const filtrarPorCategoria = async (listado ,categoria) => {
  const q = query(
    collection(db, "productos"),
    where(listado, "==", categoria)
  );
  const querySnapshot = await getDocs(q);
  const querytList = querySnapshot.docs.map((doc) => {
    let producto = doc.data();
    producto.id = doc.id;
    return producto;
  });
  return querytList;
};

export default filtrarPorCategoria;
