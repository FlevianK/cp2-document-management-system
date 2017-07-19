import { combineReducers } from 'redux';
import loginUser from './user/loginUserReducer';
import documents from './document/documentReducer';
import documentsPage from './document/documentPageReducer';
import allDocuments from './document/documentsReducer';
import allDocumentsPage from './document/documentsPageReducer';
import roleDocuments from './document/roleDocumentsReducer';
import roleDocumentsPage from './document/roleDocumentsPageReducer';
import documentsSearchPage from './document/documentSearchPageReducer';
import documentsSearch from './document/documentSearchReducer';
import users from './user/userReducer';
import usersPage from './user/userPageReducer';
import usersSearch from './user/userSearchReducer';
import usersSearchPage from './user/userSearchPageReducer';
import roles from './role/roleReducer';
import rolesPage from './role/rolePageReducer';
import rolesSearch from './role/roleSearchReducer';
import rolesSearchPage from './role/roleSearchPageReducer';
import * as types from '../constants/appConstants';
import initialState from './initialState';

const rootReducer = combineReducers({
  loginUser,
  usersSearchPage,
  usersSearch,
  users,
  usersPage,

  documents,
  allDocuments,
  allDocumentsPage,
  roleDocuments,
  roleDocumentsPage,
  documentsSearchPage,
  documentsSearch,

  initialState,

  roles,
  rolesPage,
  documentsPage,
  rolesSearch,
  rolesSearchPage
});

export default rootReducer;
