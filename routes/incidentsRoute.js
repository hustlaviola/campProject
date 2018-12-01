const Joi = require('joi');

const express = require('express');

const incidentsSchema = require('../model/incidentsModel');

const router = express.Router();

const incidents = [{
  id: 1,
  createdOn: new Date(),
  createdBy: 12,
  type: 'red-flag',
  location: '33.000, 44.000',
  status: 'draft',
  comment: 'new red-flag',
}];

router.get('/red-flags', (req, res) => res.status(200).send({
  status: res.statusCode,
  data: incidents,
}));

router.get('/red-flags/:id', (req, res) => {
  const redFlag = [];
  const incident = incidents.find(i => i.id === parseInt(req.params.id));
  if (!incident) {
    return res.status(404).send({
      status: res.statusCode,
      error: 'Red-flag not found',
    });
  }
  redFlag.push(incident);
  return res.status(200).send({
    status: res.statusCode,
    data: redFlag,
  });
});

router.post('/red-flags', (req, res) => {
  const result = Joi.validate(req.body, incidentsSchema);

  if (result.error) {
    return res.status(400).send({
      status: res.statusCode,
      error: result.error.details[0].message,
    });
  }

  const incident = {
    id: incidents.length > 0 ? incidents[incidents.length - 1].id + 1 : incidents.length + 1,
    createdOn: new Date(),
    createdBy: req.body.createdBy,
    type: 'red-flag',
    location: req.body.location,
    status: 'draft',
    Images: req.body.Images,
    Videos: req.body.Videos,
    comment: req.body.comment,
  };
  const response = [
    {
      id: incident.id,
      message: 'Created red-flag record',
    },
  ];
  incidents.push(incident);
  return res.status(201).send({
    status: res.statusCode,
    data: response,
  });
});

router.patch('/red-flags/:id/location', (req, res) => {
  const redFlag = incidents.find(i => i.id === parseInt(req.params.id));
  if (!redFlag) {
    return res.status(404).send({
      status: res.statusCode,
      error: 'Not found',
    });
  }

  const result = Joi.validate(req.body.location, incidentsSchema.location);
  if (result.error) {
    return res.status(400).send({
      status: res.statusCode,
      error: result.error.details[0].message,
    });
  }

  redFlag.location = req.body.location;
  const response = [{
    id: redFlag.id,
    message: 'Updated red-flag record\'s location',
  }];
  return res.status(200).send({
    status: res.statusCode,
    data: response,
  });
});

router.patch('/red-flags/:id/comment', (req, res) => {
  const redFlag = incidents.find(i => i.id === parseInt(req.params.id));
  if (!redFlag) {
    return res.status(404).send({
      status: res.statusCode,
      error: 'Not found',
    });
  }


  const result = Joi.validate(req.body.comment, incidentsSchema.comment);
  if (result.error) {
    return res.status(400).send({
      status: res.statusCode,
      error: result.error.details[0].message,
    });
  }

  redFlag.comment = req.body.comment;
  const response = [{
    id: redFlag.id,
    message: 'Updated red-flag record\'s comment',
  }];
  return res.status(200).send({
    status: res.statusCode,
    data: response,
  });
});

router.delete('/red-flags/:id', (req, res) => {
  const redFlag = incidents.find(i => i.id === parseInt(req.params.id));
  if (!redFlag) {
    return res.status(404).send({
      status: res.statusCode,
      error: 'Not found',
    });
  }

  const index = incidents.indexOf(redFlag);

  incidents.splice(index, 1);
  const response = [{
    id: redFlag.id,
    message: 'red-flag record has been deleted',
  }];
  return res.status(200).send({
    status: res.statusCode,
    data: response,
  });
});

module.exports = router;
