import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { 
  Login,
  Dashboard, 
  App, 
  Document, 
  DocumentCreate, 
  DocumentDelete, 
  DocumentUpdate,
  SearchDocument, 
  User,
  UserCreate,
  UserDelete,
  UserUpdate, 
  Role,
  RoleCreate,
  RoleDelete,
  Documents,
  DocumentRole,
  SearchUser

} from './components'

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
      <Route path="/users/update/:userId" component={UserUpdate} />
      <Route path="/users/search" component={SearchUser} />
      <Route path="/roles" component={Role} />
      <Route path="/roles/create" component={RoleCreate} />
      <Route path="/roles/delete/:roleTitle" component={RoleDelete} />
  </Route>
)
