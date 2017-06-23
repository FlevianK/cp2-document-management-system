process.env.NODE_ENV = 'test';

const app = require('../../app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTgyMzg0OTEsImV4cCI6MTQ5ODIzOTkzMX0.jfm7B_rcCT_Zszt_zXmoWwUW2PQRF-bqsn22K6Y_WjI"

describe('Documents', () => {
  describe('/GET/documents', () => {
    it('it should GET documents while paginate', (done) => {
      chai.request(app)
        .get('/api/documents/')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
        .post('/api/documents/')
        .set('x-access-token', token)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          title: "Tour to Quebeq",
          content: "Day to remember",
          access: "private",
          userId: 1
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

describe('/POST', () => {
    it('should return a 403 response', (done) => {
      chai.request(app)
        .post('/api/documents/')
        .set('x-access-token', token)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          title: "Tour to Quebeq",
          content: "Day to remember",
          access: "",
          userId: ""
        })
        .end((err, res) => {
          res.should.have.status(403);
          done();
        });
    });
  });

  describe('/GET/<id>', () => {
    it('it should GET a document by the given id', (done) => {
      chai.request(app)
        .get('/api/documents/2')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

describe('/GET/<id>', () => {
    it('it should GET a document by datatype id', (done) => {
      chai.request(app)
        .get('/api/documents/jmhnvbcc')
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
        .post('/api/documents/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          title: "Sick leave",
          content: "Submit a sick leave form after going to hospital",
          access: "private",
          userId: 1,
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
        .post('/api/documents/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          title: "December holiday",
          content: "Going to vist children homes in Kampala",
          access: "public",
          userId: 1,
        })
        .end((err, res) => {
          console.log(err);
          res.should.have.status(201);
          done();
        });
    });
  });

  describe('/PUT', () => {
    it('should return a 200 response', (done) => {
      chai.request(app)
        .put('/api/documents/1')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          title: "Fair day",
          content: "Dancing and shouting",
          access: "private",
          UserId: 2,
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  

describe('/PUT', () => {
    it('should return a 400 response', (done) => {
      chai.request(app)
        .put('/api/documents/jmnbcvx')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          title: "Fair day",
          content: "Dancing and shouting",
          access: "private",
          UserId: 2,
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/POST', () => {
    it('should return a 201 response', (done) => {
      chai.request(app)
        .post('/api/documents/')
        .set('x-access-token', token)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          title: "Tour",
          content: "Day to remember",
          access: "public",
          userId: 2
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

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

  describe('/PUT', () => {
    it('should return a 404 response', (done) => {
      chai.request(app)
        .put('/api/documents/80')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .send({
          title: "Fair day",
          content: "Dancing and shouting",
          access: "private",
          UserId: 1,
        })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/GET/<document>', () => {
    it('it should GET a document by the given id', (done) => {
      chai.request(app)
        .get('/api/documents/2')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('title');
          res.body.should.have.property('content');
          res.body.should.have.property('access');
          done();
        });
    });
  });

  describe('/GET/documents', () => {
    it('it should GET all documents', (done) => {
      chai.request(app)
        .get('/api/documents/')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET/documents', () => {
    it('it should GET documents while paginate', (done) => {
      chai.request(app)
        .get('/api/documents/?limit=1&offset=1')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/GET/documents', () => {
    it('it should GET documents while paginate', (done) => {
      chai.request(app)
        .get('/api/documents/?limit=80&offset=60')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

   describe('/GET/documents', () => {
    it('it should GET documents while paginate using wrong datatype input', (done) => {
      chai.request(app)
        .get('/api/documents/?limit=khjgjf&offset=jhgngcbx')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 204 response', (done) => {
      chai.request(app)
        .delete('/api/documents/2')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a  400', (done) => {
      chai.request(app)
        .delete('/api/documents/ljkhgfbf')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/DELETE', () => {
    it('should return a 404 response', (done) => {
      chai.request(app)
        .delete('/api/documents/2')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });


  describe('/GET/<document>', () => {
    it('it should GET a document by the given id', (done) => {
      chai.request(app)
        .get('/api/documents/2')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });


  describe('/GET/search/documents/?q={}', () => {
    it('it should GET a document by searching', (done) => {
      chai.request(app)
        .get('/api/search/documents/?q=Fair%20day')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/api/users/:userId/documents', () => {
    it('it should GET a documents for non existing user', (done) => {
      chai.request(app)
        .get('/api/users/2/documents')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  
  describe('/api/users/:userId/documents', () => {
    it('it should GET a documents for an existing user', (done) => {
      chai.request(app)
        .get('/api/users/1/documents')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
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
  describe('/DELETE', () => {
    it('should return a 204 response', (done) => {
      chai.request(app)
        .delete('/api/documents/1')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
  describe('/DELETE', () => {
    it('should return a 204 response', (done) => {
      chai.request(app)
        .delete('/api/documents/3')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
});
