//DOM
import { Link } from "react-router-dom";
//Componentes
import CompletePurchase from "../Buttons/CompletePurchase";
//Material
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardItem = ({ id, titulo, precio, imagen, altImagen, stock }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <CardActionArea
        sx={{ display: "flex", flexDirection: "column" }}
        component={Link}
        to={`/item/${id}`}
      >
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
      <CompletePurchase
        id={id}
        titulo={titulo}
        precio={precio}
        imagen={imagen}
        alt={altImagen}
        stock={stock}
        ver={true}
      />
    </Card>
  );
};

export default CardItem;
