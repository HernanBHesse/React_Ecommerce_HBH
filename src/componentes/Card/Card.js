import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

const CardItem = (props) => {
    const {titulo, precio, imagen, altImagen} = props
    return (
        <Card className="card-padre">
            <CardContent>
                <div className="card-item">
                    <img src={`./${imagen}`} alt={altImagen}/>
                    <p>{titulo}</p>
                    <span>{precio}</span>
                    <Button variant={'contained'}>Detalles</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;