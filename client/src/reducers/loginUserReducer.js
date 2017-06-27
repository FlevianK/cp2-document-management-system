import * as types from '../constants/appConstants';  
import initialState from './initialState'; 

export default function loginUserReducer(state = initialState.loginUser, action) {  
  switch(action.type) {
    case types.USER_LOGIN_SUCCESS:
      return !!localStorage.jwt
      
    default: 
      return state;
  }
}
