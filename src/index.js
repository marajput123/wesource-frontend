import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { Paper } from '@mui/material';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Paper sx={{ bgcolor: 'background.default' }} elevation={0}>
      <App />
    </Paper>
  </ThemeProvider>,
  document.querySelector('#root')
);
