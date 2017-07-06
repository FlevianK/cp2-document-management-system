process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

describe('Roles', () => {
let token= '';
  beforeEach('it should return 200 response with a token when loging in with correct credecials', (done) => {
    chai.request(app)
      .post('/api/users/login')
      .send({
        email: "admin@live.com",
        password: "admin"
      })
      .end((err, res) => {
        res.should.have.status(200);
        token = res.body.token;
        done();
      });
  });
  describe('/POST', () => {

    it('should return a 201 response when create regular role', (done) => {
      chai.request(app)
        .post('/api/roles')
        .set('x-access-token', token)
        .send({
          title: "regular"
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
  describe('/POST', () => {
    it('should return a 201 response create fellow role', (done) => {
      chai.request(app)
        .post('/api/roles')
        .set('x-access-token', token)
        .send({
          title: "fellow"
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe('/POST', () => {
    it('should return a 400 response create wrong field name', (done) => {
      chai.request(app)
        .post('/api/roles')
        .set('x-access-token', token)
        .send({
          te: "fellow"
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/GET/ roles', () => {
    it('it should GET all roles', (done) => {
      chai.request(app)
        .get('/api/roles')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 204 response delete an existing role that is not admin', (done) => {
      chai.request(app)
        .delete('/api/roles/fellow')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 404 response when deleting a role does not exist', (done) => {
      chai.request(app)
        .delete('/api/roles/fellow')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 401 response when deleting an admin role', (done) => {
      chai.request(app)
        .delete('/api/roles/admin')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
});