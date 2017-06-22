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
  User,
  UserCreate,
  UserDelete,
  UserUpdate, 
  Role,
  RoleCreate,
  RoleDelete, 
} from './components'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} onEnter={requireAuth()} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/documents" component={Document} />
      <Route path="/documents/create" component={DocumentCreate} />
      <Route path="/documents/delete" component={DocumentDelete} />
      <Route path="/documents/update" component={DocumentUpdate} />
      <Route path="/users" component={User} />
      <Route path="/users/create" component={UserCreate} />
      <Route path="/users/delete" component={UserDelete} />
      <Route path="/users/update" component={UserUpdate} />
      <Route path="/roles" component={Role} />
      <Route path="/roles/create" component={RoleCreate} />
      <Route path="/roles/delete" component={RoleDelete} />
  </Route>
)

function requireAuth(nextState, replace) {
  if (!localStorage.jwt) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
