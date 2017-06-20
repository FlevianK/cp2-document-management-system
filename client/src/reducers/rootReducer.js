import {combineReducers} from 'redux';  
import loginUser from './loginUserReducer';
import documents from './documentReducer';
import * as types from '../constants/appConstants';  
import initialState from './initialState'; 

const rootReducer = combineReducers({  
  loginUser,
  documents, 
  initialState
})

export default rootReducer;