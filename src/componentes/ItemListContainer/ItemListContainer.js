import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ tituloSeccion }) => {
  let dia = new Date();
  let ofertasDelDia = `${dia.toLocaleDateString()}`;

  return (
    <ItemList tituloSeccion={`${tituloSeccion} ${ofertasDelDia}`}/>
  );
};

export default ItemListContainer;
