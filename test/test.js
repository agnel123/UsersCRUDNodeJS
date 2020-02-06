const app = require("../index");

 const chai = require("chai");
 const chaiHttp = require("chai-http");

 const { expect } = chai;
 chai.use(chaiHttp);

describe("Server!", () => {

  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.info).to.equals("Node.js, Express and Postgres API");
        done();
      });
  });

  it ("Should Fecth all the users", (done)=>{
            chai
                .request(app)
                .get("/users/")
                .end((err, res)=>{
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('array');
                    done();
            })
})

it('should return Not Found', function() {
    return chai.request(app)
      .get('/INVALID_PATH')
      .then(function(res) {
        throw new Error('Path exists!');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });

it('should add new user', function() {
    return chai.request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send({
        "name": "mochatest",
        "email": "mochatest@example.com"
      })
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      });
  });

it("should get a single user record", (done) => {
             const id = 1;
             chai.request(app)
                 .get(`/users/${id}`)
                 .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    console.log(res.body);
                    expect(res.body).to.be.an('array');
                    expect(res.body[0]).to.have.property('id');
                    expect(res.body[0]).to.have.property('name');
                    expect(res.body[0]).to.have.property('email');
                    done();
                  });
         });

});