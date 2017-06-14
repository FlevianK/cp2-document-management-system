const rolesController = require('../controllers').roles;
const usersController = require('../controllers').users;
const documentsController = require('../controllers').documents;
const authenticatesController = require('../controllers').authenticates;

const restbac = require('rest-bac');
const roleConfig = require('../config/roles.json');

module.exports = (app) => {
  app.post('/users/login', authenticatesController.login);
  app.post('/users/', usersController.create);

  app.post('/documents/', authenticatesController.verifyLogin, documentsController.create);
  app.get('/documents/', authenticatesController.verifyLogin, documentsController.listDocs);
  app.get('/documents/:documentId', authenticatesController.verifyLogin, documentsController.retrieve);
  app.put('/documents/:documentId', authenticatesController.verifyLogin, documentsController.update);
  app.get('/users/:userId/documents', authenticatesController.verifyLogin, documentsController.userDocs);
  app.delete('/documents/:documentId', authenticatesController.verifyLogin, documentsController.destroy);
  app.get('/search/documents/', authenticatesController.verifyLogin, documentsController.searchDoc);

  app.use(authenticatesController.verifyLogin, authenticatesController.roleAuthorise);
  
  restbac(app, roleConfig, "");

  app.post('/roles',rolesController.create);
  app.get('/roles', rolesController.list);
  
  app.get('/users/', usersController.listUsers);
  app.get('/users/:userId', usersController.retrieve);
  app.put('/users/:userId', usersController.update);
  app.delete('/users/:userId', usersController.destroy);
  app.get('/search/users/', usersController.searchUser);

  app.use(authenticatesController.roleUnauthorise);

};