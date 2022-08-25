import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ButtonSort() {
  return (
    <Box
      sx={{
        dispay: 'flex',
        alignItems: 'center',
        width: '50%',
      }}>
      <Box sx={{ border: '1px solid red' }}>
        <Button sx={{ width: '25%', marginTop: '5%', marginLeft: '5%' }} variant="outlined">
          Все
        </Button>
        <Button sx={{ width: '25%', marginTop: '5%', marginLeft: '5%' }} variant="outlined">
          Nike
        </Button>
        <Button sx={{ width: '25%', marginTop: '5%', marginLeft: '5%' }} variant="outlined">
          Adidas
        </Button>
      </Box>
    </Box>
  );
}

export default ButtonSort;
