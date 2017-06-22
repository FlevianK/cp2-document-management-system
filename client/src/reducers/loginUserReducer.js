import * as types from '../constants/appConstants';  
import initialState from './initialState'; 
import { browserHistory } from 'react-router';

export default function loginUserReducer(state = initialState.loginUser, action) {  
  switch(action.type) {
    case types.USER_LOGIN_SUCCESS:
      browserHistory.push('/dashboard')
      return !!localStorage.jwt
      
    default: 
      return state;
  }
}
