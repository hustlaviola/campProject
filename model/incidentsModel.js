const Joi = require('joi');

const incidentSchema = {
  id: Joi.number().integer(),
  createdOn: Joi.date(),
  createdBy: Joi.number().integer(),
  type: Joi.string().required(),
  location: Joi.string(),
  status: Joi.string(),
  comment: Joi.string(),
};

module.exports = incidentSchema;
