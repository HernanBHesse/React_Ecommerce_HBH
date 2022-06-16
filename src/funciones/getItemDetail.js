import { doc, getDoc } from "firebase/firestore";
import db from "../utils/FirebaseConfig";

const getItemDetail = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnaptshop = await getDoc(docRef);
  let producto = docSnaptshop.data();
  producto.id = docSnaptshop.id;
  return producto;
};

export default getItemDetail;