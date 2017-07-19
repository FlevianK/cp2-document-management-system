import { LOAD_USERS_PAGE_SUCCESS } from '../../constants/appConstants';
import initialState from '../initialState';

const userPageReducer = (state = initialState.usersPage, action) => {
  switch (action.type) {
  case LOAD_USERS_PAGE_SUCCESS:
    return action.usersPage;

  default:
    return state;
  }
};

export default userPageReducer;
