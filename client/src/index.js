import 'babel-polyfill';
import React from 'react';
import routes from './routes';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {
  loadDocuments,
  createDocument,
  deleteDocument,
  updateDocument,
  searchDocumentsPage,
  loadDocument,
  loadDoc,
  searchDocuments,
  loadRoleDocuments,
  loadDocumentsPage,
  loadRoleDocumentsPage,
  loadDocList,
  
  loadUsers,
  createUser,
  deleteUser,
  updateUser,
  logoutUser,
  searchUsersPage,
  loadUsersPage,
  loginUser,
  searchUser,
  loadUser,

  loadRolesPage,
  loadRoles,
  createRole,
  deleteRole,
  searchRoles,
  searchRolesPage,
  updateRole,
  loadRole
} from './actions';

const store = configureStore();

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
