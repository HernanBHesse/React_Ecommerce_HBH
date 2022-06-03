import CardItem from "../Item/Item";
import { Grid } from "@mui/material";

const ItemList = ({ tituloSeccion, products }) => {
  return (
    <>
      <h2>{tituloSeccion}</h2>
      <Grid container spacing={3} sx={{ maxWidth: "98vw", justifyContent: "center", mt: 1}}>
        {products.map(({ id, titulo, precio, imagen, altImagen, stock }) => {
          return (
            <Grid item lg={3} sm={6} key={id}>
              <CardItem
                id={id}
                titulo={titulo}
                precio={precio}
                imagen={imagen}
                alt={altImagen}
                stock={stock}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ItemList;
