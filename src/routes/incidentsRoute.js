import express from 'express';

import IncidentsController from '../controllers/incidentsController';

const router = express.Router();

router.get('/red-flags', IncidentsController.getAllRedFlags);

export default router;
