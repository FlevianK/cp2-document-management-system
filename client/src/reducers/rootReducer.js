import {combineReducers} from 'redux';  
import loginUser from './loginUserReducer';
import documents from './documentReducer'; 
import roles from './roleReducer';
import users from './userReducer';
import * as types from '../constants/appConstants';  
import initialState from './initialState';

const rootReducer = combineReducers({  
  loginUser,
  documents, 
  initialState,
  roles,
  users,
})

export default rootReducer;
