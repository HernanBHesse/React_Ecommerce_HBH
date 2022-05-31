import productos from "../utils/productos";

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export default getItem;
