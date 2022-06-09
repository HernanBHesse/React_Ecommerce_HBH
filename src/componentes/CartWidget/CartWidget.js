import * as React from "react";
import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CartContext from "../context/CartContext";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CartWidget = ({ size }) => {
  const { cartListItems, setCartListItems, removeCartItem } =
    useContext(CartContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src="/logo-carrito.svg" alt="Logo Carrito" style={size} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {cartListItems.map((item) => {
          return (
            <MenuItem key={item.id}>
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 50, height: 50 }}>
                      <Img src={`/${item.imagen}`} alt={item.altImagen} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {item.titulo}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Cantidad {item.count} Total ${" "}
                          {item.precio * item.count}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            removeCartItem(item.id);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </MenuItem>
          );
        })}
        <MenuItem
          onClick={() => {
            setCartListItems([]);
          }}
          key={"clean"}
        >
          Vaciar
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CartWidget;
