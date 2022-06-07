import { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import onAdd from "../../funciones/onAdd";

const ItemCount = ({ stock, inicial, precio, show}) => {
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
          onAdd(count, precio, show);
          setCount(inicial); 
        }}
      />
    </>
  );
};

export default ItemCount;
