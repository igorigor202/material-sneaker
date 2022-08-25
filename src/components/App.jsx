import { useEffect, useMemo, useState } from 'react';
import Basket from './Basket';
import Header from './Header';
import GoodsList from './GoodsList';
import Search from './Search';
import { goods } from '../data/goods';
import { Container } from '@mui/system';
import Snack from './Snack';
import Footer from './Footer';
import MySelect from './MySelect';
import axios from 'axios';
import { Pagination, Stack, Link, Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import ButtonSort from './UI/ButtonSort';

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);

  const limit = 6;
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3001/goods?_page=${page}&_limit=${limit}`).then((res) => {
      setProducts(res.data);
      setPageQty(Math.ceil(res.headers['x-total-count'] / limit));

      if (res.headers['x-total-count'] < page) {
        console.log('отработала');
        setPage(1);
      }
    });
  }, [search, page]);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) => good.title.toLowerCase().includes(e.target.value.toLowerCase())),
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity,
          };
        }),
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          title: goodsItem.title,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    setSnackOpen(true);
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  const [selectedSort, setSelectedSort] = useState('');

  const sortedProducts = useMemo(() => {
    if (selectedSort) {
      return [...products].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return products;
  }, [selectedSort, products]);

  const sortedAndSearchedProducts = useMemo(() => {
    return sortedProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [search, sortedProducts]);

  const sortProducts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <>
      <BrowserRouter>
        <Header handleCart={() => setCartOpen(true)} orderLen={order.length} />
        <Container sx={{ mt: '1rem' }}>
          <Search placeholder="Поиск..." value={search} onChange={handleChange} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ButtonSort />
            <MySelect
              defaultValue="Сортировка"
              value={selectedSort}
              onChange={sortProducts}
              options={[{ value: 'title', name: 'По названию' }]}
            />
          </Box>

          <GoodsList goods={sortedAndSearchedProducts} setOrder={addToOrder} />

          <Stack spacing={2}>
            {!!pageQty && (
              <Pagination
                sx={{
                  mt: '5%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                count={pageQty}
                color="primary"
                page={page}
                onChange={(_, num) => setPage(num)}
                showFirstButton
                showLastButton
              />
            )}
          </Stack>
        </Container>

        <Basket
          order={order}
          removeFromOrder={removeFromOrder}
          cartOpen={isCartOpen}
          closeCart={() => setCartOpen(false)}
        />
        <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
