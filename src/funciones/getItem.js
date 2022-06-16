import { collection, getDocs } from "firebase/firestore";
import db from "../utils/FirebaseConfig";

const getItem = async () => {
  const productSnapshot = await getDocs(collection(db, "productos"));
  const productList = productSnapshot.docs.map((doc) => {
    let producto = doc.data()
    producto.id = doc.id
    return producto;
  });
  return productList;
};

export default getItem;
