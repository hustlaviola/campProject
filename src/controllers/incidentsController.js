import incidents from '../models/incidentsModel';

class IncidentsController {
  static getAllRedFlags(req, res) {
    const redFlags = [];

    incidents.forEach((incident) => {
      if (incident.type === 'red-flag') {
        redFlags.push(incident);
      }
    });

    return res.status(200).send({
      status: res.statusCode,
      data: redFlags,
    });
  }

  static getRedFlag(req, res) {
    const redFlag = [];
    const redFlagIncident = incidents
      .find(incident => incident.id === parseInt(req.params.id, 10));

    redFlag.push(redFlagIncident);
    return res.status(200).send({
      status: res.statusCode,
      data: redFlag,
    });
  }

  static postRedFlag(req, res) {
    const {
      createdBy, latitude, longitude, Images, Videos, comment,
    } = req.body;

    const id = incidents.length > 0
      ? incidents[incidents.length - 1].id + 1 : incidents.length + 1;
    const createdOn = new Date();
    const type = 'red-flag';
    const location = `${latitude}, ${longitude}`
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
    const redFlag = incidents
      .find(incident => incident.id === parseInt(req.params.id, 10));
  
    const { latitude, longitude } = req.body;

    redFlag.location = `${latitude}, ${longitude}`;
    
    const response = [{
      id: redFlag.id,
      message: 'Updated red-flag record\'s location',
    }];
    return res.status(200).send({
      status: res.statusCode,
      data: response,
    });
  }

  static updateComment(req, res) {
    const redFlag = incidents
      .find(incident => incident.id === parseInt(req.params.id, 10));

    redFlag.comment = req.body.comment;
    const response = [{
      id: redFlag.id,
      message: 'Updated red-flag record\'s comment',
    }];
    return res.status(200).send({
      status: res.statusCode,
      data: response,
    });
  }

  static deleteRedFlag(req, res) {
    const redFlag = incidents
      .find(incident => incident.id === parseInt(req.params.id, 10));

    const index = incidents.indexOf(redFlag);

    incidents.splice(index, 1);
    const response = [{
      id: redFlag.id,
      message: 'red-flag record has been deleted',
    }];
    return res.status(202).send({
      status: res.statusCode,
      data: response,
    });
  }
}

export default IncidentsController;
