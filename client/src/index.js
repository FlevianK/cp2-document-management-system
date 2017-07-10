import 'babel-polyfill';
import React from 'react';
import routes from './routes';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { 
  loginUser, 
  loadDocuments, 
  createDocument, 
  deleteDocument, 
  updateDocument, 
  loadUsers, 
  createUser, 
  deleteUser, 
  updateUser,
  loadRoles,
  createRole,
  deleteRole,
  searchUser,
  loadUser,
  loadDocument,
  loadDoc,
  searchDocument,
  loadRoleDocuments,
  loadDocumentsPage,
  loadRoleDocumentsPage, 
  loadUsersPage,
  loadDocList,
  searchUsersPage,
  searchDocumentsPage,
  loadRolesPage,
  logoutUser
} from './actions';

const store = configureStore();

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);