import incidents from '../models/incidentsModel';

class Validate {
  static validateId(req, res, next) {
    const incident = incidents.find(i => i.id === parseInt(req.params.id, 10));
    if (!incident) {
      return res.status(404).send({
        status: res.statusCode,
        error: 'Red-flag record not found',
      });
    }
    return next();
  }

  static validatePost(req, res, next) {
    const {
      location, comment,
    } = req.body;

    if (!location) {
      return res.status(400).send({
        status: res.statusCode,
        error: 'Please add a location',
      });
    }

    if (!comment) {
      return res.status(400).send({
        status: res.statusCode,
        error: 'Please add a comment',
      });
    }

    return next();
  }

  static validateLocationUpdate(req, res, next) {
    const { location } = req.body;

    if (!location) {
      return res.status(400).send({
        status: res.statusCode,
        error: 'Please add a new location',
      });
    }

    return next();
  }

  static validateCommentUpdate(req, res, next) {
    const { comment } = req.body;

    if (!comment) {
      return res.status(400).send({
        status: res.statusCode,
        error: 'Please add a new comment',
      });
    }

    return next();
  }
}

export default Validate;
