import { allUsers, createdUser, userDelete, userUpdate, allUsersPage, userSearch, allUser, userSearchPage } from '../api/userApi';
import * as types from '../constants/appConstants';
import toastr from 'toastr';

export const loadUsers = () => {
  /**
    * loadUsers method
    * @return all users
    */
  return (dispatch) => {
    return allUsers()
      .then((res) => {
        dispatch(loadusersSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadusersSuccess = (users) => {
  return { type: 'LOAD_USERS_SUCCESS', users };
};

export const createUser = (newUser) => {
  /**
    * createUser method
    * @params data - user details
    */
  return (dispatch) => {
    return createdUser(newUser)
      .then((res) => {
        dispatch(createuserSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const createuserSuccess = (users) => {
  return { type: 'CREATE_USER_SUCCESS', users };
};

export const deleteUser = (deletedUser)  => {
  /**
    * deleteUser method
    * @params data - user id
    */
  return (dispatch) => {
    return userDelete(deletedUser)
      .then((res) => {
        dispatch(deleteuserSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const deleteuserSuccess = (users) => {
  return { type: 'DELETE_USER_SUCCESS', users };
};

export const updateUser = (updatedUser) => {
  /**
    * updateUser method
    * @params data - user details
    */
  return (dispatch) => {
    return userUpdate(updatedUser)
      .then((res) => {
        dispatch(updateuserSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const updateuserSuccess = (users) => {
  return { type: 'UPDATE_USER_SUCCESS', users };
};

export const searchUser = (searchValue) => {
  /**
    * searchUser method
    * @params data - search value
    * @return all users depending on the search value
    */
  return (dispatch) => {
    return userSearch(searchValue)
      .then((res) => {
        dispatch(searchuserSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const searchuserSuccess = (usersSearch) => {
  return { type: 'SEARCH_USER_SUCCESS', usersSearch };
};

export const searchUsersPage = (searchValue, limit, offset) => {
  /**
    * searchUsersPage method
    * @params data - search value, limit and offset
    * @return all users depending on the search value and specified range
    */
  return (dispatch) => {
    return userSearchPage(searchValue, limit, offset)
      .then((res) => {
        dispatch(searchuserpagesuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  };
};

export const searchuserpagesuccess = (usersSearchPage) => {
  return { type: 'SEARCH_USER_PAGE_SUCCESS', usersSearchPage };
};

export const loadUser = (user) => {
  /**
    * loadUser method
    * @params data - user id
    * @return single user
    */
  return (dispatch) => {
    return allUser(user)
      .then((res) => {
        dispatch(loadUserSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadUserSuccess = (users) => {
  return { type: 'LOAD_USER_SUCCESS', users };
};

export const loadUsersPage = (limit, offset) => {
  /**
    * loadUsersPage method
    * @params data - limit and offset
    * @return all users depending on the specified range
    */
  return (dispatch) => {
    return allUsersPage(limit, offset)
      .then((res) => {
        dispatch(loadUsersPageSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadUsersPageSuccess = (usersPage) => {
  return { type: 'LOAD_USERS_PAGE_SUCCESS', usersPage };
}
