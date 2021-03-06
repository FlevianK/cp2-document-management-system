import { SEARCH_USER_PAGE_SUCCESS } from '../../constants/appConstants';
import initialState from '..//initialState';

const userSearchPageReducer = (state = initialState.usersSearchPage, action) => {
  switch (action.type) {
  case SEARCH_USER_PAGE_SUCCESS:
    return action.usersSearchPage;

  default:
    return state;
  }
};

export default userSearchPageReducer;
