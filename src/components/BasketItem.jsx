import { Close } from '@mui/icons-material';
import { IconButton, ListItem, Typography } from '@mui/material';

const BasketItem = ({ removeFromOrder, id, title, price, quantity }) => {
  return (
    <ListItem>
      <Typography variant="body1">
        {title} {price}руб x{quantity}
      </Typography>
      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
