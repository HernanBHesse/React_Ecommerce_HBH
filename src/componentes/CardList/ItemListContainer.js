import CardItem from "../Card/Card";
import { Grid } from "@mui/material";

const ItemListContainer = ({ tituloSeccion }) => {
  let dia = new Date();
  let ofertasDelDia = `${dia.toLocaleDateString()}`;

  return (
    <>
      <h2>{`${tituloSeccion} ${ofertasDelDia}`}</h2>
      <br />
      <Grid container spacing={1}>
        <Grid item lg={3} sm={6}>
          <CardItem
            titulo={"Señuelo 1"}
            precio={500}
            imagen={"Senuelo1.png"}
            altImagen={"Imagen de señuelo 1"}
            stock={5}
          />
        </Grid>
        <Grid item lg={3} sm={6}>
          <CardItem
            titulo={"Señuelo 2"}
            precio={560}
            imagen={"Senuelo2.png"}
            altImagen={"Imagen de señuelo 2"}
            stock={7}
          />
        </Grid>
        <Grid item lg={3} sm={6}>
          <CardItem
            titulo={"Señuelo 3"}
            precio={1200}
            imagen={"Senuelo3.png"}
            altImagen={"Imagen de señuelo 3"}
            stock={11}
          />
        </Grid>
        <Grid item lg={3} sm={6}>
          <CardItem
            titulo={"Señuelo 4"}
            precio={800}
            imagen={"Senuelo4.png"}
            altImagen={"Imagen de señuelo 4"}
            stock={3}
          />
        </Grid>
      </Grid>
      <br />
      <h2>Más populares del mes</h2>
      <br />
      <Grid container spacing={1}>
        <Grid item lg={6} sm={6}>
          <CardItem
            titulo={"Señuelo 1"}
            precio={500}
            imagen={"Senuelo1.png"}
            altImagen={"Imagen de señuelo 1"}
            stock={2}
          />
        </Grid>
        <Grid item lg={6} sm={6}>
          <CardItem
            titulo={"Señuelo 4"}
            precio={800}
            imagen={"Senuelo4.png"}
            altImagen={"Imagen de señuelo 4"}
            stock={15}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ItemListContainer;
