import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Visibility = ({ id, titulo, precio, imagen, altImagen, stock }) => {
  const [visibility, setVisibility] = useState(true);
  
  return (
    <>
      {visibility ? (
        <ItemCount
          id={id}
          titulo={titulo}
          precio={precio}
          imagen={imagen}
          alt={altImagen}
          stock={stock}
          inicial={1}
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
