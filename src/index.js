import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux"
import store from './store';
import thunk from 'redux-thunk';

const reduxStore = createStore(store, undefined, applyMiddleware(thunk))

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Paper sx={{ bgcolor: 'background.default' }} elevation={0}>
      <App />
    </Paper>
  </ThemeProvider>,
  document.querySelector('#root')
  <Provider store={reduxStore}>
    <App/>
  </Provider>,
  document.querySelector('#root'),
);
