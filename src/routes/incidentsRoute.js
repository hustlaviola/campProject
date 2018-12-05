import express from 'express';
import IncidentsController from '../controllers/incidentsController';
import Validate from '../middlewares/validatePost';

const router = express.Router();

router.get('/red-flags', IncidentsController.getAllRedFlags);

router.get('/red-flags/:id', IncidentsController.getRedFlag);

router.post('/red-flags', Validate.validatePost, IncidentsController.postRedFlag);

router.patch('/red-flags/:id/location', Validate.validateLocationUpdate, IncidentsController.updateLocation);

export default router;
