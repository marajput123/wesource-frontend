import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    type:"light",
    background:{
      // default:"#1E1E1E",
      // paper:"#2F2F2F"
    },
    primary: {
      main: '#e53935',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text:{
      // primary:"#F7F6F2",
      // secondary:"#F7F6F2"
    }
  },
});

export default theme;
