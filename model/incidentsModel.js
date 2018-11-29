const Joi = require('joi');

const image = {};
const video = {};
const incidentsSchema = {
  id: Joi.number().integer(),
  createdOn: Joi.date(),
  createdBy: Joi.number().integer(),
  type: Joi.string().required(),
  location: Joi.string(),
  status: Joi.string(),
  Images: [image, image],
  Videos: [video, video],
  comment: Joi.string(),
};

module.exports = incidentsSchema;
