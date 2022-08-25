import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
  const { title, price, poster, setOrder } = props;

  return (
    // Для маленьких экранов (xs) размер 12 колонок
    <Grid item xs="13" md="4">
      <Card sx={{ height: '100%', position: 'relative', marginBottom: '15%' }}>
        <CardMedia component="img" image={poster} alt={title} title={title} sx={{ height: 220 }} />
        <CardContent>
          <Typography variant="h6" component="h5">
            {title}
          </Typography>
          <Typography variant="body1">Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions sx={{ position: 'absolute', bottom: 0 }}>
          <Button
            sx={{}}
            onClick={() =>
              setOrder({
                id: props.id,
                title: props.title,
                price: props.price,
              })
            }>
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
