import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const CardItem = ({ id, titulo, precio, imagen, altImagen, stock }) => {
  const onAdd = (count) => {
    console.log(
      `Agregaste a carrito ${count} productos con un total de $ ${
        count * precio
      }`
    );
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <CardActionArea sx={{ display: "flex", flexDirection: "column" }} component={Link} to={`/item/${id}`}>
          <CardMedia
            component="img"
            height="auto"
            width="100%"
            src={`/${imagen}`}
            alt={altImagen}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {titulo}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              $ {precio}
            </Typography>
          </CardContent>
      </CardActionArea>
      <ItemCount stock={stock} inicial={1} onAdd={onAdd} />
    </Card>
  );
};

export default CardItem;
