// theme.js

import { createTheme } from '@mui/material/styles';
import 'typeface-comic-neue'; // Importe a fonte "Comic Neue" recém-instalada

const theme = createTheme({
  typography: {
    fontFamily: 'Comic Neue, sans-serif', // Use a fonte "Comic Neue" e qualquer fonte de fallback desejada
  },

});


export const themes = {
    colors: {
      verdeMenta: '#98FB98',
      amarelo: '#FFD700',
      laranja: '#FFA500',
      rosa: '#FFC0CB',
      azulClaro: '#87CEEB',
    },
};

export default theme;
  
