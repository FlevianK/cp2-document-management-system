const User = require('../models').User;
const Document = require('../models').Document;

module.exports = {
  create(req, res) {
    User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      roleId: req.body.roleId,
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },

  paginateUsers(req, res) {
    if (req.query.limit || req.query.offset) {
      return User
        .findAll({
          offset: req.query.offset,
          limit: req.query.limit,
        })
        .then(user => {
          if (!user) {
            return res.status(404).send({
              message: 'User Not Found',
            });
          }
          return res.status(200).send(user);
        })
        .catch(error => res.status(400).send(error));
    }
  },
  retrieve(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            username: req.body.username || user.username,
            firstName: req.body.firstName || user.firstName,
            lastName: req.body.lastName || user.lastName,
            email: req.body.email || user.email,
            password: req.body.password || user.password,
            roleId: req.body.roleId || user.roleId,
          })
          .then(() => res.status(200).send(user))  // Send back the updated user.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  searchUser(req, res) {
    if (req.query.q) {
      return User
        .findAll({
          where: {
            $or: [
              { username: { $like: `%${req.query.q}%` } },
              { firstName: { $like: `%${req.query.q}%` } },
              { lastName: { $like: `%${req.query.q}%` } },
              { email: { $like: `%${req.query.q}%` } }
            ]
          }
        })
        .then(response => res.status(200).send(response))
        .catch(error => res.status(400).send(error));
    }
  },
};