import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider} from '@emotion/react';
import { createTheme } from '@mui/material';

import App from './components/App'
import './index.css';

const theme = createTheme ({
  palette: {
    primary: {
      main: '#61dafb'
    },
    secondary: {
      main: '#00ff00'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
