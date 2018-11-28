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

module.exports = router;
