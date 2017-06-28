const User = require('../models').User;
const Document = require('../models').Document;
const InputValidate = require('./inputValidate');

module.exports = {
  create(req, res) {
    if (InputValidate.validateInput(req.body)) {
      return res.status(403).json({ // forbidden request
        message: 'Invalid Input',
      });
    }
    return Document
      .create({
        title: req.body.title,
        content: req.body.content,
        access: req.body.access,
        userId: req.decoded.userId,
      })
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error));
  },

  listDocs(req, res) {
    if (req.decoded.userRole == 'admin') {
      if (req.query.limit || req.query.offset) {
        return Document
          .findAll({
            offset: req.query.offset,
            limit: req.query.limit
          })
          .then(document => {
            if (!document || document.length < 1) {
              return res.status(404).send({
                message: 'Document Not Found',
              });
            }
            return res.status(200).send(document);
          })
          .catch(error => res.status(400).send(error));
      }
      return Document
        .findAll()
        .then(document => {
          if (!document || document.length < 1) {
            return res.status(404).send({
              message: 'Document Not Found',
            });
          }
          return res.status(200).send(document);
        })
        .catch(error => res.status(400).send(error));
    } else {
      if (req.query.limit || req.query.offset) {
        return Document
          .findAll({
            offset: req.query.offset,
            limit: req.query.limit,
            where: {
              access: 'public',

            }
          })
          .then(document => {
            if (!document || document.length < 1) {
              return res.status(404).send({
                message: 'Document Not Found',
              });
            }
            return res.status(200).send(document);
          })
          .catch(error => res.status(400).send(error));
      }
      return Document
        .findAll({
          where: {
            access: 'public'
          }
        })
        .then(document => {
          if (!document || document.length < 1) {
            return res.status(404).send({
              message: 'Document Not Found',
            });
          }
          return res.status(200).send(document);
        })
        .catch(error => res.status(400).send(error));
    }
  },

  retrieve(req, res) {
      return Document
        .findOne({
          where: {
            documentId: req.params.documentId
          }
        })
        .then(document => {
          if (!document || document.length < 1) {
            return res.status(404).send({
              message: 'Document Not Found',
            });
          }
          return res.status(200).send(document);
        })
        .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Document
      .findOne({
        where: {
          id: req.params.documentId,
          userId: req.decoded.userId
        }
      })
      .then(document => {
        if (!document || document.length < 1) {
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return document
          .update({
            title: req.body.title || document.title,
            content: req.body.content || document.content,
            access: req.body.access || document.access,
          })
          .then(() => res.status(200).send(document)) 
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Document
      .findOne({
        where: {
          id: req.params.documentId,
          userId: req.decoded.userId
        }
      })
      .then(document => {
        if (!document || document.length < 1) {
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return document
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  searchDoc(req, res) {
    if (req.decoded.userRole == 'admin') {
      if (req.query.q) {
        return Document
          .findAll({
            where: {
              $or: [
                { title: { $iLike: `%${req.query.q}%` } },
                { content: { $iLike: `%${req.query.q}%` } },
              ]
            }
          })
          .then(document => res.status(200).send(document))
          .catch(error => res.status(400).send(error));
      }
    } else {
      if (req.query.q) {
        return Document
          .findAll({
            where: {
              userId: req.decoded.userId,
              $or: [
                { title: { $iLike: `%${req.query.q}%` } },
                { content: { $iLike: `%${req.query.q}%` } },
              ]
            }
          })
          .then(document => res.status(200).send(document))
          .catch(error => res.status(400).send(error));
      }
    }
  },

  userDocs(req, res) {
    return Document
      .findAll({
        where: {
          userId: req.params.userId
        }
      })
      .then(document => {
        if (!document || document.length < 1) {
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return res.status(200).send(document);
      })
      .catch((error) => {
        res.status(400).send(error)
      });
},

roleDocs(req, res) {
      if (req.query.limit || req.query.offset) {
        return Document
          .findAll({
            offset: req.query.offset,
            limit: req.query.limit,
             where: {
              access: req.decoded.userRole
            }
          })
          .then(document => {
            if (!document || document.length < 1) {
              return res.status(404).send({
                message: 'Document Not Found',
              });
            }
            return res.status(200).send(document);
          })
          .catch(error => res.status(400).send(error));
      }
      console.log(req.decoded.userRole, "jkhgfd");
      return Document
        .findAll({
           where: {
              access: req.decoded.userRole
            }
        })
        .then(document => {
          if (!document || document.length < 1) {
            return res.status(404).send({
              message: 'Document Not Found',
            });
          }
          return res.status(200).send(document);
        })
        .catch(error => res.status(400).send(error));
    }
  }