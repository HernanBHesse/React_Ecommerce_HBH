import "./Item.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ItemCount from "../ItemCount/ItemCount";

const CardItem = ({ titulo, precio, imagen, altImagen, stock }) => {
  
  const onAdd = (count) => {
    console.log(`Agregaste a carrito ${count} productos con un total de $ ${count * precio}`);
  };

  return (
    <Card className="card-padre">
      <CardContent>
        <div className="card-item">
          <img src={`./${imagen}`} alt={altImagen} />
          <p>{titulo}</p>
          <span>{precio}</span>
          <ItemCount stock={stock} inicial={1} onAdd={onAdd}/>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
