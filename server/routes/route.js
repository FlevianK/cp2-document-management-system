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

  app.use(authenticatesController.roleAuthorise);
  
  restbac(app, roleConfig, "");

  app.post('/roles',authenticatesController.verifyLogin, rolesController.create);
  app.get('/roles', authenticatesController.verifyLogin, rolesController.list);
  
  app.get('/users/', usersController.listUsers);
  app.get('/users/:userId', authenticatesController.verifyLogin, usersController.retrieve);
  app.put('/users/:userId', authenticatesController.verifyLogin, usersController.update);
  app.delete('/users/:userId',authenticatesController.verifyLogin, usersController.destroy);
  app.get('/search/users/', authenticatesController.verifyLogin, usersController.searchUser);


  app.use(authenticatesController.roleUnauthorise);

};