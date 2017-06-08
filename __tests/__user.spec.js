const should = require('chai').should(),
expect = require('chai').expect,
superset = require('superset'),
api = superset('http://localhost:8000');


describe('User' () => {
  it('should return a 201 response', (done) => {
    api.post('/users/')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      username: "Flevv",
      firstName: "Kanaiza",
      lastName: "Flevain",
      password: "flev",
      email: "flev@live.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    });
    expect(201)
    end(err, res){
      expect(req.body.username).to.equal("Flevv");
      expect(req.body.firstName).to.equal("Kanaiza");
      expect(req.body.lastName).to.equal("Flevain");
      expect(req.body.email).to.equal("Flev");
      expect(req.body.password).to.equal("Flev@live.com");
      expect(req.body.createdAt).to.equal(new Date());
      expect(req.body.updateAt).to.equal(new Date());
      expect(req.body.roleId).to.equal(1);
    }
  })
});
