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
        res.body.data.should.be.an('array');
        res.body.should.have.property('data');
        done(err);
      });
  });
});

/* Test the /GET/:id route */

describe('/GET/:id red-flag', () => {
  it('it should return an error if there is no red flag record', (done) => {
    const redFlag = {
      id: 11,
    };
    chai.request(app)
      .get(`/api/v1/red-flags/${redFlag.id}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        res.body.should.have.property('error').eql('Red-flag record not found');
        done(err);
      });
  });
  it('it should GET a red-flag of the given id', (done) => {
    const redFlag = {
      id: 1,
    };
    chai.request(app)
      .get(`/api/v1/red-flags/${redFlag.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.data.should.be.an('array');
        res.body.should.have.property('data');
        done(err);
      });
  });
});

/* Test the /POST route */

describe('/POST red-flag', () => {
  it('it should not POST a red-flag without LOCATION', (done) => {
    const redFlag = {
      comment: 'New red-flag',
    };
    chai.request(app)
      .post('/api/v1/red-flags')
      .send(redFlag)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('error').eql('Please add a location');
        done(err);
      });
  });
  it('it should not POST a red-flag without COMMENT', (done) => {
    const redFlag = {
      location: '33.453, 44.322',
    };
    chai.request(app)
      .post('/api/v1/red-flags')
      .send(redFlag)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('error').eql('Please add a comment');
        done(err);
      });
  });
  it('it should POST a red-flag incident', (done) => {
    const incident = {
      location: '30.433, 33.461',
      comment: 'New red-flag',
    };
    chai.request(app)
      .post('/api/v1/red-flags')
      .send(incident)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.an('object');
        res.body.data.should.be.an('array');
        res.body.data[0].should.have.property('message').eql('Created red-flag record');
        done(err);
      });
  });
});

/* Test the /PATCH location route */

describe('/PATCH/:id/location red-flag', () => {
  it('it should return an error if the red-flag record doesn\'t exist', (done) => {
    const redFlag = {
      id: 11,
      location: '44.000, 33.000',
    };
    chai.request(app)
      .patch(`/api/v1/red-flags/${redFlag.id}/location`)
      .send(redFlag)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        res.body.should.have.property('error').eql('Red-flag record not found');
        done(err);
      });
  });
  it('it should return an error if location field is empty', (done) => {
    const redFlag = {
      id: 1,
      location: '',
    };
    chai.request(app)
      .patch(`/api/v1/red-flags/${redFlag.id}/location`)
      .send(redFlag)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('error').eql('Please add a new location');
        done(err);
      });
  });
  it('it should UPDATE the location of the red-flag of the given id', (done) => {
    const redFlag = {
      id: 1,
      location: '44.000, 33.000',
    };
    chai.request(app)
      .patch(`/api/v1/red-flags/${redFlag.id}/location`)
      .send(redFlag)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.data.should.be.an('array');
        res.body.data[0].should.have.property('message').eql('Updated red-flag record\'s location');
        done(err);
      });
  });
});

/* Test the /PATCH comment route */

describe('/PATCH/:id/comment red-flag', () => {
  it('it should return an error if the red-flag record doesn\'t exist', (done) => {
    const redFlag = {
      id: 11,
      comment: '44.000, 33.000',
    };
    chai.request(app)
      .patch(`/api/v1/red-flags/${redFlag.id}/comment`)
      .send(redFlag)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        res.body.should.have.property('error').eql('Red-flag record not found');
        done(err);
      });
  });
  it('it should return an error if comment field is empty', (done) => {
    const redFlag = {
      id: 1,
      comment: '',
    };
    chai.request(app)
      .patch(`/api/v1/red-flags/${redFlag.id}/comment`)
      .send(redFlag)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('error').eql('Please add a new comment');
        done(err);
      });
  });
  it('it should UPDATE the comment of the red-flag of the given id', (done) => {
    const redFlag = {
      id: 1,
      comment: '44.000, 33.000',
    };
    chai.request(app)
      .patch(`/api/v1/red-flags/${redFlag.id}/comment`)
      .send(redFlag)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.data.should.be.an('array');
        res.body.data[0].should.have.property('message').eql('Updated red-flag record\'s comment');
        done(err);
      });
  });
});

/* Test the /DELETE/:id route */

describe('/DELETE/:id  red-flag', () => {
  it('it should return an error if red-flag record doesn\'t exist', (done) => {
    const redFlag = {
      id: 11,
    };
    chai.request(app)
      .delete(`/api/v1/red-flags/${redFlag.id}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        res.body.should.have.property('error').eql('Red-flag record not found');
        done(err);
      });
  });
  it('it should DELETE the red-flag of the given id', (done) => {
    const redFlag = {
      id: 1,
    };
    chai.request(app)
      .delete(`/api/v1/red-flags/${redFlag.id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.data.should.be.an('array');
        res.body.data[0].should.have.property('message').eql('red-flag record has been deleted');
        done(err);
      });
  });
});
