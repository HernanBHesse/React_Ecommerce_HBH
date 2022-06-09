import * as React from "react";
import CartWidget from "../CartWidget/CartWidget";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
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

  const logo = {
    height: "6vh",
    width: "calc(6vh)",
  };

  return (
    <div className="App-header">
      <AppBar sx={{ justifyContent: "center", maxHeight: "7vh" }}>
        <Toolbar sx={{ display: "flex" }}>
          <Button
            sx={{ flexGrow: 0 }}
            color="inherit"
            component={Link}
            to="/"
            className="contenedor-logo"
          >
            <img src="/logo.svg" alt="Logo Space Cat" style={logo} />
          </Button>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Button color="inherit" component={Link} to="/" children="Inicio" />
            <Button
              color="inherit"
              component={Link}
              to="/listadoproductos"
              children="
                  Productos"
            />
            <Button
              color="inherit"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              children="Categorías"
            />
            <Menu
              sx={{ mt: "5vh", px: 3 }}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
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
            <Button color="inherit" children="Consultas" />
          </ButtonGroup>
            <CartWidget size={logo} sx={{ flexGrow: 0 }}/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
