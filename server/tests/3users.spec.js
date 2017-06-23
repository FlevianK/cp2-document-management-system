process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTgyMzg0OTEsImV4cCI6MTQ5ODIzOTkzMX0.jfm7B_rcCT_Zszt_zXmoWwUW2PQRF-bqsn22K6Y_WjI"

describe('Users', () => {

  describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
        .post('/api/users/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          username: "Flevv",
          firstName: "flavour",
          lastName: "Kanaiza",
          email: "flavour@gmail.com",
          password: "flevv",
          title: "admin"
        })
        // .expect(201, done())
        .end((err, res) => {
          res.should.have.status(201);

          done();
        });
    });
  });

  

  describe('/GET/:id user', () => {
    it('it should GET a user by the given id', (done) => {
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
    it('should return a 201 response', (done) => {
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
        // .expect(201, done())
        .end((err, res) => {
          res.should.have.status(201);

          done();
        });
    });
  });

  describe('/POST', () => {
    it('should return a 400 response', (done) => {
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
    it('should return a 403 response', (done) => {
      chai.request(app)
        .post('/api/users/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          username: "v",
          firstName: "r",
          lastName: "Kaa",
          email: "fl@gmail.com",
          password: "",
          title: ""
        })
        .end((err, res) => {
          res.should.have.status(403);

          done();
        });
    });
  });

  describe('/PUt', () => {
    it('should return a 200 response', (done) => {
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
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/PUt', () => {
    it('should return a 400 response', (done) => {
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
          title: "admin"
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/PUt', () => {
    it('should return a 200 response', (done) => {
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
          res.should.have.status(200);
          done();
        });
    });
  });

describe('/PUt', () => {
    it('should return a 400 response', (done) => {
      chai.request(app)
        .put('/api/users/1')
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
    it('should return a 404 response', (done) => {
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
    it('it should GET a user by the given id', (done) => {
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
    it('it should GET all users', (done) => {
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
    it('it should GET users while paginate', (done) => {
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
    it('it should GET users while paginate using wrong datatype', (done) => {
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
    it('it should GET users while paginate', (done) => {
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
    it('should return a 404 response', (done) => {
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
    it('should return a 204 response', (done) => {
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
    it('should return a 400 response', (done) => {
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
    it('should return a 404 response not found', (done) => {
      chai.request(app)
        .delete('/api/users/2')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/GET/search/users/?q={}', () => {
    it('it should GET a user by searching', (done) => {
      chai.request(app)
        .get('/api/search/users/?q=Hellen')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

});