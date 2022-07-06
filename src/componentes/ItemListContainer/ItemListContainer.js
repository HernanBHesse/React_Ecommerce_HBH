//Componentes
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ tituloSeccion, products }) => {


  let dia = new Date();
  let ofertasDelDia = `${dia.toLocaleDateString()}`;

  return (
    <>
      <div className="App-main contenedor-Inicio">
        <ItemList
          tituloSeccion={`${tituloSeccion} ${ofertasDelDia}`}
          products={products}
        />
      </div>
    </>
  );
};

export default ItemListContainer;
