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
}

export default IncidentsController;
