//React
import { useState, useContext } from "react";
//DOM
import { Link } from "react-router-dom";
//Componentes
import CartContext from "../context/CartContext";
//Material
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CartWidget = ({ size }) => {
  const {
    cartListItems,
    setCartListItems,
    removeCartItem,
    setItemsCartCount,
    itemsCartCount,
    setPrecioTotal,
    precioTotal,
  } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {itemsCartCount ? (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Badge badgeContent={itemsCartCount} color="secondary">
              <img src="/logo-carrito.svg" alt="Logo Carrito" style={size} />
            </Badge>
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
                              Cantidad {item.count} Total $
                              {item.precio * item.count}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" component="div">
                            <IconButton
                              aria-label="delete"
                              onClick={() => {
                                setPrecioTotal(
                                  precioTotal - item.precio * item.count
                                );
                                setItemsCartCount(itemsCartCount - item.count);
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
            {itemsCartCount !== 0 && (
              <MenuItem
                sx={{ justifyContent: "center" }}
                onClick={() => {
                  setCartListItems([]);
                  setItemsCartCount(0);
                  setPrecioTotal(0);
                }}
                key={"clean"}
              >
                Vaciar
              </MenuItem>
            )}
            <MenuItem
              sx={{ justifyContent: "center" }}
              component={Link}
              to="/cart"
              onClick={handleClose}
            >
              Ver Carrito
            </MenuItem>
          </Menu>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartWidget;
