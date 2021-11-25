import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux"
import store from './store';
import thunk from 'redux-thunk';
import "./index.css"
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

const reduxStore = createStore(store, undefined, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={reduxStore}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);
