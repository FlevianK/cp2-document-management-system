process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTgwNjYwNjksImV4cCI6MTQ5ODA2NzUwOX0.OPnhwc1zy61hK2y6XAjEYjz1dgx9dkfnKC1-cyVlF1I"

describe('Roles', () => {
  describe('/POST', () => {
    it('should return a 201 response when create admin role', (done) => {
      chai.request(app)
        .post('/api/roles')
        .set('x-access-token', token)
        .send({
          title: "admin"
        })
        .end((err, res) => {
          // console.log(res);
          res.should.have.status(201);
          done();
        });
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
          // console.log(res);
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
          // console.log(res);
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
          // console.log(res);
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
    it('should return a 204 response', (done) => {
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
    it('should return a 404 response', (done) => {
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
});