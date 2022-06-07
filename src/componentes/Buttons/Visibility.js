import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
import {Link} from "react-router-dom"

const Visibility = ({stock, precio}) => {
  const [visibility, setVisibility] = useState(true);
  return (
    <>
      {visibility ? (
        <ItemCount
          stock={stock}
          inicial={1}
          precio={precio}
          show={setVisibility}
        />
      ) : (
        <Button
          variant="contained"
          color="info"
          component={Link}
          to="/cart"
          children="Finalizar Compra"
        />
      )}
    </>
  );
};

export default Visibility;
