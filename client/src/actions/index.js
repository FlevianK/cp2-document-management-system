import { loadDocuments, createDocument, loadRoleDocumentsPage, deleteDocument, updateDocument, loadDocumentsPage, loadDocument, loadDoc, searchDocuments, searchDocumentsPage, loadRoleDocuments, loadDocList } from './documentAction';
import { loadUsers, createUser, deleteUser, loadUsersPage, updateUser, searchUser, loadUser, searchUsersPage } from './userAction';
import { loadRoles, createRole, deleteRole, loadRolesPage, loadRole, searchRoles, updateRole, searchRolesPage } from './roleAction';
import { loginUser, logoutUser } from './loginAction';

export {
  loginUser,
  loadUsers,
  createUser,
  deleteUser,
  updateUser,
  searchUser,
  loadUser,
  loadUsersPage,
  logoutUser,
  searchUsersPage,

  loadDocuments,
  createDocument,
  deleteDocument,
  updateDocument,
  loadDocument,
  loadDoc,
  searchDocuments,
  searchDocumentsPage,
  loadRoleDocuments,
  loadDocumentsPage,
  loadRoleDocumentsPage,
  loadDocList,

  loadRoles,
  loadRolesPage,
  createRole,
  deleteRole,
  loadRole,
  updateRole,
  searchRoles,
  searchRolesPage
};
