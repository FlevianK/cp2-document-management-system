process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJSb2xlIjoicmVndWxhciIsImlhdCI6MTQ5ODcwODg3MSwiZXhwIjoxNDk4NzEwMzExfQ.P3A1bge4aiBHUy57V5afCBdx8ms6xQrkuTO5wc3uThc"

// testing as regular user

describe('Documents', () => {
  describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
        .post('/api/documents/')
        .set('x-access-token', token)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          title: "Tour to Quebeq",
          content: "Day to remember",
          access: "public",
          userId: "yfy"
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/GET', () => {
    it('it should 200 response and data when listng all documents and atleast one exist', (done) => {
      chai.request(app)
        .get('/api/documents/')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET', () => {
    it('it should 200 response when listng documents while paginate using an existing range ', (done) => {
      chai.request(app)
        .get('/api/documents/?limit=1&offset=0')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET/documents', () => {
    it('it should return 404 listing documents while paginate range does not exist', (done) => {
      chai.request(app)
        .get('/api/documents/?limit=8&offset=9')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/GET/documents', () => {
    it('it should return 400 response when listing documents while paginate using wrong datatype input', (done) => {
      chai.request(app)
        .get('/api/documents/?limit=khjgjf&offset=jhgngcbx')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/api/users/:userId/documents', () => {
    it('it should GET a documents using wrong datatype for user id', (done) => {
      chai.request(app)
        .get('/api/users/jghnfbdd/documents')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

   describe('/GET/search/documents/?q={}', () => {
    it('it should 200 response and data when searching a document that exist', (done) => {
      chai.request(app)
        .get('/api/search/documents/?q=Tour%20to%20Quebeq')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe('/GET/search/documents/?q={}', () => {
    it('it should 404 response when searching a document that does not exist', (done) => {
      chai.request(app)
        .get('/api/search/documents/?q=Toolkjj')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

});
