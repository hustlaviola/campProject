const Joi = require('joi');

const express = require('express');

const incidentsSchema = require('../model/incidentsModel');

const router = express.Router();

const incidents = [
  {
    id: 1,
    createdOn: new Date(),
    createdBy: 1,
    type: 'red-flag',
    location: '80.000, 90.000',
    status: 'draft',
    comment: 'First red-flag',
  },

  {
    id: 2,
    createdOn: new Date(),
    createdBy: 13,
    type: 'red-flag',
    location: '70.000, 33.000',
    status: 'draft',
    comment: 'second red-flag',
  },
];

router.get('/red-flags', (req, res) => res.status(200).send({
  status: res.statusCode,
  data: incidents,
}));

router.get('/red-flags/:id', (req, res) => {
  const redFlag = incidents.find(i => i.id === parseInt(req.params.id));
  if (!redFlag) {
    return res.status(404).send({
      status: res.statusCode,
      error: 'Not found',
    });
  }
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
    id: incidents[incidents.length - 1].id + 1,
    createdOn: new Date(),
    createdBy: req.body.createdBy,
    type: 'red-flag',
    location: req.body.location,
    status: 'draft',
    comment: req.body.comment,
  };

  incidents.push(incident);

  return res.status(201).send({
    status: res.statusCode,
    data: {
      id: incident.id,
      message: 'Created red-flag record',
    },
  });
});

module.exports = router;
