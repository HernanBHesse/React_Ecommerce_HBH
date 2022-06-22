//React
import { useContext, useState } from "react";
//Firebase
import { addDoc, collection } from "firebase/firestore";
import db from "../utils/FirebaseConfig";
//DOM
import { Link } from "react-router-dom";
//Componentes
import CartContext from "../componentes/context/CartContext";
import Modal from "../componentes/Modal/Modal";
//Material
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "10vw",
  maxHeight: "100%",
});

const Cart = () => {
  const {
    cartListItems,
    setCartListItems,
    setItemsCartCount,
    removeCartItem,
    setPrecioTotal,
    precioTotal,
    itemsCartCount,
  } = useContext(CartContext);

  const [success, setSuccess] = useState();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValue, setFormValue] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [order, setOrder] = useState({
    comprador: {},
    items: cartListItems.map((item) => {
      return {
        id: item.id,
        titulo: item.titulo,
        precio: item.precio,
        cantidad: item.count,
      };
    }),
    total: precioTotal,
  });


  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, comprador: formValue });
    saveData({ ...order, comprador: formValue });
  };

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    setSuccess(orderDoc.id);
  };

  return (
    <>
      {itemsCartCount ? (
        <Paper
          sx={{
            width: "80vw",
            mx: "auto",
            my: 1,
          }}
        >
          <Table sx={{}} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align="center">
                  Producto
                </TableCell>
                <TableCell colSpan={1} align="center">
                  Cantidad
                </TableCell>
                <TableCell colSpan={1} align="center">
                  Precio
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {cartListItems.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Img src={`/${item.imagen}`} alt={item.altImagen} />
                    </TableCell>
                    <TableCell align="center">{item.titulo}</TableCell>
                    <TableCell align="center">{item.count}</TableCell>
                    <TableCell align="center">
                      {item.precio * item.count}
                    </TableCell>
                    <TableCell align="center">
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
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={3} align="right">
                  Total
                </TableCell>
                <TableCell align="center">{precioTotal}</TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
          <Button
            variant="contained"
            color="error"
            sx={{ mr: "20vw", ml: 1, my: 1 }}
            onClick={() => {
              setCartListItems([]);
              setItemsCartCount(0);
              setPrecioTotal(0);
            }}
          >
            Vaciar
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ mr: 1, ml: "20vw", my: 1 }}
            onClick={() => {
              handleClickOpen();
            }}
          >
            Terminar mi compra
          </Button>
        </Paper>
      ) : (
        <Paper
          sx={{
            width: "80vw",
            Height: "40vh",
            mx: "auto",
            my: "auto",
          }}
        >
          <h1>Tu carrito está vacío</h1>
          <h2>¿No sabés qué comprar ¡Miles de productos te esperan!</h2>
          <Button sx={{ flexGrow: 0 }} color="inherit" component={Link} to="/">
            Volver al inicio
          </Button>
        </Paper>
      )}
      {success ? (
        <Modal
          titulo={"Compra finalizada"}
          open={open}
          handleClose={() => setOpen(false)}
        >
          <DialogContent>
            <DialogContentText>
            Compraste un total de {itemsCartCount} productos por un valor de ${precioTotal}
            </DialogContentText>
            <DialogContentText>
              Numero de comprobante {success}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="success"
              onClick={() => {
                setCartListItems([]);
                setItemsCartCount(0);
                setPrecioTotal(0);
              }}
            >
              Volver al inicio
            </Button>
          </DialogActions>
        </Modal>
      ) : (
        <Modal
          titulo={"Finalizar compra"}
          open={open}
          handleClose={() => setOpen(false)}
        >
          <DialogContent>
            <DialogContentText>
              Por favor complete los siguientes campos para finalizar la compra
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                margin="dense"
                id="nombre"
                name="nombre"
                label="Nombre y Apellido"
                fullWidth
                value={formValue.nombre}
                onChange={handleChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="telefono"
                name="telefono"
                label="Telefono"
                fullWidth
                value={formValue.telefono}
                onChange={handleChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                name="email"
                label="Email"
                fullWidth
                value={formValue.email}
                onChange={handleChange}
              />
              <DialogActions>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                >
                  Finalizar
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Modal>
      )}
    </>
  );
};

export default Cart;
