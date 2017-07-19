import { LOAD_ROLES_SUCCESS, CREATE_ROLE_SUCCESS, DELETE_ROLE_SUCCESS, UPDATE_ROLE_SUCCESS, LOAD_ROLE_SUCCESS} from '../../constants/appConstants';
import initialState from '../initialState';

const roleReducer = (state = initialState.roles, action) => {
  switch (action.type) {
  case LOAD_ROLES_SUCCESS:
    return action.roles;

  case CREATE_ROLE_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.roles)
    ];

  case DELETE_ROLE_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.roles)
    ];

  case UPDATE_ROLE_SUCCESS:
    return [
      ...state,
      Object.assign({}, action.roles)
    ];

  case LOAD_ROLE_SUCCESS:
    return action.roles;

  default:
    return state;
  }
};

export default roleReducer;
