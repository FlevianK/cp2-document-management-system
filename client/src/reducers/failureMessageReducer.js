import { FAILURE_MESSAGE } from '../constants/appConstants';
import initialState from './initialState';

export default function failureMessage(state = initialState.failureMessage, action) {
  switch (action.type) {
  case FAILURE_MESSAGE:
    return action.failureMessage;

  default:
    return state;
  }
}
