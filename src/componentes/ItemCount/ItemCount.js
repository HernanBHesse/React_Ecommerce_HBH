import "./ItemCount.css";
import { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [count, setCount] = useState(inicial);
  const addCount = () => {
    if (count < stock) {
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
        onClick={() => {
          onAdd(count);
          setCount(inicial);
        }}
      />
    </>
  );
};

export default ItemCount;
