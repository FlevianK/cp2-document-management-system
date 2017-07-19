import { LOAD_DOCUMENTS_SUCCESS } from '../../constants/appConstants';
import initialState from '../initialState';

const documentsReducer = (state = initialState.allDocuments, action) => {
  switch (action.type) {
  case LOAD_DOCUMENTS_SUCCESS:
    return action.allDocuments;

  default:
    return state;
  }
};

export default documentsReducer;
