//React
import { useState } from "react";
//DOM
import { Link } from "react-router-dom";
//Componentes
import ItemCount from "../ItemCount/ItemCount";
//Material
import { Button } from "@mui/material";


const Visibility = ({ id, titulo, precio, imagen, altImagen, stock, ver }) => {
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
          ver={ver}
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
