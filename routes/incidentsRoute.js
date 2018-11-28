const Joi = require('joi');

const express = require('express');

const incidentsSchema = require('../model/incidentsModel');

const router = express.Router();

const incidents = [
  {
    id: 1,
    createdOn: '2018-11-28T17:29:56.713Z',
    createdBy: 1,
    type: 'red-flag',
    location: '80.000, 90.000',
    status: 'draft',
    comment: 'First red-flag',
  },

  {
    id: 2,
    createdOn: '2018-11-28T17:29:56.713Z',
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

module.exports = router;
