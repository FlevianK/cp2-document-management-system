const User = require('../models').User;
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const secret = 'HAHAHAHAHAHAHAHAhahahaahah>>>><<<<<<<<<<<<<<<<<<<<<<<<<<n jgfh g vgjkjvhkjfdkvjfdvjdfjgvjvjf'

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
          return res.status(404).send({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

          // check if password matches
          if (user.password != req.body.password) {
            return res.status(401).send({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {

            // if user is found and password is right
            // create a token
            const token = jwt.sign({ id: user.id }, secret, {
              expiresIn: 1440 // expires in 24 hours
            });

            // return the information including token as JSON
            return res.status(200).send({
              success: true,
              message: 'Login successful!',
              token: token
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
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
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
}
}