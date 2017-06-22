import { allRoles, roleCreate, roleDelete } from '../api/roleApi';
import * as types from '../constants/appConstants';

export function loadRoles() {
  return function (dispatch) {
    return allRoles()
      .then(roles => {
        dispatch(loadRolesSuccess(roles));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadRolesSuccess(roles) {
  return { type: 'LOAD_ROLES_SUCCESS', roles };
}

export function createRole(newRole) {
  return function (dispatch) {
    return roleCreate(newRole)
      .then(response => {
        dispatch(createroleSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function createroleSuccess() {
  return { type: 'CREATE_ROLE_SUCCESS' }
}

export function deleteRole(deletedRole) {
  return function (dispatch) {
    return roleDelete(deletedRole)
      .then(response => {
        dispatch(deleteroleSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function deleteroleSuccess() {
  return { type: 'DELETE_ROLE_SUCCESS' }
}
