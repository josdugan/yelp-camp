const ExpressError = require('../../utils/ExpressError');
const { campgroundSchema } = require('./schemas');

const validate = (req, res, next, schema) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const msg = error.detailsmap((el) => el.message).join(', ');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

module.exports.validateCampground = (req, res, next) => {
  validate(req, res, next, campgroundSchema);
};
