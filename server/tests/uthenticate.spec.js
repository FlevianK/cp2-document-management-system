process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

describe('Authenticate', () => {
  describe('/POST/users/login', () => {
    it('it should GET a token', (done) => {
      chai.request(app)
        .post('/api/users/login')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          email: "hellen@gmail.com",
          password: "hellen"
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe('/POST a wrong email', () => {
    it('it should GET a token', (done) => {
      chai.request(app)
        .post('/api/users/login')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          email: "hellen.com",
          password: "hellen"
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
})