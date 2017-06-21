const Role = require('../models').Role;

module.exports = {
  create(req, res) {
    return Role
      .create({
        title : req.body.title,
      })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Role
      .findAll()
      .then(role => {console.log(res.status(200).send(role))})
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Role
      .findById(req.params.roleId)
      .then(role => {
        if (!role) {
          return res.status(404).send({
            message: 'Role Not Found',
          });
        }
        return role
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};