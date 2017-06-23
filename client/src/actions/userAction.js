import { allUsers, createdUser, userDelete, userUpdate, userSearch, allUser } from '../api/userApi';
import * as types from '../constants/appConstants';

export function loadUsers() {
  return function (dispatch) {
    return allUsers()
      .then(users => {
        dispatch(loadusersSuccess(users));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadusersSuccess(users) {
  return { type: 'LOAD_USERS_SUCCESS', users };
}

export function createUser(newUser) {
  return function (dispatch) {
    return createdUser(newUser)
      .then(response => {
        dispatch(createuserSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function createuserSuccess() {
  return { type: 'CREATE_USER_SUCCESS' }
}

export function deleteUser(deletedUser) {
  return function (dispatch) {
    return userDelete(deletedUser)
      .then(response => {
        dispatch(deleteuserSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function deleteuserSuccess() {
  return { type: 'DELETE_USER_SUCCESS' }
}

export function updateUser(updatedUser) {
  return function (dispatch) {
    return userUpdate(updatedUser)
      .then(response => {
        dispatch(updateuserSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function updateuserSuccess() {
  return { type: 'UPDATE_USER_SUCCESS' }
}

export function searchUsers(searchValue) {
  return function (dispatch) {
    return userSearch(searchValue)
      .then(users => {
        dispatch(searchuserSuccess(users));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function searchuserSuccess(users) {
  return { type: 'SEARCH_USER_SUCCESS', users }
}

export function loadUser(user) {
  return function (dispatch) {
    return allUser(user)
      .then(users => {
        dispatch(loadUserSuccess(users));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadUserSuccess(users) {
  return { type: 'LOAD_USER_SUCCESS', users };
}
