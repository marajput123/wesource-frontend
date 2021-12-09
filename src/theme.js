import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e53935',
      light: "#ffa5a3"
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
    success:{
      main:"#81c784"
    }
  },
});

export default theme;
