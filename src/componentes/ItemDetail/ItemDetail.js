//Componentes
import CompletePurchase from "../Buttons/CompletePurchase";
//Material
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const ItemDetail = ({ product }) => {
  const {id, titulo, precio, imagen, altImagen, stock, descripcion } = product;

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 800,
          mx: "auto",
          mt: 1,
          mb: 1,
        }}
      >
        <CardActionArea>
          <Typography gutterBottom variant="h4" component="h4">
            {titulo}
          </Typography>
          <CardMedia
            component="img"
            min-height="200"
            max-height="500"
            src={`/${imagen}`}
            alt={altImagen}
          />
        </CardActionArea>
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "auto",
            gridTemplateRows: "auto",
            p: 1,
            m: 0,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ gridArea: "1 / 1 / 4 / 2", textAlign: "left" }}
          >
            {descripcion}
          </Typography>
          <Typography
            variant="body3"
            color="text.secondary"
            sx={{
              gridArea: "1 / 2 / 2 / 3",
              fontWeight: 600,
              placeSelf: "center",
            }}
          >
            Precio $ {precio}
          </Typography>
          <Typography
            variant="body3"
            color="text.secondary"
            sx={{
              gridArea: "2 / 2 / 3 / 3",
              fontWeight: 600,
              placeSelf: "center",
            }}
          >
            Stock: {stock}
          </Typography>
          <CardActions
            sx={{
              gridArea: "3 / 2 / 4 / 3",
              placeSelf: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CompletePurchase
              id={id}
              titulo={titulo}
              precio={precio}
              imagen={imagen}
              alt={altImagen}
              stock={stock}
              ver={false}
            />
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemDetail;
