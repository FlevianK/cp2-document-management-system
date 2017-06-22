const User = require('../models').User;
const Role = require('../models').Role;
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const bcrypt = require('bcryptjs');
const secret = 'HAHAHAHAHAHAHAHAhahahaahah>>>><<<<<<<<<<<<<<<<<<<<<<<<<<n jgfh g vgjkjvhkjfdkvjfdvjdfjgvjvjf';


module.exports = {
  login(req, res) {
    // find the user
    return User
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ 
            success: false, 
            message: 'Authentication failed. User not found.' 
          });
        } else if (user) {

          // check if password matches
          if (bcrypt.compareSync(user.password, req.body.password)) {
            return res.status(401).send({ 
              success: false, 
              message: 'Authentication failed. Wrong password.' 
            });
          } else {

            // if user is found and password is right
            // create a token
            const token = jwt.sign({ 
              userId: user.id, 
              userRole: user.title
            }, 
            secret, 
            {
              expiresIn: 1440 // expires in 24 hours
            });

            // return the information including token as JSON
            return res.status(200).send({
              success: true,
              message: 'Login successful!',
              token: token,
              userRole: user.title
            });
          }

        }
      })
      .catch((error) => {
        console.log(error)
      });
  },

  verifyLogin(req, res, next) {

    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  },
  roleAuthorise(req, res, next) {
    req.user = {};
    req.user.roles = [req.decoded.userRole];

    next();
  },

  roleUnauthorise(err, req, res, next) {

    // rest-bac authorization error propagate an Error object with a 401 status code 

    res.status(err.status || 403);
    res.json({
      message: err.message
    });

  }
}