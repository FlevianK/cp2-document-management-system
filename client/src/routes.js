import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  Dashboard,
  App,

  Document,
  DocumentCreate,
  DocumentDelete,
  DocumentUpdate,
  SearchDocument,
  Documents,
  DocumentRole,

  User,
  UserCreate,
  UserDelete,
  UserUpdate,
  SearchUser,
  UsersUpdate,

  Role,
  RoleCreate,
  RoleDelete,
  RoleUpdate,
  SearchRole,
  Login,
} from './components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/documents" component={Document} />
    <Route path="/documents/all" component={Documents} />
    <Route path="/documents/create" component={DocumentCreate} />
    <Route path="/documents/delete/:documentId" component={DocumentDelete} />
    <Route path="/documents/update/:documentId" component={DocumentUpdate} />
    <Route path="/documents/role" component={DocumentRole} />
    <Route path="/documents/search" component={SearchDocument} />
    <Route path="/users" component={User} />
    <Route path="/users/create" component={UserCreate} />
    <Route path="/users/delete/:userId" component={UserDelete} />
    <Route path="/users/profile" component={UserUpdate} />
    <Route path="/users/update/:userId" component={UsersUpdate} />
    <Route path="/users/search" component={SearchUser} />
    <Route path="/roles" component={Role} />
    <Route path="/roles/create" component={RoleCreate} />
    <Route path="/roles/delete/:roleId" component={RoleDelete} />
    <Route path="/roles/update/:roleId" component={RoleUpdate} />
    <Route path="/roles/search" component={SearchRole} />
  </Route>
);
