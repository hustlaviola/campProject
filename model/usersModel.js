const Joi = require('joi');

const userSchema = {
  id: Joi.number().integer(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  othernames: Joi.string(),
  email: Joi.string().email({ minDomainAtoms: 2 }).required(),
  phonenumber: Joi.string(),
  username: Joi.string().alphanum().min(6).max(30)
    .required(),
  registered: Joi.date(),
  isAdmin: Joi.boolean(),
};

module.exports = userSchema;
