process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTg3MDg3OTMsImV4cCI6MTQ5ODcxMDIzM30.WemDTbqNT7Ya2OKijcmyuWAqEFlDB9DS0ppj_2CfMEM"


describe('Users', () => {
  describe('/POST', () => {
    it('should return a 201 response creating a new user', (done) => {
      chai.request(app)
        .post('/api/users/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          username: "admin",
          firstName: "admin",
          lastName: "admin",
          email: "admin@gmail.com",
          password: "admin",
          title: "admin"
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe('/GET/:id user', () => {
    it('it should return 400 retreving a user using bad request', (done) => {
      chai.request(app)
        .get('/api/users/uy')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/POST', () => {
    it('should return a 201 response creating a user successfuly', (done) => {
      chai.request(app)
        .post('/api/users/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          username: "v",
          firstName: "r",
          lastName: "Kaa",
          email: "fl@gmail.com",
          password: "flev",
          title: "regular"
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe('/POST', () => {
    it('should return a 400 creating using field name that does not exist in the DB', (done) => {
      chai.request(app)
        .post('/api/users/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          username: "v",
          firstName: "r",
          lastName: "Kaa",
          email: "fl@gmail.com",
          password: "flev",
          t: "regular"
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe('/POST', () => {
    it('should return a 403 response while some specified fields are empty', (done) => {
      chai.request(app)
        .post('/api/users/')
        .set('x-access-token', token)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          username: "TQuebeq",
          firstName: "Day",
          email: "",
          password: "",
          lastName:"",
          title:""
        })
        .end((err, res) => {
          res.should.have.status(403);
          done();
        });
    });
  });

  describe('/PUt', () => {
    it('should return a 200 response when updating user details', (done) => {
      chai.request(app)
        .put('/api/users/2')
        .set('x-access-token', token)
        .send({
          username: "Hellen",
          firstName: "Phoebe",
          lastName: "hellen",
          email: "hellen@gmail.com",
          password: "hellen",
          title: "admin"
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/PUt', () => {
    it('should return a 400 when updating using wrong time user id', (done) => {
      chai.request(app)
        .put('/api/users/kjhgf')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          username: "Hellen",
          firstName: "Phoebe",
          lastName: "hellen",
          email: "hellen@gmail.com",
          password: "hellen",
          title: "regular"
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/PUt', () => {
    it('should return a 401 when updating admin details', (done) => {
      chai.request(app)
        .put('/api/users/1')
        .set('x-access-token', token)
        .send({
          username: "Hellen",
          firstName: "Phoebe",
          lastName: "hellen",
          email: "hellen@gmail.com",
          password: "hellen",
          title: "admin"
        })
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });

  describe('/PUt', () => {
    it('should return a 400 when updating using when inputs are not valid', (done) => {
      chai.request(app)
        .put('/api/users/2')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          username: "Hellen",
          firstName: "Phoebe",
          lastName: "hellen",
          email: "hellen",
          password: "hellen",
          title: "admin"
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/PUt', () => {
    it('should return a 404 response when updating user that does not exist', (done) => {
      chai.request(app)
        .put('/api/users/80')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          username: "Hellen",
          firstName: "Phoebe",
          lastName: "hellen",
          email: "hellen@gmail.com",
          password: "hellen",
          title: "admin"
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/GET/:id user', () => {
    it('it should return 200 when fetching an existing user by the given id', (done) => {
      chai.request(app)
        .get('/api/users/2')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('username');
          res.body.should.have.property('firstName');
          res.body.should.have.property('lastName');
          res.body.should.have.property('email');
          res.body.should.have.property('password');
          res.body.should.have.property('title');
          done();
        });
    });
  });

  describe('/GET/users', () => {
    it('it 200 and data when listing all users if the users exist', (done) => {
      chai.request(app)
        .get('/api/users/')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET/users', () => {
    it('it should return 200 and data when listing users by the pagination and specified range exist', (done) => {
      chai.request(app)
        .get('/api/users/?limit=1&offset=1')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET/users', () => {
    it('it should return 400 users while paginate using wrong datatype', (done) => {
      chai.request(app)
        .get('/api/users/?limit=hvjbn&offset=hvjbnb')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/GET/users', () => {
    it('it should return 404 when listing users by the pagination and specified range does not exist', (done) => {
      chai.request(app)
        .get('/api/users/?limit=80&offset=60')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 404 response when deleting a user that dos not exist', (done) => {
      chai.request(app)
        .delete('/api/users/80')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 204 response when deleting a user that exist', (done) => {
      chai.request(app)
        .delete('/api/users/2')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 400 response when deleting a user with wrong datatype', (done) => {
      chai.request(app)
        .delete('/api/users/jmhgnvbc')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 401 response when deleting an admin', (done) => {
      chai.request(app)
        .delete('/api/users/1')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });

  describe('/GET/search/users/?q={}', () => {
    it('it should GET a user by searching', (done) => {
      chai.request(app)
        .get('/api/search/users/?q=admin')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET/search/users/?q={}', () => {
    it('it should return 404 searching a user that does not exist', (done) => {
      chai.request(app)
        .get('/api/search/users/?q=Marian')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

});