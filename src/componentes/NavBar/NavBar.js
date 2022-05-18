import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = () => {
    return (
        <AppBar className="menu">
             <Toolbar>
                 <div className="contenedor-logo">
                    <Button>
                       <img src="./logo.svg" alt="Logo Space Cat"/>
                    </Button>
                 </div>
                 <div>
                    <ul>
                        <li>
                            <Button color="inherit">Inicio</Button>
                       </li>
                       <li>
                            <Button color="inherit">Productos</Button>
                       </li>
                       <li>
                            <Button color="inherit">Contacto</Button>
                        </li>
                        <li>
                           <Button color="inherit">Consultas</Button>
                       </li>
                    </ul>  
                 </div>
                 <div className="contenedor-logo">
                    <Button><img src="./logo-carrito.svg" alt="Logo Carrito"/></Button>
                 </div>
             </Toolbar>
          </AppBar>
  );
}

export default NavBar;