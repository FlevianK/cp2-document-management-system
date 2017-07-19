import { combineReducers } from 'redux';
import loginUser from './loginUserReducer';
import documents from './documentReducer';
import documentsPage from './documentPageReducer';
import allDocuments from './documentsReducer';
import allDocumentsPage from './documentsPageReducer';
import roleDocuments from './roleDocumentsReducer';
import roleDocumentsPage from './roleDocumentsPageReducer';
import documentsSearchPage from './documentSearchPageReducer';
import documentsSearch from './documentSearchReducer';
import users from './userReducer';
import usersPage from './userPageReducer';
import usersSearch from './userSearchReducer';
import usersSearchPage from './userSearchPageReducer';
import roles from './roleReducer';
import rolesPage from './rolePageReducer';
import rolesSearch from './roleSearchReducer';
import rolesSearchPage from './roleSearchPageReducer';
import * as types from '../constants/appConstants';
import initialState from './initialState';
import failureMessage from './failureMessageReducer';

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
  failureMessage,

  roles,
  rolesPage,
  documentsPage,
  rolesSearch,
  rolesSearchPage
});

export default rootReducer;
