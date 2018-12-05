
class ValidatePost {
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
}

export default ValidatePost;
