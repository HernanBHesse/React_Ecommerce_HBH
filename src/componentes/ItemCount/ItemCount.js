import { useState, useContext } from "react";
import { Button, ButtonGroup } from "@mui/material";
import CartContext from "../context/CartContext";

const ItemCount = ({
  id,
  titulo,
  precio,
  imagen,
  altImagen,
  stock,
  inicial,
  ver,
  show,
}) => {
  const [count, setCount] = useState(inicial);
  const [itemStock, setItemStock] = useState(stock);
  const { addProductToCart } = useContext(CartContext);
  const addCount = () => {
    if (count < itemStock) {
      setCount(count + 1);
    }
  };
  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {itemStock !== 0 ? (
        <>
          <ButtonGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "5px",
            }}
          >
            <Button variant="text" children="+" onClick={addCount} />
            {count}
            <Button variant="text" children="-" onClick={removeCount} />
          </ButtonGroup>
          <Button
            variant="contained"
            color="info"
            children="Comprar"
            onClick={() => {
              show(ver);
              setCount(inicial);
              addProductToCart({
                id,
                titulo,
                precio,
                imagen,
                altImagen,
                stock,
                count,
              });
              setItemStock(itemStock - count);
            }}
          />
        </>
      ) : (
        <h3>Sin Stock</h3>
      )}
    </>
  );
};

export default ItemCount;
