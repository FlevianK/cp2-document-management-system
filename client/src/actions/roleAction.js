import { allRoles, roleCreate, roleDelete, allRolesPage, roleSearchPage, roleSearch, singlerole, roleUpdate } from '../api/roleApi';
import { LOAD_ROLES_SUCCESS, LOAD_ROLES_PAGE_SUCCESS, CREATE_ROLE_SUCCESS, DELETE_ROLE_SUCCESS, SEARCH_ROLE_SUCCESS, SEARCH_ROLE_PAGE_SUCCESS, LOAD_ROLE_SUCCESS, UPDATE_ROLE_SUCCESS } from '../constants/appConstants';
import toastr from 'toastr';

export const loadRoles = () => {
  /**
    * loadRoles method
    * @return all roles
    */
  return (dispatch) => {
    return allRoles()
      .then((res) => {
        dispatch(loadRolesSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadRolesSuccess = (roles) => {
  return { type: LOAD_ROLES_SUCCESS, roles };
};

export const loadRolesPage = (limit, offset) => {
  /**
    * loadRolesPage method
    * @params data - limit and offset
    * @return all roles depending on the specified range
    */
  return (dispatch) => {
    return allRolesPage(limit, offset)
      .then((res) => {
        dispatch(loadRolesPageSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadRolesPageSuccess = (rolesPage) => {
  return { type: LOAD_ROLES_PAGE_SUCCESS, rolesPage };
};

export const createRole = (newRole) => {
  /**
    * createRole method
    * @params data - role details
    */
  return (dispatch) => {
    return roleCreate(newRole)
      .then((res) => {
        dispatch(createroleSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const createroleSuccess = (roles) => {
  return { type: CREATE_ROLE_SUCCESS, roles };
};

export const deleteRole = (deletedRole) => {
  /**
    * deleteRole method
    * @params data - role id
    */
  return (dispatch) => {
    return roleDelete(deletedRole)
      .then((res) => {
        dispatch(deleteroleSuccess(res.body));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const deleteroleSuccess = (roles) => {
  return { type: DELETE_ROLE_SUCCESS, roles };
};

export const searchRoles = (searchValue) => {
  /**
    * searchRoles method
    * @params data - search value
    * @return all roles depending on the search value
    */
  return (dispatch) => {
    return roleSearch(searchValue)
      .then((res) => {
        dispatch(searchroleSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const searchroleSuccess = (rolesSearch) => {
  return { type: SEARCH_ROLE_SUCCESS, rolesSearch };
};

export const searchRolesPage = (searchValue, limit, offset) => {
  /**
    * searchRolesPage method
    * @params data - search value, limit and offset
    * @return all roles depending on the search value and specified range
    */
  return (dispatch) => {
    return roleSearchPage(searchValue, limit, offset)
      .then((res) => {
        dispatch(searchrolepagesuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  };
};

export const searchrolepagesuccess = (rolesSearchPage) => {
  return { type: SEARCH_ROLE_PAGE_SUCCESS, rolesSearchPage };
};

export const loadRole = (role) => {
  /**
    * loadRole method
    * @params data - role id
    * @return single document
    */
  return (dispatch) => {
    return singlerole(role)
      .then((res) => {
        dispatch(loadRoleSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const loadRoleSuccess = (roles) => {
  return { type: LOAD_ROLE_SUCCESS, roles };
};

export const updateRole = (updatedRole) => {
  /**
    * updateRole method
    * @params data - role details
    */
  return (dispatch) => {
    return roleUpdate(updatedRole)
      .then((res) => {
        dispatch(updateRoleSuccess(res.data));
      })
      .catch((error) => {
        toastr.error(error.response.data.message);
      });
  };
};

export const updateRoleSuccess = (roles) => {
  return { type: UPDATE_ROLE_SUCCESS, roles };
};
