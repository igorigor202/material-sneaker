import { Alert, Snackbar } from '@mui/material';

function Snack({ isOpen, handleClose = Function.prototype }) {
  return (
    <Snackbar autoHideDuration={3000} open={isOpen} onClose={handleClose}>
      <Alert severity="success">Товар добавлен в корзину!</Alert>
    </Snackbar>
  );
}

export default Snack;
