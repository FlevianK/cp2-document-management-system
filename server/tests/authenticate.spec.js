process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

describe('Authenticate', () => {
  describe('/POST a wrong email', () => {
    it('it should return 404 response loging in with wrong email', (done) => {
      chai.request(app)
        .post('/api/users/login')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          email: "admin.com",
          password: "admin"
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/POST/users/login', () => {
    beforeEach('it should return 200 response with a token when loging in with correct credecials', (done) => {
      chai.request(app)
        .post('/api/users/login')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          email: "admin@gmail.com",
          password: "admin"
        })
        .end((err, res) => {
          res.should.have.status(200);
          let token = res.body.token;
          done();
        });
    });
  });
  
})
let token = 88888;
describe('/GET/documents/?q={}', () => {
  it('it should 401 response when access routes that need authentications in order to get in', (done) => {
    chai.request(app)
      .get('/api/search/documents/?q=Too')
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});