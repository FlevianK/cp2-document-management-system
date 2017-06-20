import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { loginUser, loadDocuments } from './actions';
import initialState from './reducers/initialState';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
const store = configureStore();
// store.dispatch(loginUser());
// store.dispatch(loadDocuments());

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
