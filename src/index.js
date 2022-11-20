import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CryptoContext from './contextApi/CryptoContext';
import {  ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'
import 'react-alice-carousel/lib/alice-carousel.css';


const theme = createTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CryptoContext>
           <App />
         </CryptoContext>
        </ThemeProvider>
      </StyledEngineProvider>
);


