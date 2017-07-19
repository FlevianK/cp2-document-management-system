import { SEARCH_ROLE_PAGE_SUCCESS } from '../../constants/appConstants';
import initialState from '../initialState';

const roleSearchPageReducer = (state = initialState.rolesSearchPage, action) => {
  switch (action.type) {
  case SEARCH_ROLE_PAGE_SUCCESS:
    return action.rolesSearchPage;

  default:
    return state;
  }
};

export default roleSearchPageReducer;
