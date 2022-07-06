//React
import { useEffect, useState } from "react";
//Componentes
import BannerHome from "../componentes/Banner/BannerHome";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
//DOM
import { Link } from "react-router-dom";
//MUI
import Button from "@mui/material/Button";
//Componentes
import filtrarPorCategoria from "../funciones/getCategoria";

const Home = () => {
  const [productCategoria, setProducts] = useState([]);

  useEffect(() => {
    setProducts([]);
    filtrarPorCategoria("oferta", "enOferta").then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <>
      <Button component={Link} to="/listadoproductos">
        <BannerHome />
      </Button>
      <ItemListContainer tituloSeccion={"Ofertas del"} products={productCategoria} />
    </>
  );
};

export default Home;
