import incidents from '../models/incidentsModel';

class Validate {
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
    const redFlag = incidents.find(i => i.id === parseInt(req.params.id));
    const { location } = req.body;

    if (!redFlag) {
      return res.status(404).send({
        status: res.statusCode,
        error: 'Red-flag record not found',
      });
    }
    if (!location) {
      return res.status(400).send({
        status: res.statusCode,
        error: 'Please add a new location',
      });
    }

    return next();
  }
}

export default Validate;
