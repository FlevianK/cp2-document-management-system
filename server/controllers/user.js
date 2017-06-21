const User = require('../models').User;
const InputValidate = require('./inputValidate');
const bcrypt = require('bcrypt');

const salt = 8;

module.exports = {
  create(req, res) {
    if (InputValidate.validateInput(req.body)) {
      return res.status(403).json({ // forbidden request
        message: 'Input required',
      });
    }
    return User
      .create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
        title: req.body.title,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  listUsers(req, res) {
    if (req.query.limit || req.query.offset) {
      return User
        .findAll({
          offset: req.query.offset,
          limit: req.query.limit,
        })
        .then(user => {
          if (!user || user.length < 1) {
            return res.status(404).send({
              message: 'User Not Found',
            });
          }
          return res.status(200).send(user);
        })
        .catch(error => res.status(400).send(error));
    }
    return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user || user.length < 1) {
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
        if (!user || user.length < 1) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update(req.body)
          .then(() => res.status(200).send(user))  // Send back the updated user.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user || user.length < 1) {
          return res.status(404).send({
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
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error));
    }
  }
};