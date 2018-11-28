const chai = require('chai');

const chaiHttp = require('chai-http');

const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

/* Test the GET route */

describe('/GET red-flag', () => {
  it('it should GET all the red-flag', (done) => {
    chai.request(server)
      .get('/api/v1/red-flags')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array');
        done();
      });
  });
});

/* Test the /GET/:id route */

describe('/GET/:id red-flag', () => {
  it('it should GET a red-flag of the given id', (done) => {
    const redFlag = {
      id: 1,
    };
    chai.request(server)
      .get(`/api/v1/red-flags/${redFlag.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.have.property('createdOn');
        res.body.data.should.have.property('createdBy');
        res.body.data.should.have.property('location');
        res.body.data.should.have.property('type').eql('red-flag');
        res.body.data.should.have.property('status');
        res.body.data.should.have.property('comment');
        done();
      });
  });
});
