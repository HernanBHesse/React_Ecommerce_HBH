import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ItemDetail = ({ tituloSeccion, product }) => {
  const { titulo, precio, imagen, altImagen, descripcion } = product;

  return (
    <>
      <br />
      <Card sx={{ maxWidth: 800, mx: "auto", mb: 1, p: 2}}>
        <CardActionArea>
        <Typography gutterBottom variant="h4" component="h4">
        {tituloSeccion}
            </Typography>
          <CardMedia
            component="img"
            min-height="300"
            src={`/${imagen}`}
            alt={altImagen}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{mb: 1}}>
              {descripcion}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              Precio $ {precio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ItemDetail;
