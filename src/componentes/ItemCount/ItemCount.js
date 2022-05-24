import "./ItemCount.css";
import { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({ stock, inicial, precio }) => {
  const [count, setCount] = useState(inicial);
  const addCount = () => {
    if (count <= stock) setCount(count + 1);
  };
  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addOn = () => {
    console.log(
      `Agregaste a carrito ${count} productos con un total de $ ${
        count * precio
      }`
    );
    setCount(1);
  };

  return (
    <>
      <hr />
      <div className="contador-item">
        <Button variant="text" children="+" onClick={addCount} />
        <p>{count}</p>
        <Button variant="text" children="-" onClick={removeCount} />
      </div>
      <Button
        variant="contained"
        color="info"
        children="Comprar"
        onClick={addOn}
      />
    </>
  );
};

export default ItemCount;
