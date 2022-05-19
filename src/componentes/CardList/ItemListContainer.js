import CardItem from '../Card/Card';
import { Grid } from '@mui/material';

const ItemListContainer = ({tituloSeccion}) => {
    let dia = new Date();
    let oferta = `${dia.toLocaleDateString()}`;
    return (
        <>
            <h2>{`${tituloSeccion} ${oferta}`}</h2>
            <br/>
            <Grid container spacing={1}>
                <Grid item lg={3} sm={6}>
                    <CardItem titulo={"Señuelo 1"} precio={500} imagen={"Senuelo1.png"} altImagen={"Imagen de señuelo 1"} />
                </Grid>
                <Grid item lg={3} sm={6}>
                    <CardItem titulo={"Señuelo 2"} precio={560} imagen={"Senuelo2.png"} altImagen={"Imagen de señuelo 2"} />
                </Grid>
                <Grid item lg={3} sm={6}>
                    <CardItem titulo={"Señuelo 3"} precio={1200} imagen={"Senuelo3.png"} altImagen={"Imagen de señuelo 3"} />
                </Grid>
                <Grid item lg={3} sm={6}>
                    <CardItem titulo={"Señuelo 4"} precio={800} imagen={"Senuelo4.png"} altImagen={"Imagen de señuelo 4"} />
                </Grid>
            </Grid>
            <br/>
            <h2>Más populares</h2>
            <br/>
            <Grid container spacing={1}>
                <Grid item lg={6} sm={6}>
                    <CardItem titulo={"Señuelo 1"} precio={500} imagen={"Senuelo1.png"} altImagen={"Imagen de señuelo 1"} />
                </Grid>
                <Grid item lg={6} sm={6}>
                    <CardItem titulo={"Señuelo 4"} precio={800} imagen={"Senuelo4.png"} altImagen={"Imagen de señuelo 4"} />
                </Grid>
            </Grid>
        </>
    )
}

export default ItemListContainer;