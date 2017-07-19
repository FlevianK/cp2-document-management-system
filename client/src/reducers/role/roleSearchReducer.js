import { SEARCH_ROLE_SUCCESS } from '../../constants/appConstants';
import initialState from '../initialState';

const roleSearchReducer = (state = initialState.rolesSearch, action) => {
  switch (action.type) {
  case SEARCH_ROLE_SUCCESS:
    return action.rolesSearch;

  default:
    return state;
  }
};

export default roleSearchReducer;
