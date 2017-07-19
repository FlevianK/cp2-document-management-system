import { SEARCH_DOCUMENT_PAGE_SUCCESS } from '../../constants/appConstants';
import initialState from '../initialState';

const documentSearchPageReducer = (state = initialState.documentsSearchPage, action) => {
  switch (action.type) {
  case SEARCH_DOCUMENT_PAGE_SUCCESS:
    return action.documentsSearchPage;

  default:
    return state;
  }
};

export default documentSearchPageReducer;
