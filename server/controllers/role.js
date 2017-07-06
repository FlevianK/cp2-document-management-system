const Role = require('../models').Role;

module.exports = {
  create(req, res) {
    return Role
      .create({
        title: req.body.title,
      })
      .then(() => res.status(201).send({
             message: 'Created successful',
          }))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    if (req.query.limit || req.query.offset) {
      return Role
        .findAll({
          offset: req.query.offset,
          limit: req.query.limit,
        })
        .then(role => {
          if (!role || role.length < 1) {
            return res.status(404).send({
              message: 'Role Not Found',
            });
          }
          return res.status(200).send(role);
        })
        .catch(error => res.status(400).send(error));
    }
    return Role
      .findAll()
      .then(role => res.status(200).send(role))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    if (req.params.roleId == 'admin') {
      return res.status(401).send({
        message: 'Can not delete admin role',
      });
    }
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