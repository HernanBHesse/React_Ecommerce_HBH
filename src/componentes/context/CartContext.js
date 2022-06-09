import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const addProductToCart = (product) => {
    const isInCart = cartListItems.find(
      (cartItem) => cartItem.id === product.id
    );
    if (!isInCart) {
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  const removeCartItem = (id) => {
    const copyCart = [...cartListItems];
    const newCartListItems = copyCart.filter((remove) => remove.id !== id);
    setCartListItems(newCartListItems);
  }

  const data = {
    cartListItems,
    addProductToCart,
    setCartListItems,
    removeCartItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
