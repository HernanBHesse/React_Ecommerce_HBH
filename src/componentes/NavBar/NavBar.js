import * as React from "react";
import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App-header">
      <AppBar className="menu">
        <Toolbar>
          <div className="contenedor-logo">
            <Button component={Link} to="/">
              <img src="/logo.svg" alt="Logo Space Cat" />
            </Button>
          </div>
          <div>
            <ul>
              <li>
                <Button
                  color="inherit"
                  component={Link}
                  to="/"
                  children="Inicio"
                />
              </li>
              <li>
                <Button
                  color="inherit"
                  component={Link}
                  to="/listadoproductos"
                  children="
                  Productos"
                />
              </li>
              <li>
                <div>
                  <Button
                    color="inherit"
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Categorías
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      to="/category/rio"
                      children="Rio"
                    />
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      to="/category/mar"
                      children="Mar"
                    />
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      to="/category/lago"
                      children="Lago"
                    />
                  </Menu>
                </div>
              </li>
              <li>
                <Button color="inherit">Consultas</Button>
              </li>
            </ul>
          </div>
          <div className="contenedor-logo">
            <Button>
              <CardWidget />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
