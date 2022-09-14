//Componentes
import CardItem from "../Item/Item";
//Material
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const styles = {
  typographyContainer: {
    width: "max-content",
    margin: "5px auto 5px auto",
    backgroundColor: "#00000075",
    borderRadius: "0.5rem",
    boxShadow: "3px 3px 5px 0px #0000004d",
  },
};

const ItemList = ({ tituloSeccion, products }) => {
  return (
    <>
      <Typography variant="h4" color="white" style={styles.typographyContainer}>
        {tituloSeccion}
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ width: "80vw", placeContent: "center", mx: "auto" }}
      >
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
