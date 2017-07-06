import { allRoles, roleCreate, roleDelete, allRolesPage } from '../api/roleApi';
import * as types from '../constants/appConstants';
import toastr from 'toastr';

export function loadRoles() {
  return function (dispatch) {
    return allRoles()
      .then(res => {
        dispatch(loadRolesSuccess(res.data));
      })
      .catch(error => {
        toastr.error(error.response.data.message);
      });
  };
}

export function loadRolesSuccess(roles) {
  return { type: 'LOAD_ROLES_SUCCESS', roles};
}

export function loadRolesPage(limit, offset) {
  return function (dispatch) {
    return allRolesPage(limit, offset)
      .then(res => {
        dispatch(loadRolesPageSuccess(res.data));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function loadRolesPageSuccess(rolesPage) {
  return { type: 'LOAD_ROLES_PAGE_SUCCESS', rolesPage };
}

export function createRole(newRole) {
  return function (dispatch) {
    return roleCreate(newRole)
      .then(res => {
        dispatch(createroleSuccess(res.data));
      })
      .catch(error => {
        toastr.error(error.response.data.message);
      });
  };
}

export function createroleSuccess(roles) {
  return { type: 'CREATE_ROLE_SUCCESS', roles }
}

export function deleteRole(deletedRole) {
  return function (dispatch) {
    return roleDelete(deletedRole)
      .then(res => {
        dispatch(deleteroleSuccess(res.body));
      })
      .catch(error => {
        toastr.error(error.response.data.message);
      });
  };
}

export function deleteroleSuccess(roles) {
  return { type: 'DELETE_ROLE_SUCCESS', roles }
}
