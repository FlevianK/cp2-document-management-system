const rolesController = require('../controllers').roles;
const usersController = require('../controllers').users;
const documentsController = require('../controllers').documents;
const authenticatesController = require('../controllers').authenticates;

module.exports = (app) => {

  // app.post('/roles', rolesController.create);

  app.post('/users/login', authenticatesController.login);

  app.post('/users/', usersController.create);
  app.get('/users/', usersController.paginateUsers);
  app.get('/users/', authenticatesController.verifyLogin, usersController.list);
  app.get('/users/:userId', usersController.retrieve);
  app.put('/users/:userId', usersController.update);
  app.delete('/users/:userId', usersController.destroy);
  app.get('/search/users/', usersController.searchUser);

  app.post('/documents/', documentsController.create);
  app.get('/documents/', documentsController.paginateDocs);
  app.get('/documents/', documentsController.list);
  app.get('/documents/:documentId', documentsController.retrieve);
  app.put('/documents/:documentId', documentsController.update);
  app.get('/users/:userId/documents', documentsController.userDocs);
  app.delete('/documents/:documentId', documentsController.destroy);
  app.get('/search/documents/', documentsController.searchDoc);

};