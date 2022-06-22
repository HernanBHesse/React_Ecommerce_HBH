//React
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [itemsCartCount, setItemsCartCount] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const addProductToCart = (product) => {
    const isInCart = cartListItems.find(
      (cartItem) => cartItem.id === product.id
    );

    if (isInCart) {
        isInCart.count += product.count;
        setItemsCartCount(itemsCartCount + product.count);
        setPrecioTotal(precioTotal + product.precio * product.count);

    } else {
      setItemsCartCount(itemsCartCount + product.count);
      setPrecioTotal(precioTotal + product.precio * product.count);
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  const removeCartItem = (id) => {
    const copyCart = [...cartListItems];
    const newCartListItems = copyCart.filter((remove) => remove.id !== id);
    setCartListItems(newCartListItems);
  };

  const data = {
    cartListItems,
    addProductToCart,
    setCartListItems,
    setItemsCartCount,
    setPrecioTotal,
    removeCartItem,
    itemsCartCount,
    precioTotal,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
