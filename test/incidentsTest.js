const chai = require('chai');

const chaiHttp = require('chai-http');

const server = require('../index');

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
        done();
      });
  });
});

/* Test the /POST route */

describe('/POST red-flag', () => {
  it('it should not POST an incident without TYPE property', (done) => {
    const incident = {
      id: 6,
      createdOn: '2018-11-28T10:25:48.724Z',
      createdBy: 13,
      location: '30.000, 33.000',
      comment: 'New red-flag',
    };
    chai.request(server)
      .post('/api/v1/red-flags')
      .send(incident)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
  it('it should POST a red-flag incident', (done) => {
    const incident = {
      createdBy: 56,
      type: 'red-flag',
      location: '30.000, 33.000',
      comment: 'New red-flag',
    };
    chai.request(server)
      .post('/api/v1/red-flags')
      .send(incident)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.data.should.have.property('message').eql('Created red-flag record');
        done();
      });
  });
});

/* Test the /PATCH location route */

describe('/PATCH/:id/location red-flag', () => {
  it('it should UPDATE the location of the red-flag of the given id', (done) => {
    const redFlag = {
      id: 2,
      location: '44.000, 33,000',
    };
    chai.request(server)
      .patch(`/api/v1/red-flags/${redFlag.id}/location`)
      .send(redFlag.location)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.have.property('message').eql('Updated red-flag record\'s location');
        done();
      });
  });
});

/* Test the /PATCH comment route */

describe('/PATCH/:id/comment red-flag', () => {
  it('it should UPDATE the comment of the red-flag of the given id', (done) => {
    const redFlag = {
      id: 2,
      comment: 'patch this comment',
    };
    chai.request(server)
      .patch(`/api/v1/red-flags/${redFlag.id}/comment`)
      .send(redFlag.comment)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.have.property('message').eql('Updated red-flag record\'s comment');
        done();
      });
  });
});

/* Test the /DELETE/:id route */

describe('/DELETE/:id  red-flag', () => {
  it('it should DELETE the red-flag of the given id', (done) => {
    const redFlag = {
      id: 2,
    };
    chai.request(server)
      .delete(`/api/v1/red-flags/${redFlag.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.have.property('message').eql('red-flag record has been deleted');
        done();
        process.exit();
      });
  });
});
