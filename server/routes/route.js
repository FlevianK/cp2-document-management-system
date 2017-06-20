const rolesController = require('../controllers').roles;
const usersController = require('../controllers').users;
const documentsController = require('../controllers').documents;
const authenticatesController = require('../controllers').authenticates;

const restbac = require('rest-bac');
const roleConfig = require('../config/roles.json');

module.exports = (app) => {
  app.post('/api/users/login', authenticatesController.login);
  app.post('/api/users/', usersController.create);

  app.post('/api/documents/', authenticatesController.verifyLogin, documentsController.create);
  app.get('/api/documents/', authenticatesController.verifyLogin, documentsController.listDocs);
  app.get('/api/documents/:documentId', authenticatesController.verifyLogin, documentsController.retrieve);
  app.put('/api/documents/:documentId', authenticatesController.verifyLogin, documentsController.update);
  app.get('/api/users/:userId/documents', authenticatesController.verifyLogin, documentsController.userDocs);
  app.delete('/api/documents/:documentId', authenticatesController.verifyLogin, documentsController.destroy);
  app.get('/api/search/documents/', authenticatesController.verifyLogin, documentsController.searchDoc);

  app.use(authenticatesController.verifyLogin, authenticatesController.roleAuthorise);
  
  restbac(app, roleConfig, "/api");

  app.post('/api/roles',rolesController.create);
  app.get('/api/roles', rolesController.list);
  
  app.get('/api/users/', usersController.listUsers);
  app.get('/api/users/:userId', usersController.retrieve);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);
  app.get('/api/search/users/', usersController.searchUser);

  app.use(authenticatesController.roleUnauthorise);

};