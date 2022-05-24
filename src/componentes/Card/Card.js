import "./Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ItemCount from "../ItemCount/ItemCount";

const CardItem = ({ titulo, precio, imagen, altImagen, stock }) => {
  return (
    <Card className="card-padre">
      <CardContent>
        <div className="card-item">
          <img src={`./${imagen}`} alt={altImagen} />
          <p>{titulo}</p>
          <span>{precio}</span>
          <ItemCount stock={stock} inicial={1} precio={precio}/>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
