const Document = require('../models').Document;

module.exports = {
  create(req, res) {
    Document.create({
        title: req.body.title,
        content: req.body.content,
        access: req.body.access,
        userId: req.body.userId,
      })
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
  return Document
    .findAll()
    .then(document => res.status(200).send(document))
    .catch(error => res.status(400).send(error));
  },
  paginateDocs(req, res) {
    if (req.query.limit || req.query.offset) {
      return Document
        .findAll({ 
          offset: req.query.offset, 
          limit: req.query.limit 
        })
        .then(document => {
          if (!document) {
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
      .findById(req.params.documentId)
      .then(document => {
        if (!document) {
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
      .findById(req.params.documentId)
      .then(document => {
        if (!document ) {
          return res.status(404).send({
            message: 'Document Not Found',
          });
        }
        return document
          .update({
            title: req.body.title || document.title,
            content: req.body.content || document.content,
            access: req.body.access || document.access,
            userId: req.body.userId || document.userId,
          })
          .then(() => res.status(200).send(document))  // Send back the updated document.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Document
      .findById(req.params.documentId)
      .then(document => {
        if (!document) {
          return res.status(400).send({
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
    if (req.query.q) {
      return Document
      .findAll({
        where: {
          $or: [
            { title: { $like: `%${req.query.q}%` } },
          ]
        }
      })
      .then(response => res.status(200).send(response))
      .catch(error => res.status(400).send(error));
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
        if (!document ) {
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
};