import CardItem from "../Item/Item";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const ItemList = ({ tituloSeccion }) => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const productos = [
      {
        id: 1,
        titulo: "Señuelo 1",
        precio: 500,
        imagen: "Senuelo1.png",
        altImagen: "Imagen de señuelo 1",
        stock: 5,
      },
      {
        id: 2,
        titulo: "Señuelo 2",
        precio: 700,
        imagen: "Senuelo2.png",
        altImagen: "Imagen de señuelo 2",
        stock: 7,
      },
      {
        id: 3,
        titulo: "Señuelo 3",
        precio: 1000,
        imagen: "Senuelo3.png",
        altImagen: "Imagen de señuelo 3",
        stock: 12,
      },
      {
        id: 4,
        titulo: "Señuelo 4",
        precio: 800,
        imagen: "Senuelo4.png",
        altImagen: "Imagen de señuelo 4",
        stock: 3,
      },
    ];
    const getItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
    };
    getItem().then((res) => {
      console.log("Respuesta GetItem: ", res);
      setProducts(res);
    });
  }, []);

  return (
    <>
      <h2>{tituloSeccion}</h2>
      <Grid container spacing={2}>
        {product.map(({ id, titulo, precio, imagen, altImagen, stock }) => {
          return (
            <Grid item lg={3} sm={6} key={id}>
              <CardItem
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
