const Joi = require('joi');

const incidentsSchema = {
  id: Joi.number().integer(),
  createdOn: Joi.date(),
  createdBy: Joi.number().integer(),
  type: Joi.string().required(),
  location: Joi.string(),
  status: Joi.string(),
  comment: Joi.string(),
};

module.exports = incidentsSchema;
