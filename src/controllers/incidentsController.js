import incidents from '../models/incidentsModel';

class IncidentsController {
  static getAllRedFlags(req, res) {
    const redFlags = [];

    incidents.forEach((incident) => {
      if (incident.type === 'red-flag') {
        redFlags.push(incident);
      }
    });

    if (redFlags.length === 0) {
      return res.status(404).send({
        status: res.statusCode,
        error: 'Red-flag records empty',
      });
    }

    return res.status(200).send({
      status: res.statusCode,
      data: redFlags,
    });
  }

  static getRedFlag(req, res) {
    const redFlag = [];
    const incident = incidents.find(i => i.id === parseInt(req.params.id));
    if (!incident || incident.type !== 'red-flag') {
      return res.status(404).send({
        status: res.statusCode,
        error: 'Red-flag not found',
      });
    }
    redFlag.push(incident);
    return res.status(200).send({
      status: res.statusCode,
      data: redFlag,
    });
  }

  static postRedFlag(req, res) {
    const {
      createdBy, location, Images, Videos, comment,
    } = req.body;

    const id = incidents.length > 0 ? incidents[incidents.length - 1].id + 1 : incidents.length + 1;
    const createdOn = new Date();
    const type = 'red-flag';
    const status = 'draft';

    const redFlag = {
      id,
      createdOn,
      createdBy,
      type,
      location,
      status,
      Images,
      Videos,
      comment,
    };
    const response = [
      {
        id: redFlag.id,
        message: 'Created red-flag record',
      },
    ];
    incidents.push(redFlag);
    return res.status(201).send({
      status: res.statusCode,
      data: response,
    });
  }

  static updateLocation(req, res) {
    const redFlag = incidents.find(i => i.id === parseInt(req.params.id));

    redFlag.location = req.body.location;
    const response = [{
      id: redFlag.id,
      message: 'Updated red-flag record\'s location',
    }];
    return res.status(200).send({
      status: res.statusCode,
      data: response,
    });
  }
}

export default IncidentsController;
