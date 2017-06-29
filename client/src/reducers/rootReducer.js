import {combineReducers} from 'redux';  
import loginUser from './loginUserReducer';
import documents from './documentReducer';
import documentsPage from './documentPageReducer';  
import roles from './roleReducer';
import users from './userReducer';
import * as types from '../constants/appConstants';  
import initialState from './initialState';

const rootReducer = combineReducers({  
  loginUser,
  documents,
  documentsPage, 
  initialState,
  roles,
  users,
  usersPage,
})

export default rootReducer;
