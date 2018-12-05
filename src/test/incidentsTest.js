import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

const should = chai.should();


/* Test the GET route */

describe('/GET red-flag', () => {
  it('it should GET all the red-flag', (done) => {
    chai.request(app)
      .get('/api/v1/red-flags')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array');
        res.body.should.have.property('data');
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
    chai.request(app)
      .get(`/api/v1/red-flags/${redFlag.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.be.a('array');
        res.body.should.have.property('data');
        done(err);
      });
  });
  it('it should return an error if there is no red flag record', (done) => {
    const redFlag = {
      id: 11,
    };
    chai.request(app)
      .get(`/api/v1/red-flags/${redFlag.id}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('error').eql('Red-flag not found');
        done(err);
      });
  });
});
