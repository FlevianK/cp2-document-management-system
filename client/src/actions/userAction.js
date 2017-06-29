import { allUsers, createdUser, userDelete, userUpdate, allUsersPage, userSearch, allUser } from '../api/userApi';
import * as types from '../constants/appConstants';

export function loadUsers() {
  return function (dispatch) {
    return allUsers()
      .then(res => {
        dispatch(loadusersSuccess(res.data));
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
      .then(res => {
        dispatch(deleteuserSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function deleteuserSuccess(users) {
  return { type: 'DELETE_USER_SUCCESS', users }
}

export function updateUser(updatedUser) {
  return function (dispatch) {
    return userUpdate(updatedUser)
      .then(res => {
        dispatch(updateuserSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function updateuserSuccess(users) {
  return { type: 'UPDATE_USER_SUCCESS', users }
}

export function searchUsers(searchValue) {
  return function (dispatch) {
    return userSearch(searchValue)
      .then(res => {
        dispatch(searchuserSuccess(res.data));
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
      .then(res => {
        dispatch(loadUserSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadUserSuccess(users) {
  return { type: 'LOAD_USER_SUCCESS', users };
}

export function loadUsersPage(limit, offset) {
  return function (dispatch) {
    return allUsersPage(limit, offset)
      .then(res => {
        dispatch(loadUsersPageSuccess(res.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadUsersPageSuccess(usersPage) {
  return { type: 'LOAD_USERS_PAGE_SUCCESS', usersPage };
}
