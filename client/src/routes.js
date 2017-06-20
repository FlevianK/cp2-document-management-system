import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Login, App, Document, DocumentCreate, DocumentDelete, DocumentUpdate } from './components'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} onEnter={requireAuth} />
    <Route path="/documents" component={Document} />
    <Route path="/documents/create" component={DocumentCreate} />
    <Route path="/documents/delete" component={DocumentDelete} />
    <Route path="/documents/update" component={DocumentUpdate} />
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