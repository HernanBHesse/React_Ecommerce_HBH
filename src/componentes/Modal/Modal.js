//Material
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = ({handleClose, open, children, titulo}) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{titulo}</DialogTitle>
        {children}
      </Dialog>
    </>
  );
}

export default Modal;
