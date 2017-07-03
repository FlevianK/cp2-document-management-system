import { allUsers, createdUser, userDelete, userUpdate, allUsersPage, userSearch, allUser, userSearchPage } from '../api/userApi';
import * as types from '../constants/appConstants';
import toastr from 'toastr';

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
        toastr.error(error.response.data.message);
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
        toastr.error(error.response.data.message);
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
        toastr.error(error.response.data.message);
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
        toastr.error(error.response.data.message);
      });
  };
}

export function searchuserSuccess(usersSearch) {
  return { type: 'SEARCH_USER_SUCCESS', usersSearch }
}

export function searchUsersPage(searchValue, limit, offset) {
  return function (dispatch) {
    return userSearchPage(searchValue, limit, offset)
      .then(res => {
        dispatch(searchuserpagesuccess(res.data));
      })
      .catch(error => {
        toastr.error(error.response.data.message);
      });
  };
}

export function searchuserpagesuccess(usersSearchPage) {
  return { type: 'SEARCH_USER_PAGE_SUCCESS', usersSearchPage }
}

export function loadUser(user) {
  return function (dispatch) {
    return allUser(user)
      .then(res => {
        dispatch(loadUserSuccess(res.data));
      })
      .catch(error => {
        toastr.error(error.response.data.message);
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
